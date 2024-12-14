const HOUSES_ENDPOINT = 'https://675e09fe63b05ed0797966c0.mockapi.io/houses'

class HousesAPI {
    get = async () => {
        try {
            const response = await fetch(HOUSES_ENDPOINT);
            const data = await response.json()
            return data;
        } catch (e) {
            console.log('error while getting houses: ', e);
        }
    }

    put = async (house) => {
        try {
            const response = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await response.json();
        } catch(e) {
            console.log('error while updating houses: ', e)
        }
    }
}

export const housesAPI = new HousesAPI();