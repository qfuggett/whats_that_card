class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :value
      t.integer :value_int
      t.string :suit
      t.string :type
      t.string :meaning_up
      t.string :meaning_rev
      t.string :desc

      t.timestamps
    end
  end
end
