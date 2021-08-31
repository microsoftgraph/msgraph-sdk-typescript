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
exports.WorkbookComment = void 0;
var entity_1 = require("./entity");
var workbookCommentReply_1 = require("./workbooks/workbook/workbookCommentReply");
var WorkbookComment = /** @class */ (function (_super) {
    __extends(WorkbookComment, _super);
    /**
     * Instantiates a new workbookComment and sets the default values.
     */
    function WorkbookComment() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WorkbookComment.prototype, "content", {
        /**
         * Gets the content property value. The content of the comment.
         * @returns a string
         */
        get: function () {
            return this._content;
        },
        /**
         * Sets the content property value. The content of the comment.
         * @param value Value to set for the content property.
         */
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookComment.prototype, "contentType", {
        /**
         * Gets the contentType property value. Indicates the type for the comment.
         * @returns a string
         */
        get: function () {
            return this._contentType;
        },
        /**
         * Sets the contentType property value. Indicates the type for the comment.
         * @param value Value to set for the contentType property.
         */
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookComment.prototype, "replies", {
        /**
         * Gets the replies property value. Read-only. Nullable.
         * @returns a workbookCommentReply
         */
        get: function () {
            return this._replies;
        },
        /**
         * Sets the replies property value. Read-only. Nullable.
         * @param value Value to set for the replies property.
         */
        set: function (value) {
            this._replies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookComment.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["content", function (o, n) { o.content = n.getStringValue(); }],
            ["contentType", function (o, n) { o.contentType = n.getStringValue(); }],
            ["replies", function (o, n) { o.replies = n.getCollectionOfObjectValues(workbookCommentReply_1.WorkbookCommentReply); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookComment.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeCollectionOfObjectValues("replies", this.replies);
    };
    ;
    ;
    ;
    ;
    return WorkbookComment;
}(entity_1.Entity));
exports.WorkbookComment = WorkbookComment;
