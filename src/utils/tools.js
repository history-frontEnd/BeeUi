// 获取日期的标准格式 支持seconds
export const getOneDay = (days) => {
  let d;
  try {
    d = days && new Date(days)
    d = d || new Date();
  } catch (error) {
    throw new Error(`${days}格式不正确`)
  }
  let y = d.getFullYear();
  let m = d.getMonth() + 1;
  let day = d.getDate();
  m = m < 10 ? ('0' + m) : m;
  day = day < 10 ? ('0' + day) : day;
  return `${y}-${m}-${day}`;
}

// 在某个日期的基础上加减
export const countDays = (oneDay, day) => {
  if (typeof day !== 'number') {
    throw new Error(`${day} must be number!`);
  }
  let oneDayS = new Date(oneDay).getTime();
  oneDayS = oneDayS + day * 24 * 60 * 60 * 1000;
  return getOneDay(oneDayS);
}

// 比较days
export const equalsDay = (s, e) => {
  return new Date(s).getTime() - new Date(e).getTime();
}

  // 返回天数 date2 - date1   now为当前日期
export const dateMinusDate = (date1, date2) => {
  var date1_ = date1 === 'now' ? new Date() : new Date(date1);
  var date2_ = date2 === 'now' ? new Date() : new Date(date2);
  let days = (date2_.getTime() - date1_.getTime()) / (24 * 60 * 60 * 1000);
  return days > 0 ? Math.floor(days) : Math.ceil(days);
}

  // 返回日期
export const dateMinusDays = (date, days) => {
  var d = new Date(date);
  d.setDate(d.getDate() - days);
  var m = d.getMonth() + 1;
  var m_ = m.toString().length === 1 ? '0' + m : m;
  var date_ = d.getDate().toString().length === 1 ? '0' + d.getDate() : d.getDate();
  return d.getFullYear() + '-' + m_ + '-' + date_;
}

// 孕周最大为349天 49周6天
export const countPregnancyWeek = (expectedDate) => {
  if (!expectedDate) {
    return '';
  }
  expectedDate = expectedDate.split(' ')[0];
  let day = dateMinusDate(dateMinusDays(expectedDate, 280), 'now');
  let day_ = day > 349 ? 349 : day;
  let pregnancyWeek = '孕' + parseInt(day_ / 7) + '周+' + day_ % 7 + '天';
  return pregnancyWeek;
}

export const countBabyAge = (babyBirthday) => {
  if (!babyBirthday) {
    return '';
  }
  babyBirthday = babyBirthday.split(' ')[0];
  let _day = dateMinusDate(babyBirthday, 'now');
  let babyAge = parseInt(_day / 30) + '个月+' + _day % 30 + '天';
  return babyAge;
}

// 随机阅读数量
export const baseReadNumbers = (onlineDate, index) => {
  let mapNumber = {
    0: 519,
    1: 114,
    2: 384,
    3: 359
  }
  let secondes = new Date().getTime() - new Date(onlineDate).getTime();
  if (secondes < 0) {
    secondes = 0;
  }
  let mins = secondes / (60 * 1000);
  // 每分钟阅读量系数
  mins = parseInt(mins * 1.1);
  let result = Math.ceil(mins + mapNumber[index]);
  if (result > 10000) {
    result = '10000+';
  }
  return result;
}

export const randomNumber = (range = 10) => {
  return Math.ceil(Math.random() * range)
}
