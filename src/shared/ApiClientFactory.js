export const apiClientFactory = (client) => {
    const doPost = async ({url='', data=null}) => {
        try {
            const response = await client.post(url, data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const doGet = async ({url='', params=null}) => {
        try {
            const response = await client.get(url, params)
            return response.data
        } catch (error) {
            throw error
        }
    }

    return {
        doPost,
        doGet
    }
}