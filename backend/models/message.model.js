import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Corrected 'timestamps' (plural)
);

// Exclude 'createdAt' and 'updatedAt' from the JSON response
messageSchema.set("toJSON", {
    transform: function (doc, ret) {
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
