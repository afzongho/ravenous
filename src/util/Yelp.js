const apiKey = 'PWhkRt6zAMkzH1FQ-WgpnhFjFWEm81zohDwX5JreCSnB2kihY9KLIbapM8orlvUt4HXyxmLMxO8dq5YwtZlT0dv1kUG6tLr9brToQrgcG6l2hiFvEA6D0mjRQNvZYHYx'
const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business)
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }        
                }));
            }
        });
    }
};

export default Yelp;