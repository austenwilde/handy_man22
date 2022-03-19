class Worker < ApplicationRecord
  has_many :services
  validates :title, :specialty, presence: true
end
