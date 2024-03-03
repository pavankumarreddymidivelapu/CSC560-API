from flask import Flask, request, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)


app.config['MONGO_URI'] = 'mongodb://localhost:27017/playerdb'

mongo = PyMongo(app)

# Endpoint to add a player
@app.route('/add_player', methods=['POST'])
def add_player():
    data = request.get_json()

    
    for player_data in data:
        player = {
            'name': player_data['name'],
            'score': player_data['score'],
            'touchdowns': player_data.get('touchdowns', 0)
        }
        mongo.db.players.insert_one(player)

    return jsonify({'message': 'Players added successfully'})

# Endpoint to get the list of all players
@app.route('/get_players', methods=['GET'])
def get_players():
    players = []
    result = mongo.db.players.find()

    for player in result:
       
        player_data = {
            '_id': str(player['_id']),  
            'name': player['name'],
            'score': player['score'],
            'touchdowns': player.get('touchdowns', 0)
        }
        players.append(player_data)

    return jsonify({'players': players})


# Endpoint to update a player
@app.route('/update_player/<player_id>', methods=['PUT'])
def update_player(player_id):
    data = request.get_json()
    updated_player = {
        'name': data['name'],
        'score': data['score'],
        'touchdowns': data.get('touchdowns', 0)
    }
    mongo.db.players.update_one({'_id': player_id}, {'$set': updated_player})
    return jsonify({'message': 'Player updated successfully'})

# Endpoint to delete a player
@app.route('/delete_player/<player_id>', methods=['DELETE'])
def delete_player(player_id):
    mongo.db.players.delete_one({'_id': player_id})
    return jsonify({'message': 'Player deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
