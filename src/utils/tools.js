// 获取日期的标准格式 支持seconds
export const getOneDay = days => {
  let d;
  try {
    d = days && new Date(days);
    d = d || new Date();
  } catch (error) {
    throw new Error(`${days}格式不正确`);
  }
  let y = d.getFullYear();
  let m = d.getMonth() + 1;
  let day = d.getDate();
  m = m < 10 ? '0' + m : m;
  day = day < 10 ? '0' + day : day;
  return `${y}-${m}-${day}`;
};

// 在某个日期的基础上加减
export const countDays = (oneDay, day) => {
  if (typeof day !== 'number') {
    throw new Error(`${day} must be number!`);
  }
  let oneDayS = new Date(oneDay).getTime();
  oneDayS = oneDayS + day * 24 * 60 * 60 * 1000;
  return getOneDay(oneDayS);
};

// 比较days
export const equalsDay = (s, e) => {
  return new Date(s).getTime() - new Date(e).getTime();
};

// 返回天数 date2 - date1   now为当前日期
export const dateMinusDate = (date1, date2) => {
  var date1_ = date1 === 'now' ? new Date() : new Date(date1);
  var date2_ = date2 === 'now' ? new Date() : new Date(date2);
  let days = (date2_.getTime() - date1_.getTime()) / (24 * 60 * 60 * 1000);
  return days > 0 ? Math.floor(days) : Math.ceil(days);
};

// 返回日期
export const dateMinusDays = (date, days) => {
  var d = new Date(date);
  d.setDate(d.getDate() - days);
  var m = d.getMonth() + 1;
  var m_ = m.toString().length === 1 ? '0' + m : m;
  var date_ =
    d.getDate().toString().length === 1 ? '0' + d.getDate() : d.getDate();
  return d.getFullYear() + '-' + m_ + '-' + date_;
};
