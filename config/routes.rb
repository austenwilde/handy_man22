Rails.application.routes.draw do
  namespace :api do
    resources :workers do
      resources :services
    end
  end

    # resources :todos, except: [:index, :show, :update, :create, :destroy] do
    #   resources :notes 
    # end
end
