class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :index
      t.integer :category_id
      t.money :price

      t.timestamps null: false
    end
  end
end
