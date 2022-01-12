export const createFriendRequestModel = (mongoose) => {
    const friendRequestSchema = new mongoose.Schema({

        sender: {
            type: String,
            unique: true,
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