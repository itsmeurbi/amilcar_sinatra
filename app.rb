require 'sinatra'
require './helpers/application_helper'

get '/' do
  haml :index, layout: :layout
end
