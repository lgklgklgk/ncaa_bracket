require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)
require_relative "models/user.rb"
db_options = {adapter: 'sqlite3', database: 'database/brackets.db'}
ActiveRecord::Base.establish_connection(db_options)