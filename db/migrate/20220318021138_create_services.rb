class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.string :servicetype
      t.string :location
      t.belongs_to :worker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
