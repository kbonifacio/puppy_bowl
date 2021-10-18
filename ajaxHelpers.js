// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2108-CSE-RM-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.players;

    } catch (error) {
        console.error('Woof! Woof! The house is on fire! Cannot fetch puppy players!', error);
    }
};

export const fetchSinglePlayer = async (playerId) => {

    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        const player = result.data.player;
        
        console.log(typeof result)
        console.log('resulting data', result.data);
        if (!result.error){
            return player
    } if (result.error) throw result.error;
    } catch (error) {
        console.error('Woof! This pup has gone silent. Cannot fetch single player.')
    }
};

export const addNewPlayer = async (playerData) => {
    console.log(playerData)
    try {

        const response = await fetch(`${APIURL}/players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerData),
        })
        const result = await response.json();
        console.log('addNewPlayer', result)

        if (result.error) throw result.error;
    } catch (error) {
        console.error('*shiba scream!* It\'s a ghost! Cannot add new player data to the database.')
    }

};

export const removePlayer = async (playerId) => {
    console.log('remove triggered', playerId)
    try {

        const response = await fetch(`${APIURL}/players/${playerId}`, {
            method: 'DELETE',
            }
        );
        const result = await response.json();
        console.log('remove player result', result)
        if (!result.error) {
            return result
        }
        if (result.error) throw result.error;
    } catch (error) {
        console.error('*puppy head tilt* Cannot remove player from the race.')
    }
};
