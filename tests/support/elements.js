el = function(){
  this.view = {
    field: element(by.id('field')),
    mem_sign: element(by.id('memory-sign')),
    calc_string: element(by.id('calculation-string')),
    notif: element(by.id('notifications')),
  };
  this.op = {
    plus: element(by.id('plus')),
    minus: element(by.id('minus')),
    multiply: element(by.id('multiply')),
    divide: element(by.id('divide'))
  };
  this.sp_op = {
    percent: element(by.id('percent')),
    reciproc: element(by.id('reciproc')),
    square_root: element(by.id('square_root'))
  };
  this.svc = {
    equally: element(by.id('equally')),
    reset_all: element(by.id('reset')),
    clear_last: element(by.id('clear_error')),
    plus_minus: element(by.id('plus-minus')),
    backspace: element(by.id('backspace')),
  };
  this.mem = {
    clear: element(by.id('mc')),
    show: element(by.id('mr')),
    save: element(by.id('ms')),
    plus: element(by.id('m_plus')),
    minus: element(by.id('m_minus'))
  };
  this.clipboard = {
    copy: element(by.id('copy')),
    cut: element(by.id('cut'))
  };
  this.additional = {
    info: element(by.id('show-info')),
    keyboard: element(by.id('show-keyboard'))
  };
  this.num = {
    minus: element(by.id('point')),
    populate: function () {
      for (var i = 0; i <= 9; i++) {
        this['n' + i] = element(by.id('n' + i));
      }
    }()
  };
  this.add_pages = {
    calc: element(by.className('show-calc')),
    keyboard_img: element(by.className('keyboard-image')),
    keyboard_desc: element(by.className('keyboard-description')),
    info_desc: element(by.className('info-description'))
  };
}
module.exports.el = new el();