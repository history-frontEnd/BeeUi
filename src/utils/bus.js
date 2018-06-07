class Bus {
  constructor() {
    this.list = [];
  }
  emit(functionName, args) {
    this.list.forEach(obj => {
      if (obj.name === functionName) {
        obj.callback && obj.callback(args);
        // && !obj.used
        // obj.used = true
      }
    });
  }
  on(functionName, callback) {
    this.list.push({
      name: functionName,
      callback: callback,
      used: false
    });
  }
  removeListener(functionName, listener) {
    this.list.map((item, i) => {
      if (item.name === functionName && item.callback === listener) {
        this.list.splice(i, 1);
      }
    });
  }
  once(functionName, listener) {
    var fired = false;
    function g() {
      this.removeListener(functionName, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    this.on(functionName, g);
  }
}

export default Bus;
