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
exports.ParentSectionGroup = void 0;
var notebook_1 = require("../../../../../notebook");
var onenoteEntityHierarchyModel_1 = require("../../../../../onenoteEntityHierarchyModel");
var onenoteSection_1 = require("../../../../../onenoteSection");
var sectionGroup_1 = require("../../../../../sectionGroup");
var ParentSectionGroup = /** @class */ (function (_super) {
    __extends(ParentSectionGroup, _super);
    /**
     * Instantiates a new ParentSectionGroup and sets the default values.
     */
    function ParentSectionGroup() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ParentSectionGroup.prototype, "parentNotebook", {
        /**
         * Gets the parentNotebook property value. The notebook that contains the section group. Read-only.
         * @returns a notebook
         */
        get: function () {
            return this._parentNotebook;
        },
        /**
         * Sets the parentNotebook property value. The notebook that contains the section group. Read-only.
         * @param value Value to set for the parentNotebook property.
         */
        set: function (value) {
            this._parentNotebook = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentSectionGroup.prototype, "parentSectionGroup", {
        /**
         * Gets the parentSectionGroup property value. The section group that contains the section group. Read-only.
         * @returns a sectionGroup
         */
        get: function () {
            return this._parentSectionGroup;
        },
        /**
         * Sets the parentSectionGroup property value. The section group that contains the section group. Read-only.
         * @param value Value to set for the parentSectionGroup property.
         */
        set: function (value) {
            this._parentSectionGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentSectionGroup.prototype, "sectionGroups", {
        /**
         * Gets the sectionGroups property value. The section groups in the section. Read-only. Nullable.
         * @returns a sectionGroup
         */
        get: function () {
            return this._sectionGroups;
        },
        /**
         * Sets the sectionGroups property value. The section groups in the section. Read-only. Nullable.
         * @param value Value to set for the sectionGroups property.
         */
        set: function (value) {
            this._sectionGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentSectionGroup.prototype, "sectionGroupsUrl", {
        /**
         * Gets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only.
         * @returns a string
         */
        get: function () {
            return this._sectionGroupsUrl;
        },
        /**
         * Sets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only.
         * @param value Value to set for the sectionGroupsUrl property.
         */
        set: function (value) {
            this._sectionGroupsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentSectionGroup.prototype, "sections", {
        /**
         * Gets the sections property value. The sections in the section group. Read-only. Nullable.
         * @returns a onenoteSection
         */
        get: function () {
            return this._sections;
        },
        /**
         * Sets the sections property value. The sections in the section group. Read-only. Nullable.
         * @param value Value to set for the sections property.
         */
        set: function (value) {
            this._sections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentSectionGroup.prototype, "sectionsUrl", {
        /**
         * Gets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the section group. Read-only.
         * @returns a string
         */
        get: function () {
            return this._sectionsUrl;
        },
        /**
         * Sets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the section group. Read-only.
         * @param value Value to set for the sectionsUrl property.
         */
        set: function (value) {
            this._sectionsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ParentSectionGroup.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["parentNotebook", function (o, n) { o.parentNotebook = n.getObjectValue(notebook_1.Notebook); }],
            ["parentSectionGroup", function (o, n) { o.parentSectionGroup = n.getObjectValue(sectionGroup_1.SectionGroup); }],
            ["sectionGroups", function (o, n) { o.sectionGroups = n.getCollectionOfObjectValues(sectionGroup_1.SectionGroup); }],
            ["sectionGroupsUrl", function (o, n) { o.sectionGroupsUrl = n.getStringValue(); }],
            ["sections", function (o, n) { o.sections = n.getCollectionOfObjectValues(onenoteSection_1.OnenoteSection); }],
            ["sectionsUrl", function (o, n) { o.sectionsUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ParentSectionGroup.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("parentNotebook", this.parentNotebook);
        writer.writeObjectValue("parentSectionGroup", this.parentSectionGroup);
        writer.writeCollectionOfObjectValues("sectionGroups", this.sectionGroups);
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        writer.writeCollectionOfObjectValues("sections", this.sections);
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ParentSectionGroup;
}(onenoteEntityHierarchyModel_1.OnenoteEntityHierarchyModel));
exports.ParentSectionGroup = ParentSectionGroup;
