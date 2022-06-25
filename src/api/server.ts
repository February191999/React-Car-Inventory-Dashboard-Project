let token = '3dff938b80a303c1e564866e82ab1ce661252bffbe46b642'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://app-car-inventory-rh.herokuapp.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://app-car-inventory-rh.herokuapp.com/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},

        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://app-car-inventory-rh.herokuapp.com/api/cars/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },

        delete: async(id:string) => {
            const response = await fetch(`https://app-car-inventory-rh.herokuapp.com/api/cars/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }