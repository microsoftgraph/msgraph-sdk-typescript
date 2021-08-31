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
exports.Onenote = void 0;
var entity_1 = require("../../entity");
var notebook_1 = require("../../notebook");
var onenoteOperation_1 = require("../../onenoteOperation");
var onenotePage_1 = require("../../onenotePage");
var onenoteResource_1 = require("../../onenoteResource");
var onenoteSection_1 = require("../../onenoteSection");
var sectionGroup_1 = require("../../sectionGroup");
var Onenote = /** @class */ (function (_super) {
    __extends(Onenote, _super);
    /**
     * Instantiates a new Onenote and sets the default values.
     */
    function Onenote() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Onenote.prototype, "notebooks", {
        /**
         * Gets the notebooks property value. The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
         * @returns a notebook
         */
        get: function () {
            return this._notebooks;
        },
        /**
         * Sets the notebooks property value. The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
         * @param value Value to set for the notebooks property.
         */
        set: function (value) {
            this._notebooks = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Onenote.prototype, "operations", {
        /**
         * Gets the operations property value. The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
         * @returns a onenoteOperation
         */
        get: function () {
            return this._operations;
        },
        /**
         * Sets the operations property value. The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
         * @param value Value to set for the operations property.
         */
        set: function (value) {
            this._operations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Onenote.prototype, "pages", {
        /**
         * Gets the pages property value. The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
         * @returns a onenotePage
         */
        get: function () {
            return this._pages;
        },
        /**
         * Sets the pages property value. The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
         * @param value Value to set for the pages property.
         */
        set: function (value) {
            this._pages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Onenote.prototype, "resources", {
        /**
         * Gets the resources property value. The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
         * @returns a onenoteResource
         */
        get: function () {
            return this._resources;
        },
        /**
         * Sets the resources property value. The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.
         * @param value Value to set for the resources property.
         */
        set: function (value) {
            this._resources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Onenote.prototype, "sectionGroups", {
        /**
         * Gets the sectionGroups property value. The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
         * @returns a sectionGroup
         */
        get: function () {
            return this._sectionGroups;
        },
        /**
         * Sets the sectionGroups property value. The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
         * @param value Value to set for the sectionGroups property.
         */
        set: function (value) {
            this._sectionGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Onenote.prototype, "sections", {
        /**
         * Gets the sections property value. The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
         * @returns a onenoteSection
         */
        get: function () {
            return this._sections;
        },
        /**
         * Sets the sections property value. The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.
         * @param value Value to set for the sections property.
         */
        set: function (value) {
            this._sections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Onenote.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["notebooks", function (o, n) { o.notebooks = n.getCollectionOfObjectValues(notebook_1.Notebook); }],
            ["operations", function (o, n) { o.operations = n.getCollectionOfObjectValues(onenoteOperation_1.OnenoteOperation); }],
            ["pages", function (o, n) { o.pages = n.getCollectionOfObjectValues(onenotePage_1.OnenotePage); }],
            ["resources", function (o, n) { o.resources = n.getCollectionOfObjectValues(onenoteResource_1.OnenoteResource); }],
            ["sectionGroups", function (o, n) { o.sectionGroups = n.getCollectionOfObjectValues(sectionGroup_1.SectionGroup); }],
            ["sections", function (o, n) { o.sections = n.getCollectionOfObjectValues(onenoteSection_1.OnenoteSection); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Onenote.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("notebooks", this.notebooks);
        writer.writeCollectionOfObjectValues("operations", this.operations);
        writer.writeCollectionOfObjectValues("pages", this.pages);
        writer.writeCollectionOfObjectValues("resources", this.resources);
        writer.writeCollectionOfObjectValues("sectionGroups", this.sectionGroups);
        writer.writeCollectionOfObjectValues("sections", this.sections);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Onenote;
}(entity_1.Entity));
exports.Onenote = Onenote;
