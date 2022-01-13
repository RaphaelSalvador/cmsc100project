export const createFriendListModel = (mongoose) => {
    const friendListSchema = new mongoose.Schema({
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

    friendListSchema.pre('save', async function () {
        const today = new Date();
        this.createDate = today.getTime();
    });

    const FriendList = mongoose.model('FriendList', friendListSchema);
    return FriendList;
};