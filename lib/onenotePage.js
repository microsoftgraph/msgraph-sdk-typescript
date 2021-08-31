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
exports.OnenotePage = void 0;
var notebook_1 = require("./notebook");
var onenoteEntitySchemaObjectModel_1 = require("./onenoteEntitySchemaObjectModel");
var onenoteSection_1 = require("./onenoteSection");
var OnenotePage = /** @class */ (function (_super) {
    __extends(OnenotePage, _super);
    /**
     * Instantiates a new onenotePage and sets the default values.
     */
    function OnenotePage() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OnenotePage.prototype, "content", {
        /**
         * Gets the content property value. The page's HTML content.
         * @returns a binary
         */
        get: function () {
            return this._content;
        },
        /**
         * Sets the content property value. The page's HTML content.
         * @param value Value to set for the content property.
         */
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "contentUrl", {
        /**
         * Gets the contentUrl property value. The URL for the page's HTML content.  Read-only.
         * @returns a string
         */
        get: function () {
            return this._contentUrl;
        },
        /**
         * Sets the contentUrl property value. The URL for the page's HTML content.  Read-only.
         * @param value Value to set for the contentUrl property.
         */
        set: function (value) {
            this._contentUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "createdByAppId", {
        /**
         * Gets the createdByAppId property value. The unique identifier of the application that created the page. Read-only.
         * @returns a string
         */
        get: function () {
            return this._createdByAppId;
        },
        /**
         * Sets the createdByAppId property value. The unique identifier of the application that created the page. Read-only.
         * @param value Value to set for the createdByAppId property.
         */
        set: function (value) {
            this._createdByAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. The date and time when the page was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "level", {
        /**
         * Gets the level property value. The indentation level of the page. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._level;
        },
        /**
         * Sets the level property value. The indentation level of the page. Read-only.
         * @param value Value to set for the level property.
         */
        set: function (value) {
            this._level = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "links", {
        /**
         * Gets the links property value. Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
         * @returns a pageLinks
         */
        get: function () {
            return this._links;
        },
        /**
         * Sets the links property value. Links for opening the page. The oneNoteClientURL link opens the page in the OneNote native client if it 's installed. The oneNoteWebUrl link opens the page in OneNote on the web. Read-only.
         * @param value Value to set for the links property.
         */
        set: function (value) {
            this._links = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "order", {
        /**
         * Gets the order property value. The order of the page within its parent section. Read-only.
         * @returns a integer
         */
        get: function () {
            return this._order;
        },
        /**
         * Sets the order property value. The order of the page within its parent section. Read-only.
         * @param value Value to set for the order property.
         */
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "parentNotebook", {
        /**
         * Gets the parentNotebook property value. The notebook that contains the page.  Read-only.
         * @returns a notebook
         */
        get: function () {
            return this._parentNotebook;
        },
        /**
         * Sets the parentNotebook property value. The notebook that contains the page.  Read-only.
         * @param value Value to set for the parentNotebook property.
         */
        set: function (value) {
            this._parentNotebook = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "parentSection", {
        /**
         * Gets the parentSection property value. The section that contains the page. Read-only.
         * @returns a onenoteSection
         */
        get: function () {
            return this._parentSection;
        },
        /**
         * Sets the parentSection property value. The section that contains the page. Read-only.
         * @param value Value to set for the parentSection property.
         */
        set: function (value) {
            this._parentSection = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "title", {
        /**
         * Gets the title property value. The title of the page.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. The title of the page.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePage.prototype, "userTags", {
        /**
         * Gets the userTags property value.
         * @returns a string
         */
        get: function () {
            return this._userTags;
        },
        /**
         * Sets the userTags property value.
         * @param value Value to set for the userTags property.
         */
        set: function (value) {
            this._userTags = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OnenotePage.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["content", function (o, n) { o.content = n.getObjectValue(Binary); }],
            ["contentUrl", function (o, n) { o.contentUrl = n.getStringValue(); }],
            ["createdByAppId", function (o, n) { o.createdByAppId = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["level", function (o, n) { o.level = n.getNumberValue(); }],
            ["links", function (o, n) { o.links = n.getObjectValue(PageLinks); }],
            ["order", function (o, n) { o.order = n.getNumberValue(); }],
            ["parentNotebook", function (o, n) { o.parentNotebook = n.getObjectValue(notebook_1.Notebook); }],
            ["parentSection", function (o, n) { o.parentSection = n.getObjectValue(onenoteSection_1.OnenoteSection); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],
            ["userTags", function (o, n) { o.userTags = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OnenotePage.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("content", this.content);
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeStringValue("createdByAppId", this.createdByAppId);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeNumberValue("level", this.level);
        writer.writeObjectValue("links", this.links);
        writer.writeNumberValue("order", this.order);
        writer.writeObjectValue("parentNotebook", this.parentNotebook);
        writer.writeObjectValue("parentSection", this.parentSection);
        writer.writeStringValue("title", this.title);
        writer.writeCollectionOfPrimitiveValues("userTags", this.userTags);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return OnenotePage;
}(onenoteEntitySchemaObjectModel_1.OnenoteEntitySchemaObjectModel));
exports.OnenotePage = OnenotePage;
