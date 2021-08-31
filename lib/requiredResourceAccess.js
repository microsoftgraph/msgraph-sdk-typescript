"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredResourceAccess = void 0;
var resourceAccess_1 = require("./resourceAccess");
var RequiredResourceAccess = /** @class */ (function () {
    /**
     * Instantiates a new requiredResourceAccess and sets the default values.
     */
    function RequiredResourceAccess() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(RequiredResourceAccess.prototype, "additionalData", {
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
    Object.defineProperty(RequiredResourceAccess.prototype, "resourceAccess", {
        /**
         * Gets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
         * @returns a resourceAccess
         */
        get: function () {
            return this._resourceAccess;
        },
        /**
         * Sets the resourceAccess property value. The list of OAuth2.0 permission scopes and app roles that the application requires from the specified resource.
         * @param value Value to set for the resourceAccess property.
         */
        set: function (value) {
            this._resourceAccess = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(RequiredResourceAccess.prototype, "resourceAppId", {
        /**
         * Gets the resourceAppId property value. The unique identifier for the resource that the application requires access to.  This should be equal to the appId declared on the target resource application.
         * @returns a string
         */
        get: function () {
            return this._resourceAppId;
        },
        /**
         * Sets the resourceAppId property value. The unique identifier for the resource that the application requires access to.  This should be equal to the appId declared on the target resource application.
         * @param value Value to set for the resourceAppId property.
         */
        set: function (value) {
            this._resourceAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    RequiredResourceAccess.prototype.getFieldDeserializers = function () {
        return new Map([
            ["resourceAccess", function (o, n) { o.resourceAccess = n.getCollectionOfObjectValues(resourceAccess_1.ResourceAccess); }],
            ["resourceAppId", function (o, n) { o.resourceAppId = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    RequiredResourceAccess.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues("resourceAccess", this.resourceAccess);
        writer.writeStringValue("resourceAppId", this.resourceAppId);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return RequiredResourceAccess;
}());
exports.RequiredResourceAccess = RequiredResourceAccess;
