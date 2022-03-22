Rails.application.routes.draw do
  namespace :api do
    resources :workers do
      resources :services
    end
  

    resources :services, except: [:index, :show, :update, :create, :destroy] do
      resources :comments 
    end
  end
end

