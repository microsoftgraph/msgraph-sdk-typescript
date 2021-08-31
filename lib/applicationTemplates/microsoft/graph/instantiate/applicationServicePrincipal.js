"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationServicePrincipal = void 0;
var application_1 = require("../../../../application");
var servicePrincipal_1 = require("../../../../servicePrincipal");
var ApplicationServicePrincipal = /** @class */ (function () {
    /**
     * Instantiates a new applicationServicePrincipal and sets the default values.
     */
    function ApplicationServicePrincipal() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ApplicationServicePrincipal.prototype, "additionalData", {
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
    Object.defineProperty(ApplicationServicePrincipal.prototype, "application", {
        /**
         * Gets the application property value.
         * @returns a application
         */
        get: function () {
            return this._application;
        },
        /**
         * Sets the application property value.
         * @param value Value to set for the application property.
         */
        set: function (value) {
            this._application = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ApplicationServicePrincipal.prototype, "servicePrincipal", {
        /**
         * Gets the servicePrincipal property value.
         * @returns a servicePrincipal
         */
        get: function () {
            return this._servicePrincipal;
        },
        /**
         * Sets the servicePrincipal property value.
         * @param value Value to set for the servicePrincipal property.
         */
        set: function (value) {
            this._servicePrincipal = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ApplicationServicePrincipal.prototype.getFieldDeserializers = function () {
        return new Map([
            ["application", function (o, n) { o.application = n.getObjectValue(application_1.Application); }],
            ["servicePrincipal", function (o, n) { o.servicePrincipal = n.getObjectValue(servicePrincipal_1.ServicePrincipal); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ApplicationServicePrincipal.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("application", this.application);
        writer.writeObjectValue("servicePrincipal", this.servicePrincipal);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return ApplicationServicePrincipal;
}());
exports.ApplicationServicePrincipal = ApplicationServicePrincipal;
