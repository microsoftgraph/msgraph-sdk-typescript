"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
var conversationThread_1 = require("./conversationThread");
var entity_1 = require("./entity");
var Conversation = /** @class */ (function (_super) {
    __extends(Conversation, _super);
    /**
     * Instantiates a new conversation and sets the default values.
     */
    function Conversation() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Conversation.prototype, "hasAttachments", {
        /**
         * Gets the hasAttachments property value. Indicates whether any of the posts within this Conversation has at least one attachment.
         * @returns a boolean
         */
        get: function () {
            return this._hasAttachments;
        },
        /**
         * Sets the hasAttachments property value. Indicates whether any of the posts within this Conversation has at least one attachment.
         * @param value Value to set for the hasAttachments property.
         */
        set: function (value) {
            this._hasAttachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Conversation.prototype, "lastDeliveredDateTime", {
        /**
         * Gets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._lastDeliveredDateTime;
        },
        /**
         * Sets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the lastDeliveredDateTime property.
         */
        set: function (value) {
            this._lastDeliveredDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Conversation.prototype, "preview", {
        /**
         * Gets the preview property value. A short summary from the body of the latest post in this converstaion.
         * @returns a string
         */
        get: function () {
            return this._preview;
        },
        /**
         * Sets the preview property value. A short summary from the body of the latest post in this converstaion.
         * @param value Value to set for the preview property.
         */
        set: function (value) {
            this._preview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Conversation.prototype, "threads", {
        /**
         * Gets the threads property value. A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
         * @returns a conversationThread
         */
        get: function () {
            return this._threads;
        },
        /**
         * Sets the threads property value. A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.
         * @param value Value to set for the threads property.
         */
        set: function (value) {
            this._threads = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Conversation.prototype, "topic", {
        /**
         * Gets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
         * @returns a string
         */
        get: function () {
            return this._topic;
        },
        /**
         * Sets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
         * @param value Value to set for the topic property.
         */
        set: function (value) {
            this._topic = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Conversation.prototype, "uniqueSenders", {
        /**
         * Gets the uniqueSenders property value. All the users that sent a message to this Conversation.
         * @returns a string
         */
        get: function () {
            return this._uniqueSenders;
        },
        /**
         * Sets the uniqueSenders property value. All the users that sent a message to this Conversation.
         * @param value Value to set for the uniqueSenders property.
         */
        set: function (value) {
            this._uniqueSenders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Conversation.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["hasAttachments", function (o, n) { o.hasAttachments = n.getBooleanValue(); }],
            ["lastDeliveredDateTime", function (o, n) { o.lastDeliveredDateTime = n.getDateValue(); }],
            ["preview", function (o, n) { o.preview = n.getStringValue(); }],
            ["threads", function (o, n) { o.threads = n.getCollectionOfObjectValues(conversationThread_1.ConversationThread); }],
            ["topic", function (o, n) { o.topic = n.getStringValue(); }],
            ["uniqueSenders", function (o, n) { o.uniqueSenders = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Conversation.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeDateValue("lastDeliveredDateTime", this.lastDeliveredDateTime);
        writer.writeStringValue("preview", this.preview);
        writer.writeCollectionOfObjectValues("threads", this.threads);
        writer.writeStringValue("topic", this.topic);
        writer.writeCollectionOfPrimitiveValues("uniqueSenders", this.uniqueSenders);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Conversation;
}(entity_1.Entity));
exports.Conversation = Conversation;
