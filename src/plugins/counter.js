export default class Counter {
  constructor({ item, initialValue = 1, step = 1 }) {
    this.value = initialValue;
    this.step = step;
    this.refs = {
      decbtn: item.querySelector('button[data-action="decrement"]'),
      incbtn: item.querySelector('button[data-action="increment"]'),
      countValue: item.querySelector("div.countValue"),  
    };
    this.updateCountValue();
    this.bindEvents();

  }
  updateCountValue() {
    this.refs.countValue.textContent = this.value;
  }
  decrement() {
    this.value -= this.step;
    this.updateCountValue();
  }
  increment(){
    this.value += this.step;
    this.updateCountValue();
  }
  bindEvents(){
      this.refs.decbtn.addEventListener("click", this.decrement.bind(this));
      this.refs.incbtn.addEventListener("click", this.increment.bind(this));
      
  }
}
