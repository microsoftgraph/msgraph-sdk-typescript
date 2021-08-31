"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditActivityInitiator = void 0;
var appIdentity_1 = require("./appIdentity");
var AuditActivityInitiator = /** @class */ (function () {
    /**
     * Instantiates a new auditActivityInitiator and sets the default values.
     */
    function AuditActivityInitiator() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AuditActivityInitiator.prototype, "additionalData", {
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
    Object.defineProperty(AuditActivityInitiator.prototype, "app", {
        /**
         * Gets the app property value. If the resource initiating the activity is an app, this property indicates all the app related information like appId, Name, servicePrincipalId, Name.
         * @returns a appIdentity
         */
        get: function () {
            return this._app;
        },
        /**
         * Sets the app property value. If the resource initiating the activity is an app, this property indicates all the app related information like appId, Name, servicePrincipalId, Name.
         * @param value Value to set for the app property.
         */
        set: function (value) {
            this._app = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AuditActivityInitiator.prototype, "user", {
        /**
         * Gets the user property value. If the resource initiating the activity is a user, this property Indicates all the user related information like userId, Name, UserPrinicpalName.
         * @returns a userIdentity
         */
        get: function () {
            return this._user;
        },
        /**
         * Sets the user property value. If the resource initiating the activity is a user, this property Indicates all the user related information like userId, Name, UserPrinicpalName.
         * @param value Value to set for the user property.
         */
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AuditActivityInitiator.prototype.getFieldDeserializers = function () {
        return new Map([
            ["app", function (o, n) { o.app = n.getObjectValue(appIdentity_1.AppIdentity); }],
            ["user", function (o, n) { o.user = n.getObjectValue(UserIdentity); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AuditActivityInitiator.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("app", this.app);
        writer.writeObjectValue("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return AuditActivityInitiator;
}());
exports.AuditActivityInitiator = AuditActivityInitiator;
