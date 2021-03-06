class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy

  validates :name, :servicetype, :location, presence: true
  
end
