export const getGifs = async   (categoria) => {
    const url = 'https://api.giphy.com/v1/gifs/search?q='+ encodeURI(categoria) +'&limit=10&api_key=cLXsrJ3QU33g5bc4KN2pHfGNLmx3sW7j';
    
    const response = await fetch(url);
    const {data} = await response.json();
    const arr_gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            gif: img.images?.downsized_medium.url
        }
    });
    return arr_gifs
}