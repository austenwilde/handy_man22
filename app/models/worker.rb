class Worker < ApplicationRecord
  has_many :services, dependent: :destroy
  validates :title, :specialty, presence: true
end
