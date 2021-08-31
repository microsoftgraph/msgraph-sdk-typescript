"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalAccessUsers = void 0;
var ConditionalAccessUsers = /** @class */ (function () {
    /**
     * Instantiates a new conditionalAccessUsers and sets the default values.
     */
    function ConditionalAccessUsers() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ConditionalAccessUsers.prototype, "additionalData", {
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
    Object.defineProperty(ConditionalAccessUsers.prototype, "excludeGroups", {
        /**
         * Gets the excludeGroups property value. Group IDs excluded from scope of policy.
         * @returns a string
         */
        get: function () {
            return this._excludeGroups;
        },
        /**
         * Sets the excludeGroups property value. Group IDs excluded from scope of policy.
         * @param value Value to set for the excludeGroups property.
         */
        set: function (value) {
            this._excludeGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessUsers.prototype, "excludeRoles", {
        /**
         * Gets the excludeRoles property value. Role IDs excluded from scope of policy.
         * @returns a string
         */
        get: function () {
            return this._excludeRoles;
        },
        /**
         * Sets the excludeRoles property value. Role IDs excluded from scope of policy.
         * @param value Value to set for the excludeRoles property.
         */
        set: function (value) {
            this._excludeRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessUsers.prototype, "excludeUsers", {
        /**
         * Gets the excludeUsers property value. User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
         * @returns a string
         */
        get: function () {
            return this._excludeUsers;
        },
        /**
         * Sets the excludeUsers property value. User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
         * @param value Value to set for the excludeUsers property.
         */
        set: function (value) {
            this._excludeUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessUsers.prototype, "includeGroups", {
        /**
         * Gets the includeGroups property value. Group IDs in scope of policy unless explicitly excluded, or All.
         * @returns a string
         */
        get: function () {
            return this._includeGroups;
        },
        /**
         * Sets the includeGroups property value. Group IDs in scope of policy unless explicitly excluded, or All.
         * @param value Value to set for the includeGroups property.
         */
        set: function (value) {
            this._includeGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessUsers.prototype, "includeRoles", {
        /**
         * Gets the includeRoles property value. Role IDs in scope of policy unless explicitly excluded, or All.
         * @returns a string
         */
        get: function () {
            return this._includeRoles;
        },
        /**
         * Sets the includeRoles property value. Role IDs in scope of policy unless explicitly excluded, or All.
         * @param value Value to set for the includeRoles property.
         */
        set: function (value) {
            this._includeRoles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessUsers.prototype, "includeUsers", {
        /**
         * Gets the includeUsers property value. User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers.
         * @returns a string
         */
        get: function () {
            return this._includeUsers;
        },
        /**
         * Sets the includeUsers property value. User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers.
         * @param value Value to set for the includeUsers property.
         */
        set: function (value) {
            this._includeUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ConditionalAccessUsers.prototype.getFieldDeserializers = function () {
        return new Map([
            ["excludeGroups", function (o, n) { o.excludeGroups = n.getCollectionOfPrimitiveValues(); }],
            ["excludeRoles", function (o, n) { o.excludeRoles = n.getCollectionOfPrimitiveValues(); }],
            ["excludeUsers", function (o, n) { o.excludeUsers = n.getCollectionOfPrimitiveValues(); }],
            ["includeGroups", function (o, n) { o.includeGroups = n.getCollectionOfPrimitiveValues(); }],
            ["includeRoles", function (o, n) { o.includeRoles = n.getCollectionOfPrimitiveValues(); }],
            ["includeUsers", function (o, n) { o.includeUsers = n.getCollectionOfPrimitiveValues(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ConditionalAccessUsers.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues("excludeGroups", this.excludeGroups);
        writer.writeCollectionOfPrimitiveValues("excludeRoles", this.excludeRoles);
        writer.writeCollectionOfPrimitiveValues("excludeUsers", this.excludeUsers);
        writer.writeCollectionOfPrimitiveValues("includeGroups", this.includeGroups);
        writer.writeCollectionOfPrimitiveValues("includeRoles", this.includeRoles);
        writer.writeCollectionOfPrimitiveValues("includeUsers", this.includeUsers);
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
    return ConditionalAccessUsers;
}());
exports.ConditionalAccessUsers = ConditionalAccessUsers;
