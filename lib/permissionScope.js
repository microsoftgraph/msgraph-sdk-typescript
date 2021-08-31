"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionScope = void 0;
var PermissionScope = /** @class */ (function () {
    /**
     * Instantiates a new permissionScope and sets the default values.
     */
    function PermissionScope() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PermissionScope.prototype, "additionalData", {
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
    Object.defineProperty(PermissionScope.prototype, "adminConsentDescription", {
        /**
         * Gets the adminConsentDescription property value. A description of the delegated permissions, intended to be read by an administrator granting the permission on behalf of all users. This text appears in tenant-wide admin consent experiences.
         * @returns a string
         */
        get: function () {
            return this._adminConsentDescription;
        },
        /**
         * Sets the adminConsentDescription property value. A description of the delegated permissions, intended to be read by an administrator granting the permission on behalf of all users. This text appears in tenant-wide admin consent experiences.
         * @param value Value to set for the adminConsentDescription property.
         */
        set: function (value) {
            this._adminConsentDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "adminConsentDisplayName", {
        /**
         * Gets the adminConsentDisplayName property value. The permission's title, intended to be read by an administrator granting the permission on behalf of all users.
         * @returns a string
         */
        get: function () {
            return this._adminConsentDisplayName;
        },
        /**
         * Sets the adminConsentDisplayName property value. The permission's title, intended to be read by an administrator granting the permission on behalf of all users.
         * @param value Value to set for the adminConsentDisplayName property.
         */
        set: function (value) {
            this._adminConsentDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "id", {
        /**
         * Gets the id property value. Unique delegated permission identifier inside the collection of delegated permissions defined for a resource application.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value. Unique delegated permission identifier inside the collection of delegated permissions defined for a resource application.
         * @param value Value to set for the id property.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "isEnabled", {
        /**
         * Gets the isEnabled property value. When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false.  At that point, in a subsequent call, the permission may be removed.
         * @returns a boolean
         */
        get: function () {
            return this._isEnabled;
        },
        /**
         * Sets the isEnabled property value. When creating or updating a permission, this property must be set to true (which is the default). To delete a permission, this property must first be set to false.  At that point, in a subsequent call, the permission may be removed.
         * @param value Value to set for the isEnabled property.
         */
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "origin", {
        /**
         * Gets the origin property value.
         * @returns a string
         */
        get: function () {
            return this._origin;
        },
        /**
         * Sets the origin property value.
         * @param value Value to set for the origin property.
         */
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "type", {
        /**
         * Gets the type property value. Specifies whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. This will be the default behavior, but each customer can choose to customize the behavior in their organization (by allowing, restricting or limiting user consent to this delegated permission.)
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. Specifies whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. This will be the default behavior, but each customer can choose to customize the behavior in their organization (by allowing, restricting or limiting user consent to this delegated permission.)
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "userConsentDescription", {
        /**
         * Gets the userConsentDescription property value. A description of the delegated permissions, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
         * @returns a string
         */
        get: function () {
            return this._userConsentDescription;
        },
        /**
         * Sets the userConsentDescription property value. A description of the delegated permissions, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
         * @param value Value to set for the userConsentDescription property.
         */
        set: function (value) {
            this._userConsentDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "userConsentDisplayName", {
        /**
         * Gets the userConsentDisplayName property value. A title for the permission, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
         * @returns a string
         */
        get: function () {
            return this._userConsentDisplayName;
        },
        /**
         * Sets the userConsentDisplayName property value. A title for the permission, intended to be read by a user granting the permission on their own behalf. This text appears in consent experiences where the user is consenting only on behalf of themselves.
         * @param value Value to set for the userConsentDisplayName property.
         */
        set: function (value) {
            this._userConsentDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PermissionScope.prototype, "value", {
        /**
         * Gets the value property value. Specifies the value to include in the scp (scope) claim in access tokens. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
         * @returns a string
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value. Specifies the value to include in the scp (scope) claim in access tokens. Must not exceed 120 characters in length. Allowed characters are : ! # $ % & ' ( ) * + , - . / : ;  =  ? @ [ ] ^ + _  {  } ~, as well as characters in the ranges 0-9, A-Z and a-z. Any other character, including the space character, are not allowed. May not begin with ..
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
    PermissionScope.prototype.getFieldDeserializers = function () {
        return new Map([
            ["adminConsentDescription", function (o, n) { o.adminConsentDescription = n.getStringValue(); }],
            ["adminConsentDisplayName", function (o, n) { o.adminConsentDisplayName = n.getStringValue(); }],
            ["id", function (o, n) { o.id = n.getStringValue(); }],
            ["isEnabled", function (o, n) { o.isEnabled = n.getBooleanValue(); }],
            ["origin", function (o, n) { o.origin = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
            ["userConsentDescription", function (o, n) { o.userConsentDescription = n.getStringValue(); }],
            ["userConsentDisplayName", function (o, n) { o.userConsentDisplayName = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PermissionScope.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("adminConsentDescription", this.adminConsentDescription);
        writer.writeStringValue("adminConsentDisplayName", this.adminConsentDisplayName);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeStringValue("origin", this.origin);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("userConsentDescription", this.userConsentDescription);
        writer.writeStringValue("userConsentDisplayName", this.userConsentDisplayName);
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
    ;
    ;
    return PermissionScope;
}());
exports.PermissionScope = PermissionScope;
