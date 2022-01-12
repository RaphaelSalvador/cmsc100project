export const createFriendRequestModel = (mongoose) => {
    const friendRequestSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "can't be blank"]
        },
        sender: {
            type: String,
            required: [true, "can't be blank"]
        },
        createDate: {
            type: Number
        }
    });

    friendRequestSchema.pre('save', async function () {
        const today = new Date();
        this.createDate = today.getTime();
    });

    const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);
    return FriendRequest;
};