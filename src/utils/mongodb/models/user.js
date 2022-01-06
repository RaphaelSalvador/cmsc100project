import bcrypt from 'bcrypt';

export const createUserModel = (mongoose) => {
    const schema = new mongoose.Schema({
        email: {
            type: String,
            unique: true,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        hobbies: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        createDate: {
            type: Number
        },
        updateDate: {
            type: Number
        }
    });

    schema.pre('save', async function () {
        const today = new Date();
        this.createDate = today.getTime();
        this.updateDate = today.getTime();
        this.password = await bcrypt.hash(this.password, 10);
    });

    schema.pre('updateOne', async function () {
        this.updateDate = new Date().getTime();
        this.password = await bcrypt.hash(this.password, 10);
    });

    const User = mongoose.model('User', schema);
    return User;
};