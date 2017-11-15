//controller
var productCard__controller = (function () {
	var _render = function (domElementID, str) {
	  document.getElementById(domElementID).innerHTML=str;
	},
	_populateCard = function ($btn) {
		var dataSetId = $btn.attr('href').replace('/checkout-two/?offer=',"").split('&')[0];
		_render('product-img', skinnyFit.api.getDataPointValue(dataSetId, 'product_image'));
		_render('product-description', skinnyFit.api.getDataPointValue(dataSetId, 'product_description'));
		_render('product-price', skinnyFit.api.getDataPointValue(dataSetId, 'product_price'));
		_render('product-title', skinnyFit.api.getDataPointValue(dataSetId, 'product_title'));
		_render('product-sub-title', skinnyFit.api.getDataPointValue(dataSetId, 'product_sub_title'));
	},
	_syncCustomer = function (name,street,city,state,zip,phone,email,ccn,cct,exm,exy,pn,pid,price) {
		customer.api.setName(name);
		customer.api.setStreet(street);
		customer.api.setCity(city);
		customer.api.setState(state);
		customer.api.setZip(zip);
		customer.api.setPhone(phone);
		customer.api.setEmail(email);
		customer.api.setCreditCard(ccn);
		customer.api.setCreditCardType(cct);
		customer.api.setExpiration_month(exm);
		customer.api.setExpiration_year(exy);
		customer.api.setProductName(pn);
		customer.api.setProductID(pid);
		customer.api.setPrice(price);
		customer.api.setOrderDate();
		customer.api.setBrowserInfo();
	};
	_postForm = function () {
		console.log('AJAX Post DATA...');
		console.dir(JSON.parse(customer.api.getCustomerData()));
	};
//zip code service with google
	jQuery('#zip').on('keyup', function() {
		if(jQuery(this).val().length ===5) {
			jQuery(this).blur();
			$.ajax({
			  dataType: "json",
			  url: 'https://maps.googleapis.com/maps/api/geocode/json?sensor=true',
			  data: { 'address': $('#zip').val(), 'components': 'country:US'},
			  success: function (d) {
			  	jQuery('#city').val(d.results[0].address_components[1].short_name);
			    jQuery('#state').val(d.results[0].address_components[3].short_name); 
			  }
			});
		}
	}); 

//events
	return {
		populateCard: _populateCard,
		syncCustomer: _syncCustomer, 
		postForm: _postForm
	}
})();

