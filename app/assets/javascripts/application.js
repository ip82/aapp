// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require underscore-min
//= require jquery-ui.min
//= require angular.min
//= require sortable
//= require_tree .

$(document).ready(function(){

    $(window).on('shown.bs.modal', function(e) {
        var categoryId = $(e.relatedTarget).data('category-id');
        $("#categoryId").val(categoryId);
    });

    $("#add-product-button").on('click', function(){
        var productName = $("#productName").val();
        var productDescription = $("#productDescription").val();
        var productPrice = $("#productPrice").val();
        var categoryId = $("#categoryId").val();
        angular.element('BODY').scope().addProduct(productName, productDescription, productPrice, categoryId);
    });
});