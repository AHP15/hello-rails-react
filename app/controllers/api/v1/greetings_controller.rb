class Api::V1::GreetingsController < ApplicationController
  def index
    rand_id = rand(1..Greeting.count)
    @greeting = Greeting.find(rand_id) if rand_id

    if @greeting
      render json: @greeting, status: :ok
    else
      render json: { message: 'No Greeting found' }, status: :not_found
    end
  end
end
