
const sCacheName = 'hello-pwa'; // 캐시제목 선언
const aFilesToCache = [ // 캐시할 파일 선언
  './',
  './index.html',
  './manifest.json',
  './images/hello-pwa.png'
];

// 2.서비스워커를 설치하고 캐시를 저장함
self.addEventListener('install', pEvent => {
  console.log('서비스워커 설치함!');
  pEvent.waitUntil(
    caches.open(sCacheName)
    .then(pCache => {
      console.log('파일을 캐시에 저장함!');
      return pCache.addAll(aFilesToCache);
    })
  );
});

// 3. 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener('activate', pEvent => {
  console.log('서비스워커 동작 시작됨!');
});

// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환 
self.addEventListener('fetch', pEvent => {
  pEvent.respondWith(
    caches.match(pEvent.request)
    .then(response => {
      if (!response) {
        console.log("네트워크에서 데이터 요청!", pEvent.request)
        return fetch(pEvent.request);
      }
      console.log("캐시에서 데이터 요청!", pEvent.request)
      return response;
    }).catch(err => {
      console.log(err)
      //return new response("Hello offline page")
    })
  );
});


// 푸시 메세지 받는 경우 처리
self.addEventListener('push', function (event) {
  // 푸시 메시지를 JSON형태로 변경

  //console.log(event);
  //let data = '';
  if (event.data) {
    data = JSON.parse(event.data.text())
    console.log(data)
  } else {
    console.log("데이터가 비어있습니다!")
  }

  // 알림 메시지 옵션 준비
  const options = {
    body: data.pMsg,
    icon: '/img/push-noti-icon.png',
    badge: '/img/push-badge-icon.png',
    image: '/img/push-news.jpg',
    actions: [{
      action: 'info',
      title: '이 링크는 상세정보 페이지로 이동합니다.',
      icon: '/img/push-info.png'
    }],
    vibrate: [500, 100, 500]
  }
  event.waitUntil(
    // 알림 메시지 전송하여 표시
    self.registration.showNotification("winaki", options)
  )
})
// 푸시 알림 메시지에서 사용자가 링크 클릭 시 처리
self.addEventListener('notificationclick', function (event) {
  // 알림 메시지의 링크 클릭 시 경우별 사이트로 이동
  if (event.action == 'like') {
    self.openWindow("https://www.starbucks.com/");
  } else if (event.action == 'info') {
    self.openWindow("https://winaki802.github.io/");
  }
  // 푸시알림 이벤트 종료
  event.notification.close();
}, false);
