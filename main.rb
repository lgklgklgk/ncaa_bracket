require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

configure :development do
  require "sqlite3"
end

configure :development do
  DATABASE = SQLite3::Database.new("./database/bracket.db")
end

configure :development do
  set :database, {adapter: "sqlite3", database: "./database/bracket.db"}
end

configure :production do  
  db = URI.parse(ENV['DATABASE_URL'])

  ActiveRecord::Base.establish_connection(
    :adapter => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
    :host     => db.host,
    :username => db.user,
    :password => db.password,
    :database => db.path[1..-1],
    :encoding => 'utf8'
  )
end

require_relative "models/user.rb"
require_relative "database/database_setup.rb"

get "/" do
  erb :bracket
end

post "/" do
  Bracket.create(params)
end