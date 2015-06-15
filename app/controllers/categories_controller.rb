class CategoriesController < ApplicationController
  respond_to :html, :json

  def index
    @categories = Category.all
    respond_with(@categories, include: :products)
  end
end
