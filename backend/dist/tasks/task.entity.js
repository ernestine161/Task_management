"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
});
//# sourceMappingURL=task.entity.js.map