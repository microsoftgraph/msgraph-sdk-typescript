"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicePlanInfo = void 0;
var ServicePlanInfo = /** @class */ (function () {
    /**
     * Instantiates a new servicePlanInfo and sets the default values.
     */
    function ServicePlanInfo() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ServicePlanInfo.prototype, "additionalData", {
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
    Object.defineProperty(ServicePlanInfo.prototype, "appliesTo", {
        /**
         * Gets the appliesTo property value. The object the service plan can be assigned to. Possible values:'User' - service plan can be assigned to individual users.'Company' - service plan can be assigned to the entire tenant.
         * @returns a string
         */
        get: function () {
            return this._appliesTo;
        },
        /**
         * Sets the appliesTo property value. The object the service plan can be assigned to. Possible values:'User' - service plan can be assigned to individual users.'Company' - service plan can be assigned to the entire tenant.
         * @param value Value to set for the appliesTo property.
         */
        set: function (value) {
            this._appliesTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePlanInfo.prototype, "provisioningStatus", {
        /**
         * Gets the provisioningStatus property value. The provisioning status of the service plan. Possible values:'Success' - Service is fully provisioned.'Disabled' - Service has been disabled.'PendingInput' - Service is not yet provisioned; awaiting service confirmation.'PendingActivation' - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan).'PendingProvisioning' - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet.
         * @returns a string
         */
        get: function () {
            return this._provisioningStatus;
        },
        /**
         * Sets the provisioningStatus property value. The provisioning status of the service plan. Possible values:'Success' - Service is fully provisioned.'Disabled' - Service has been disabled.'PendingInput' - Service is not yet provisioned; awaiting service confirmation.'PendingActivation' - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan).'PendingProvisioning' - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet.
         * @param value Value to set for the provisioningStatus property.
         */
        set: function (value) {
            this._provisioningStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePlanInfo.prototype, "servicePlanId", {
        /**
         * Gets the servicePlanId property value. The unique identifier of the service plan.
         * @returns a string
         */
        get: function () {
            return this._servicePlanId;
        },
        /**
         * Sets the servicePlanId property value. The unique identifier of the service plan.
         * @param value Value to set for the servicePlanId property.
         */
        set: function (value) {
            this._servicePlanId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ServicePlanInfo.prototype, "servicePlanName", {
        /**
         * Gets the servicePlanName property value. The name of the service plan.
         * @returns a string
         */
        get: function () {
            return this._servicePlanName;
        },
        /**
         * Sets the servicePlanName property value. The name of the service plan.
         * @param value Value to set for the servicePlanName property.
         */
        set: function (value) {
            this._servicePlanName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ServicePlanInfo.prototype.getFieldDeserializers = function () {
        return new Map([
            ["appliesTo", function (o, n) { o.appliesTo = n.getStringValue(); }],
            ["provisioningStatus", function (o, n) { o.provisioningStatus = n.getStringValue(); }],
            ["servicePlanId", function (o, n) { o.servicePlanId = n.getStringValue(); }],
            ["servicePlanName", function (o, n) { o.servicePlanName = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ServicePlanInfo.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("appliesTo", this.appliesTo);
        writer.writeStringValue("provisioningStatus", this.provisioningStatus);
        writer.writeStringValue("servicePlanId", this.servicePlanId);
        writer.writeStringValue("servicePlanName", this.servicePlanName);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return ServicePlanInfo;
}());
exports.ServicePlanInfo = ServicePlanInfo;
