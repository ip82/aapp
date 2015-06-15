class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    Product.create(name: params['name'], price: params['price'], category_id: params['cid'].to_i, index: Product.maximum(:index) + 1)
    render nothing: true, status: 200
  end

  def update
      @product = Product.find(params['id']) if params['id']

      if @product && params['index']
        @product.update_column(:index, params['index'].to_i)
        render nothing: true, status: 200
      end
  end
end
