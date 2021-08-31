"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyNotebookModel = void 0;
var identitySet_1 = require("../../../../../identitySet");
var CopyNotebookModel = /** @class */ (function () {
    /**
     * Instantiates a new CopyNotebookModel and sets the default values.
     */
    function CopyNotebookModel() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "createdBy", {
        /**
         * Gets the createdBy property value.
         * @returns a string
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "createdByIdentity", {
        /**
         * Gets the createdByIdentity property value.
         * @returns a identitySet
         */
        get: function () {
            return this._createdByIdentity;
        },
        /**
         * Sets the createdByIdentity property value.
         * @param value Value to set for the createdByIdentity property.
         */
        set: function (value) {
            this._createdByIdentity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "createdTime", {
        /**
         * Gets the createdTime property value.
         * @returns a Date
         */
        get: function () {
            return this._createdTime;
        },
        /**
         * Sets the createdTime property value.
         * @param value Value to set for the createdTime property.
         */
        set: function (value) {
            this._createdTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "id", {
        /**
         * Gets the id property value.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value.
         * @param value Value to set for the id property.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "isDefault", {
        /**
         * Gets the isDefault property value.
         * @returns a boolean
         */
        get: function () {
            return this._isDefault;
        },
        /**
         * Sets the isDefault property value.
         * @param value Value to set for the isDefault property.
         */
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "isShared", {
        /**
         * Gets the isShared property value.
         * @returns a boolean
         */
        get: function () {
            return this._isShared;
        },
        /**
         * Sets the isShared property value.
         * @param value Value to set for the isShared property.
         */
        set: function (value) {
            this._isShared = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "lastModifiedBy", {
        /**
         * Gets the lastModifiedBy property value.
         * @returns a string
         */
        get: function () {
            return this._lastModifiedBy;
        },
        /**
         * Sets the lastModifiedBy property value.
         * @param value Value to set for the lastModifiedBy property.
         */
        set: function (value) {
            this._lastModifiedBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "lastModifiedByIdentity", {
        /**
         * Gets the lastModifiedByIdentity property value.
         * @returns a identitySet
         */
        get: function () {
            return this._lastModifiedByIdentity;
        },
        /**
         * Sets the lastModifiedByIdentity property value.
         * @param value Value to set for the lastModifiedByIdentity property.
         */
        set: function (value) {
            this._lastModifiedByIdentity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "lastModifiedTime", {
        /**
         * Gets the lastModifiedTime property value.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedTime;
        },
        /**
         * Sets the lastModifiedTime property value.
         * @param value Value to set for the lastModifiedTime property.
         */
        set: function (value) {
            this._lastModifiedTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "links", {
        /**
         * Gets the links property value.
         * @returns a notebookLinks
         */
        get: function () {
            return this._links;
        },
        /**
         * Sets the links property value.
         * @param value Value to set for the links property.
         */
        set: function (value) {
            this._links = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "name", {
        /**
         * Gets the name property value.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "sectionGroupsUrl", {
        /**
         * Gets the sectionGroupsUrl property value.
         * @returns a string
         */
        get: function () {
            return this._sectionGroupsUrl;
        },
        /**
         * Sets the sectionGroupsUrl property value.
         * @param value Value to set for the sectionGroupsUrl property.
         */
        set: function (value) {
            this._sectionGroupsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "sectionsUrl", {
        /**
         * Gets the sectionsUrl property value.
         * @returns a string
         */
        get: function () {
            return this._sectionsUrl;
        },
        /**
         * Sets the sectionsUrl property value.
         * @param value Value to set for the sectionsUrl property.
         */
        set: function (value) {
            this._sectionsUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "self", {
        /**
         * Gets the self property value.
         * @returns a string
         */
        get: function () {
            return this._self;
        },
        /**
         * Sets the self property value.
         * @param value Value to set for the self property.
         */
        set: function (value) {
            this._self = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CopyNotebookModel.prototype, "userRole", {
        /**
         * Gets the userRole property value.
         * @returns a onenoteUserRole
         */
        get: function () {
            return this._userRole;
        },
        /**
         * Sets the userRole property value.
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
    CopyNotebookModel.prototype.getFieldDeserializers = function () {
        return new Map([
            ["createdBy", function (o, n) { o.createdBy = n.getStringValue(); }],
            ["createdByIdentity", function (o, n) { o.createdByIdentity = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["createdTime", function (o, n) { o.createdTime = n.getDateValue(); }],
            ["id", function (o, n) { o.id = n.getStringValue(); }],
            ["isDefault", function (o, n) { o.isDefault = n.getBooleanValue(); }],
            ["isShared", function (o, n) { o.isShared = n.getBooleanValue(); }],
            ["lastModifiedBy", function (o, n) { o.lastModifiedBy = n.getStringValue(); }],
            ["lastModifiedByIdentity", function (o, n) { o.lastModifiedByIdentity = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["lastModifiedTime", function (o, n) { o.lastModifiedTime = n.getDateValue(); }],
            ["links", function (o, n) { o.links = n.getObjectValue(NotebookLinks); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["sectionGroupsUrl", function (o, n) { o.sectionGroupsUrl = n.getStringValue(); }],
            ["sectionsUrl", function (o, n) { o.sectionsUrl = n.getStringValue(); }],
            ["self", function (o, n) { o.self = n.getStringValue(); }],
            ["userRole", function (o, n) { o.userRole = n.getObjectValue(OnenoteUserRole); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    CopyNotebookModel.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("createdBy", this.createdBy);
        writer.writeObjectValue("createdByIdentity", this.createdByIdentity);
        writer.writeDateValue("createdTime", this.createdTime);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isShared", this.isShared);
        writer.writeStringValue("lastModifiedBy", this.lastModifiedBy);
        writer.writeObjectValue("lastModifiedByIdentity", this.lastModifiedByIdentity);
        writer.writeDateValue("lastModifiedTime", this.lastModifiedTime);
        writer.writeObjectValue("links", this.links);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        writer.writeStringValue("self", this.self);
        writer.writeObjectValue("userRole", this.userRole);
        writer.writeAdditionalData(this.additionalData);
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
    ;
    ;
    ;
    ;
    ;
    return CopyNotebookModel;
}());
exports.CopyNotebookModel = CopyNotebookModel;
