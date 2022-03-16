import React from 'react';

function FinishTime() {
  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = (fullDate.getMonth() + 1).toString().padStart(2, '0');
  const date = fullDate.getDate().toString().padStart(2, '0');
  const today = year + '-' + month + '-' + date;

  // if (today) {
  //   const now = +new Date();
  //   const diff = Math.floor((now - fullDate) / 1000);
  //   const lessMinute = diff < 60;
  //   const lessHours = diff < 60 * 60;
  //   const lessDay = diff < 60 * 60 * 24;

  //   if (lessMinute) {
  //     return diff + " 秒前";
  //   }
  //   if (lessHours) {
  //     return Math.floor(diff / 60) + " 分鐘前";
  //   }
  //   if (lessDay) {
  //     return Math.floor(diff / (60 * 60)) + " 小時前";
  //   }
  // }
  return (
    <>
      <div className="finishTime">完成時間：{today}</div>
    </>
  );
}

export default FinishTime;
