// // import mongoose from "mongoose";
// // const UserScehma = mongoose.Schema({
// //     name: {
// //         type: String,
// //         required: true
// //     },
// //     email: {
// //         type: String,
// //         required: true,
// //         unique: true
// //     },
// //     password: {
// //         type: String,
// //         required: true
// //     },
// //     picturePath: {
// //         type: String,
// //         required: true
// //     }
// // }, {timestamps: true})

// // export default mongoose.model('User' , UserScehma)

// import mongoose from "mongoose";

// const UserSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     picturePath: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: String,
//         required: true,
//         unique: true
//     }
// }, { timestamps: true });

// const User = mongoose.model('User', UserSchema);

// export {User};
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    picturePath: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String, // Assuming phone number is stored as string
        required: true,
        unique: true // If each user should have a unique phone number
    },
    priority: {
        type: Number,
        default: 0 // Default priority level
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export {User};
