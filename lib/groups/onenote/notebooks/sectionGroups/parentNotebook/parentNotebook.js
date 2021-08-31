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
exports.ParentNotebook = void 0;
var onenoteEntityHierarchyModel_1 = require("../../../../../onenoteEntityHierarchyModel");
var onenoteSection_1 = require("../../../../../onenoteSection");
var sectionGroup_1 = require("../../../../../sectionGroup");
var ParentNotebook = /** @class */ (function (_super) {
    __extends(ParentNotebook, _super);
    /**
     * Instantiates a new ParentNotebook and sets the default values.
     */
    function ParentNotebook() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ParentNotebook.prototype, "isDefault", {
        /**
         * Gets the isDefault property value. Indicates whether this is the user's default notebook. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isDefault;
        },
        /**
         * Sets the isDefault property value. Indicates whether this is the user's default notebook. Read-only.
         * @param value Value to set for the isDefault property.
         */
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentNotebook.prototype, "isShared", {
        /**
         * Gets the isShared property value. Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isShared;
        },
        /**
         * Sets the isShared property value. Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only.
         * @param value Value to set for the isShared property.
         */
        set: function (value) {
            this._isShared = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentNotebook.prototype, "links", {
        /**
         * Gets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
         * @returns a notebookLinks
         */
        get: function () {
            return this._links;
        },
        /**
         * Sets the links property value. Links for opening the notebook. The oneNoteClientURL link opens the notebook in the OneNote native client if it's installed. The oneNoteWebURL link opens the notebook in OneNote on the web.
         * @param value Value to set for the links property.
         */
        set: function (value) {
            this._links = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentNotebook.prototype, "sectionGroups", {
        /**
         * Gets the sectionGroups property value. The section groups in the notebook. Read-only. Nullable.
         * @returns a sectionGroup
         */
        get: function () {
            return this._sectionGroups;
        },
        /**
         * Sets the sectionGroups property value. The section groups in the notebook. Read-only. Nullable.
         * @param value Value to set for the sectionGroups property.
         */
        set: function (value) {
            this._sectionGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentNotebook.prototype, "sectionGroupsUrl", {
        /**
         * Gets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
         * @returns a string
         */
        get: function () {
            return this._sectionGroupsUrl;
        },
        /**
         * Sets the sectionGroupsUrl property value. The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only.
         * @param value Value to set for the sectionGroupsUrl property.
         */
        set: function (value) {
            this._sectionGroupsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentNotebook.prototype, "sections", {
        /**
         * Gets the sections property value. The sections in the notebook. Read-only. Nullable.
         * @returns a onenoteSection
         */
        get: function () {
            return this._sections;
        },
        /**
         * Sets the sections property value. The sections in the notebook. Read-only. Nullable.
         * @param value Value to set for the sections property.
         */
        set: function (value) {
            this._sections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentNotebook.prototype, "sectionsUrl", {
        /**
         * Gets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
         * @returns a string
         */
        get: function () {
            return this._sectionsUrl;
        },
        /**
         * Sets the sectionsUrl property value. The URL for the sections navigation property, which returns all the sections in the notebook. Read-only.
         * @param value Value to set for the sectionsUrl property.
         */
        set: function (value) {
            this._sectionsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParentNotebook.prototype, "userRole", {
        /**
         * Gets the userRole property value. Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
         * @returns a onenoteUserRole
         */
        get: function () {
            return this._userRole;
        },
        /**
         * Sets the userRole property value. Possible values are: Owner, Contributor, Reader, None. Owner represents owner-level access to the notebook. Contributor represents read/write access to the notebook. Reader represents read-only access to the notebook. Read-only.
         * @param value Value to set for the userRole property.
         */
        set: function (value) {
            this._userRole = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ParentNotebook.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["isDefault", function (o, n) { o.isDefault = n.getBooleanValue(); }],
            ["isShared", function (o, n) { o.isShared = n.getBooleanValue(); }],
            ["links", function (o, n) { o.links = n.getObjectValue(NotebookLinks); }],
            ["sectionGroups", function (o, n) { o.sectionGroups = n.getCollectionOfObjectValues(sectionGroup_1.SectionGroup); }],
            ["sectionGroupsUrl", function (o, n) { o.sectionGroupsUrl = n.getStringValue(); }],
            ["sections", function (o, n) { o.sections = n.getCollectionOfObjectValues(onenoteSection_1.OnenoteSection); }],
            ["sectionsUrl", function (o, n) { o.sectionsUrl = n.getStringValue(); }],
            ["userRole", function (o, n) { o.userRole = n.getObjectValue(OnenoteUserRole); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ParentNotebook.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeObjectValue("links", this.links);
        writer.writeCollectionOfObjectValues("sectionGroups", this.sectionGroups);
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        writer.writeCollectionOfObjectValues("sections", this.sections);
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        writer.writeObjectValue("userRole", this.userRole);
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
    return ParentNotebook;
}(onenoteEntityHierarchyModel_1.OnenoteEntityHierarchyModel));
exports.ParentNotebook = ParentNotebook;
