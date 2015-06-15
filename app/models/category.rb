class Category < ActiveRecord::Base
  has_many :products, -> { order(:index => :asc) }
end
