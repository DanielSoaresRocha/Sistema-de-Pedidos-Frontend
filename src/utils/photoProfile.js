export const photoProfile = {
    getPhoto: () => {
        const photo = JSON.parse(localStorage.getItem('photoProfile'))
        if (photo)
            return photo
        else
            return 'https://static.vecteezy.com/system/resources/previews/000/512/610/non_2x/profile-glyph-black-icon-vector.jpg'
    },
    setPhoto: photoURI => localStorage.setItem('photoProfile', JSON.stringify(photoURI))
}