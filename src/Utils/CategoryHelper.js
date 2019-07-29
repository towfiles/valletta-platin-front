export default {

    getIconUrl(iconObject) {
        const size = 32;
        return iconObject.prefix + size + iconObject.suffix;
    }

}