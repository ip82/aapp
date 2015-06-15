class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @category = Category.find(params['cid'].to_i)
    product_index = (@category.products.any?)? @category.products.maximum(:index) + 1 : 0

    Product.create do |p|
      p.name = params['name']
      p.price = params['price']
      p.category_id= @category.id
      p.index = product_index
      p.description = params['description']
    end
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
