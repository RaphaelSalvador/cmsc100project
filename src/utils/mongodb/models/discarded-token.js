export const createDiscardedTokenModel = (mongoose) => {
    const schema = new mongoose.Schema({
        email: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        },
        createDate: {
            type: Number
        }
    });

    const DiscardedToken = mongoose.model('DiscardedToken', schema);
    return DiscardedToken;
};