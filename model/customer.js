//customer model
var customer = (function () {
  var _name = '',
  _address = {
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  _contact = {
    phone: '',
    email: ''
  },
  _finance = {
    credit_card_number: '',
    credit_card_type: '',
    expiration_month:'',
    expiration_year:''
  },
  _order = {
    product_name: '',
    product_id: '',
    price: '',
    date: '',
    browser_info: ''
  },
  _api = {
    setName: function (n) {
      _name = n;
    }, 
    setStreet: function (s) {
      _address.street = s;
    },
    setCity: function (c) {
      _address.city = c;
    },
    setState: function (ss) {
      _address.state = ss;
    },
    setZip: function (z) {
      _address.zip = z;
    },
    setPhone: function (p) {
      _contact.phone = p;
    },
    setEmail: function (e) {
      _contact.email=e;
    },
    setCreditCard: function (cc) {
      _finance.credit_card_number = cc;
    },
    setCreditCardType: function (cct) {
      _finance.credit_card_type = cct;
    },
    setExpiration_month: function (em) {
      _finance.expiration_month = em;
    },
    setExpiration_year: function (y) {
      _finance.expiration_year = y;
    },
    setProductName: function (pn) {
      _order.product_name = pn;
    },  
    setProductID: function (pid) {
      _order.product_id = pid;
    },
    setPrice: function (p) {
      _order.price = p;
    },
    setOrderDate: function () {
      _order.date = new Date();
    }, 
    setBrowserInfo: function () {
      _order.browser_info = navigator.userAgent;
    },
    getCustomerData: function () {
      return JSON.stringify({
        customer_name: _name,
        customer_street: _address.street,
        customer_city: _address.city,
        customer_state: _address.state,
        customer_zip: _address.zip,
        customer_phone: _contact.phone,
        customer_email: _contact.email,
        customer_cc: _finance.credit_card_number,
        customer_cc_type: _finance.credit_card_type,
        customer_cc_exp_month: _finance.expiration_month,
        customer_cc_exp_year: _finance.expiration_year,
        order_product_name: _order.product_name,
        order_product_id: _order.product_id,
        order_product_price: _order.price,
        order_date: _order.date,
        order_browser_info: _order.browser_info 
      }); 
    }
  };
  return {
    api: _api
  }
})();