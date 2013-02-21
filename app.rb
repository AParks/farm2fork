#Bundler.require
require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'
require 'mongo_mapper'

class Farm
    include MongoMapper::Document

    set_collection_name "markets"
    key :MarketName, :type => String
    key :Website, :type => String

end


   get '/' do
        "the time where this server lives is #{Time.now}
        <br /><br />check out <a href=\"/farms\">farms in your area</a>"
        MongoMapper.connection = Mongo::Connection.new('localhost', 27017)
        MongoMapper.database = "farm2fork"
        @collection = MongoMapper.database["markets"]
        @farms = Farm.all
        erb :farm
    end



#    post '/farms/getData' do
#         @lat = params[:x]
#         @lng = params[:y]
#            p params
#         # grab mongo DB with zipCode parameter
#         #erb :farms
#         @collection.create_index([['Location', Mongo::GEO2D]])
#         farms = {"Location" => {"$near" => [@lat,@long]}}

#        return farms.to_json
#    end
