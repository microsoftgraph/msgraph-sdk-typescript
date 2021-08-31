"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRole = void 0;
var AppRole = /** @class */ (function () {
    /**
     * Instantiates a new appRole and sets the default values.
     */
    function AppRole() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AppRole.prototype, "additionalData", {
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
    Object.defineProperty(AppRole.prototype, "allowedMemberTypes", {
        /**
         * Gets the allowedMemberTypes property value. Specifies whether this app role can be assigned to users and groups (by setting to ['User']), to other application's (by setting to ['Application'], or both (by setting to ['User', 'Application']). App roles supporting assignment to other applications' service principals are also known as application permissions. The 'Application' value is only supported for app roles defined on application entities.
         * @returns a string
         */
        get: function () {
            return this._allowedMemberTypes;
        },
        /**
         * Sets the allowedMemberTypes property value. Specifies whether this app role can be assigned to users and groups (by setting to ['User']), to other application's (by setting to ['Application'], or both (by setting to ['User', 'Application']). App roles supporting assignment to other applications' service principals are also known as application permissions. The 'Application' value is only supported for app roles defined on application entities.
         * @param value Value to set for the allowedMemberTypes property.
         */
        set: function (value) {
            this._allowedMemberTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRole.prototype, "description", {
        /**
         * Gets the description property value. The description for the app role. This is displayed when the app role is being assigned and, if the app role functions as an application permission, during  consent experiences.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The description for the app role. This is displayed when the app role is being assigned and, if the app role functions as an application permission, during  consent experiences.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRole.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name for the permission that appears in the app role assignment and consent experiences.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name for the permission that appears in the app role assignment and consent experiences.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRole.prototype, "id", {
        /**
         * Gets the id property value. Unique role identifier inside the appRoles collection. When creating a new app role, a new Guid identifier must be provided.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value. Unique role identifier inside the appRoles collection. When creating a new app role, a new Guid identifier must be provided.
         * @param value Value to set for the id property.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRole.prototype, "isEnabled", {
        /**
         * Gets the isEnabled property value. When creating or updating an app role, this must be set to true (which is the default). To delete a role, this must first be set to false.  At that point, in a subsequent call, this role may be removed.
         * @returns a boolean
         */
        get: function () {
            return this._isEnabled;
        },
        /**
         * Sets the isEnabled property value. When creating or updating an app role, this must be set to true (which is the default). To delete a role, this must first be set to false.  At that point, in a subsequent call, this role may be removed.
         * @param value Value to set for the isEnabled property.
         */
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRole.prototype, "origin", {
        /**
         * Gets the origin property value. Specifies if the app role is defined on the application object or on the servicePrincipal entity. Must not be included in any POST or PATCH requests. Read-only.
         * @returns a string
         */
        get: function () {
            return this._origin;
        },
        /**
         * Sets the origin property value. Specifies if the app role is defined on the application object or on the servicePrincipal entity. Must not be included in any POST or PATCH requests. Read-only.
         * @param value Value to set for the origin property.
         */
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AppRole.prototype, "value", {
        /**
         * Gets the value property value. Specifies the value to include in the roles claim in ID tokens and access tokens authenticating an assigned user or service principal. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
         * @returns a string
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value. Specifies the value to include in the roles claim in ID tokens and access tokens authenticating an assigned user or service principal. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
         * @param value Value to set for the value property.
         */
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AppRole.prototype.getFieldDeserializers = function () {
        return new Map([
            ["allowedMemberTypes", function (o, n) { o.allowedMemberTypes = n.getCollectionOfPrimitiveValues(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["id", function (o, n) { o.id = n.getStringValue(); }],
            ["isEnabled", function (o, n) { o.isEnabled = n.getBooleanValue(); }],
            ["origin", function (o, n) { o.origin = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AppRole.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues("allowedMemberTypes", this.allowedMemberTypes);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("origin", this.origin);
        writer.writeStringValue("value", this.value);
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
    return AppRole;
}());
exports.AppRole = AppRole;
