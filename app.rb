require 'bundler'
Bundler.require

get '/' do
  erb :index
end

get '/pythag/' do
  erb :pythag
end

get '/factorial/' do
  erb :factorial
end

get '/quadform/' do
  erb :quadform
end