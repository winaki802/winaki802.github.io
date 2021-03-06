// 푸시 메세지 받는 경우 처리
self.addEventListener('push', function (event) {
  // 푸시 메시지를 JSON형태로 변경

  //console.log(event);
  let data = '';
  if (event.data) {
    data = JSON.parse(event.data.text())
        console.log("event data : ")
      console.log(data.data);
  } else {
    console.log("데이터가 비어있습니다!")
  }

  // 알림 메시지 옵션 준비
  const options = {
    body: data.data.title,
    icon: '/img/push-noti.png',
    badge: '/img/push-badge-icon.png',
    image: '',
    actions: [{
      action: 'sms,' + data.data.smsid,
      title: '알람메시지 확인',
      icon: '/img/push-info.png'      
    }],
    vibrate: [500, 100, 500]
  }
  event.waitUntil(
    // 알림 메시지 전송하여 표시
    self.registration.showNotification("금호타이어 알람", options)
  )
})
// 푸시 알림 메시지에서 사용자가 링크 클릭 시 처리
self.addEventListener('notificationclick', function (event) {
  // 알림 메시지의 링크 클릭 시 경우별 사이트로 이동
  if (event.action == 'like') {
    self.clients.openWindow("https://www.starbucks.com/");
  } else if (event.action.substring(0,3) == 'sms') {    
    self.clients.openWindow("http://localhost:9034/lineCharts/?smsid=" + event.action) ;
  }
  // 푸시알림 이벤트 종료
  event.notification.close();
}, false);

