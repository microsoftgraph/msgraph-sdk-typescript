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
exports.OnenoteSection = void 0;
var notebook_1 = require("./notebook");
var onenoteEntityHierarchyModel_1 = require("./onenoteEntityHierarchyModel");
var onenotePage_1 = require("./onenotePage");
var sectionGroup_1 = require("./sectionGroup");
var OnenoteSection = /** @class */ (function (_super) {
    __extends(OnenoteSection, _super);
    /**
     * Instantiates a new onenoteSection and sets the default values.
     */
    function OnenoteSection() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OnenoteSection.prototype, "isDefault", {
        /**
         * Gets the isDefault property value. Indicates whether this is the user's default section. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isDefault;
        },
        /**
         * Sets the isDefault property value. Indicates whether this is the user's default section. Read-only.
         * @param value Value to set for the isDefault property.
         */
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteSection.prototype, "links", {
        /**
         * Gets the links property value. Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.
         * @returns a sectionLinks
         */
        get: function () {
            return this._links;
        },
        /**
         * Sets the links property value. Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web.
         * @param value Value to set for the links property.
         */
        set: function (value) {
            this._links = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteSection.prototype, "pages", {
        /**
         * Gets the pages property value. The collection of pages in the section.  Read-only. Nullable.
         * @returns a onenotePage
         */
        get: function () {
            return this._pages;
        },
        /**
         * Sets the pages property value. The collection of pages in the section.  Read-only. Nullable.
         * @param value Value to set for the pages property.
         */
        set: function (value) {
            this._pages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteSection.prototype, "pagesUrl", {
        /**
         * Gets the pagesUrl property value. The pages endpoint where you can get details for all the pages in the section. Read-only.
         * @returns a string
         */
        get: function () {
            return this._pagesUrl;
        },
        /**
         * Sets the pagesUrl property value. The pages endpoint where you can get details for all the pages in the section. Read-only.
         * @param value Value to set for the pagesUrl property.
         */
        set: function (value) {
            this._pagesUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteSection.prototype, "parentNotebook", {
        /**
         * Gets the parentNotebook property value. The notebook that contains the section.  Read-only.
         * @returns a notebook
         */
        get: function () {
            return this._parentNotebook;
        },
        /**
         * Sets the parentNotebook property value. The notebook that contains the section.  Read-only.
         * @param value Value to set for the parentNotebook property.
         */
        set: function (value) {
            this._parentNotebook = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenoteSection.prototype, "parentSectionGroup", {
        /**
         * Gets the parentSectionGroup property value. The section group that contains the section.  Read-only.
         * @returns a sectionGroup
         */
        get: function () {
            return this._parentSectionGroup;
        },
        /**
         * Sets the parentSectionGroup property value. The section group that contains the section.  Read-only.
         * @param value Value to set for the parentSectionGroup property.
         */
        set: function (value) {
            this._parentSectionGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OnenoteSection.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["isDefault", function (o, n) { o.isDefault = n.getBooleanValue(); }],
            ["links", function (o, n) { o.links = n.getObjectValue(SectionLinks); }],
            ["pages", function (o, n) { o.pages = n.getCollectionOfObjectValues(onenotePage_1.OnenotePage); }],
            ["pagesUrl", function (o, n) { o.pagesUrl = n.getStringValue(); }],
            ["parentNotebook", function (o, n) { o.parentNotebook = n.getObjectValue(notebook_1.Notebook); }],
            ["parentSectionGroup", function (o, n) { o.parentSectionGroup = n.getObjectValue(sectionGroup_1.SectionGroup); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OnenoteSection.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeObjectValue("links", this.links);
        writer.writeCollectionOfObjectValues("pages", this.pages);
        writer.writeStringValue("pagesUrl", this.pagesUrl);
        writer.writeObjectValue("parentNotebook", this.parentNotebook);
        writer.writeObjectValue("parentSectionGroup", this.parentSectionGroup);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return OnenoteSection;
}(onenoteEntityHierarchyModel_1.OnenoteEntityHierarchyModel));
exports.OnenoteSection = OnenoteSection;
