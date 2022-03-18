class Comment < ApplicationRecord
  belongs_to :service

  validates :user, :subject, :body, presence: true
end
