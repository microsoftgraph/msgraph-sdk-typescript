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
exports.Alert = void 0;
var entity_1 = require("../entity");
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    /**
     * Instantiates a new alert and sets the default values.
     */
    function Alert() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Alert.prototype, "activityGroupName", {
        /**
         * Gets the activityGroupName property value. Name or alias of the activity group (attacker) this alert is attributed to.
         * @returns a string
         */
        get: function () {
            return this._activityGroupName;
        },
        /**
         * Sets the activityGroupName property value. Name or alias of the activity group (attacker) this alert is attributed to.
         * @param value Value to set for the activityGroupName property.
         */
        set: function (value) {
            this._activityGroupName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "alertDetections", {
        /**
         * Gets the alertDetections property value.
         * @returns a alertDetection
         */
        get: function () {
            return this._alertDetections;
        },
        /**
         * Sets the alertDetections property value.
         * @param value Value to set for the alertDetections property.
         */
        set: function (value) {
            this._alertDetections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "assignedTo", {
        /**
         * Gets the assignedTo property value. Name of the analyst the alert is assigned to for triage, investigation, or remediation (supports update).
         * @returns a string
         */
        get: function () {
            return this._assignedTo;
        },
        /**
         * Sets the assignedTo property value. Name of the analyst the alert is assigned to for triage, investigation, or remediation (supports update).
         * @param value Value to set for the assignedTo property.
         */
        set: function (value) {
            this._assignedTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "azureSubscriptionId", {
        /**
         * Gets the azureSubscriptionId property value. Azure subscription ID, present if this alert is related to an Azure resource.
         * @returns a string
         */
        get: function () {
            return this._azureSubscriptionId;
        },
        /**
         * Sets the azureSubscriptionId property value. Azure subscription ID, present if this alert is related to an Azure resource.
         * @param value Value to set for the azureSubscriptionId property.
         */
        set: function (value) {
            this._azureSubscriptionId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "azureTenantId", {
        /**
         * Gets the azureTenantId property value. Azure Active Directory tenant ID. Required.
         * @returns a string
         */
        get: function () {
            return this._azureTenantId;
        },
        /**
         * Sets the azureTenantId property value. Azure Active Directory tenant ID. Required.
         * @param value Value to set for the azureTenantId property.
         */
        set: function (value) {
            this._azureTenantId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "category", {
        /**
         * Gets the category property value. Category of the alert (for example, credentialTheft, ransomware, etc.).
         * @returns a string
         */
        get: function () {
            return this._category;
        },
        /**
         * Sets the category property value. Category of the alert (for example, credentialTheft, ransomware, etc.).
         * @param value Value to set for the category property.
         */
        set: function (value) {
            this._category = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "closedDateTime", {
        /**
         * Gets the closedDateTime property value. Time at which the alert was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z (supports update).
         * @returns a Date
         */
        get: function () {
            return this._closedDateTime;
        },
        /**
         * Sets the closedDateTime property value. Time at which the alert was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z (supports update).
         * @param value Value to set for the closedDateTime property.
         */
        set: function (value) {
            this._closedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "cloudAppStates", {
        /**
         * Gets the cloudAppStates property value. Security-related stateful information generated by the provider about the cloud application/s related to this alert.
         * @returns a cloudAppSecurityState
         */
        get: function () {
            return this._cloudAppStates;
        },
        /**
         * Sets the cloudAppStates property value. Security-related stateful information generated by the provider about the cloud application/s related to this alert.
         * @param value Value to set for the cloudAppStates property.
         */
        set: function (value) {
            this._cloudAppStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "comments", {
        /**
         * Gets the comments property value. Customer-provided comments on alert (for customer alert management) (supports update).
         * @returns a string
         */
        get: function () {
            return this._comments;
        },
        /**
         * Sets the comments property value. Customer-provided comments on alert (for customer alert management) (supports update).
         * @param value Value to set for the comments property.
         */
        set: function (value) {
            this._comments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "confidence", {
        /**
         * Gets the confidence property value. Confidence of the detection logic (percentage between 1-100).
         * @returns a integer
         */
        get: function () {
            return this._confidence;
        },
        /**
         * Sets the confidence property value. Confidence of the detection logic (percentage between 1-100).
         * @param value Value to set for the confidence property.
         */
        set: function (value) {
            this._confidence = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Time at which the alert was created by the alert provider. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Time at which the alert was created by the alert provider. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "description", {
        /**
         * Gets the description property value. Alert description.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Alert description.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "detectionIds", {
        /**
         * Gets the detectionIds property value. Set of alerts related to this alert entity (each alert is pushed to the SIEM as a separate record).
         * @returns a string
         */
        get: function () {
            return this._detectionIds;
        },
        /**
         * Sets the detectionIds property value. Set of alerts related to this alert entity (each alert is pushed to the SIEM as a separate record).
         * @param value Value to set for the detectionIds property.
         */
        set: function (value) {
            this._detectionIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "eventDateTime", {
        /**
         * Gets the eventDateTime property value. Time at which the event(s) that served as the trigger(s) to generate the alert occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
         * @returns a Date
         */
        get: function () {
            return this._eventDateTime;
        },
        /**
         * Sets the eventDateTime property value. Time at which the event(s) that served as the trigger(s) to generate the alert occurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required.
         * @param value Value to set for the eventDateTime property.
         */
        set: function (value) {
            this._eventDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "feedback", {
        /**
         * Gets the feedback property value. Analyst feedback on the alert. Possible values are: unknown, truePositive, falsePositive, benignPositive. (supports update)
         * @returns a alertFeedback
         */
        get: function () {
            return this._feedback;
        },
        /**
         * Sets the feedback property value. Analyst feedback on the alert. Possible values are: unknown, truePositive, falsePositive, benignPositive. (supports update)
         * @param value Value to set for the feedback property.
         */
        set: function (value) {
            this._feedback = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "fileStates", {
        /**
         * Gets the fileStates property value. Security-related stateful information generated by the provider about the file(s) related to this alert.
         * @returns a fileSecurityState
         */
        get: function () {
            return this._fileStates;
        },
        /**
         * Sets the fileStates property value. Security-related stateful information generated by the provider about the file(s) related to this alert.
         * @param value Value to set for the fileStates property.
         */
        set: function (value) {
            this._fileStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "historyStates", {
        /**
         * Gets the historyStates property value. A collection of alertHistoryStates comprising an audit log of all updates made to an alert.
         * @returns a alertHistoryState
         */
        get: function () {
            return this._historyStates;
        },
        /**
         * Sets the historyStates property value. A collection of alertHistoryStates comprising an audit log of all updates made to an alert.
         * @param value Value to set for the historyStates property.
         */
        set: function (value) {
            this._historyStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "hostStates", {
        /**
         * Gets the hostStates property value. Security-related stateful information generated by the provider about the host(s) related to this alert.
         * @returns a hostSecurityState
         */
        get: function () {
            return this._hostStates;
        },
        /**
         * Sets the hostStates property value. Security-related stateful information generated by the provider about the host(s) related to this alert.
         * @param value Value to set for the hostStates property.
         */
        set: function (value) {
            this._hostStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "incidentIds", {
        /**
         * Gets the incidentIds property value. IDs of incidents related to current alert.
         * @returns a string
         */
        get: function () {
            return this._incidentIds;
        },
        /**
         * Sets the incidentIds property value. IDs of incidents related to current alert.
         * @param value Value to set for the incidentIds property.
         */
        set: function (value) {
            this._incidentIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "investigationSecurityStates", {
        /**
         * Gets the investigationSecurityStates property value.
         * @returns a investigationSecurityState
         */
        get: function () {
            return this._investigationSecurityStates;
        },
        /**
         * Sets the investigationSecurityStates property value.
         * @param value Value to set for the investigationSecurityStates property.
         */
        set: function (value) {
            this._investigationSecurityStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "lastEventDateTime", {
        /**
         * Gets the lastEventDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._lastEventDateTime;
        },
        /**
         * Sets the lastEventDateTime property value.
         * @param value Value to set for the lastEventDateTime property.
         */
        set: function (value) {
            this._lastEventDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Time at which the alert entity was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Time at which the alert entity was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "malwareStates", {
        /**
         * Gets the malwareStates property value. Threat Intelligence pertaining to malware related to this alert.
         * @returns a malwareState
         */
        get: function () {
            return this._malwareStates;
        },
        /**
         * Sets the malwareStates property value. Threat Intelligence pertaining to malware related to this alert.
         * @param value Value to set for the malwareStates property.
         */
        set: function (value) {
            this._malwareStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "messageSecurityStates", {
        /**
         * Gets the messageSecurityStates property value.
         * @returns a messageSecurityState
         */
        get: function () {
            return this._messageSecurityStates;
        },
        /**
         * Sets the messageSecurityStates property value.
         * @param value Value to set for the messageSecurityStates property.
         */
        set: function (value) {
            this._messageSecurityStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "networkConnections", {
        /**
         * Gets the networkConnections property value. Security-related stateful information generated by the provider about the network connection(s) related to this alert.
         * @returns a networkConnection
         */
        get: function () {
            return this._networkConnections;
        },
        /**
         * Sets the networkConnections property value. Security-related stateful information generated by the provider about the network connection(s) related to this alert.
         * @param value Value to set for the networkConnections property.
         */
        set: function (value) {
            this._networkConnections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "processes", {
        /**
         * Gets the processes property value. Security-related stateful information generated by the provider about the process or processes related to this alert.
         * @returns a process
         */
        get: function () {
            return this._processes;
        },
        /**
         * Sets the processes property value. Security-related stateful information generated by the provider about the process or processes related to this alert.
         * @param value Value to set for the processes property.
         */
        set: function (value) {
            this._processes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "recommendedActions", {
        /**
         * Gets the recommendedActions property value. Vendor/provider recommended action(s) to take as a result of the alert (for example, isolate machine, enforce2FA, reimage host).
         * @returns a string
         */
        get: function () {
            return this._recommendedActions;
        },
        /**
         * Sets the recommendedActions property value. Vendor/provider recommended action(s) to take as a result of the alert (for example, isolate machine, enforce2FA, reimage host).
         * @param value Value to set for the recommendedActions property.
         */
        set: function (value) {
            this._recommendedActions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "registryKeyStates", {
        /**
         * Gets the registryKeyStates property value. Security-related stateful information generated by the provider about the registry keys related to this alert.
         * @returns a registryKeyState
         */
        get: function () {
            return this._registryKeyStates;
        },
        /**
         * Sets the registryKeyStates property value. Security-related stateful information generated by the provider about the registry keys related to this alert.
         * @param value Value to set for the registryKeyStates property.
         */
        set: function (value) {
            this._registryKeyStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "securityResources", {
        /**
         * Gets the securityResources property value. Resources related to current alert. For example, for some alerts this can have the Azure Resource value.
         * @returns a securityResource
         */
        get: function () {
            return this._securityResources;
        },
        /**
         * Sets the securityResources property value. Resources related to current alert. For example, for some alerts this can have the Azure Resource value.
         * @param value Value to set for the securityResources property.
         */
        set: function (value) {
            this._securityResources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "severity", {
        /**
         * Gets the severity property value. Alert severity - set by vendor/provider. Possible values are: unknown, informational, low, medium, high. Required.
         * @returns a alertSeverity
         */
        get: function () {
            return this._severity;
        },
        /**
         * Sets the severity property value. Alert severity - set by vendor/provider. Possible values are: unknown, informational, low, medium, high. Required.
         * @param value Value to set for the severity property.
         */
        set: function (value) {
            this._severity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "sourceMaterials", {
        /**
         * Gets the sourceMaterials property value. Hyperlinks (URIs) to the source material related to the alert, for example, provider's user interface for alerts or log search, etc.
         * @returns a string
         */
        get: function () {
            return this._sourceMaterials;
        },
        /**
         * Sets the sourceMaterials property value. Hyperlinks (URIs) to the source material related to the alert, for example, provider's user interface for alerts or log search, etc.
         * @param value Value to set for the sourceMaterials property.
         */
        set: function (value) {
            this._sourceMaterials = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "status", {
        /**
         * Gets the status property value. Alert lifecycle status (stage). Possible values are: unknown, newAlert, inProgress, resolved. (supports update). Required.
         * @returns a alertStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Alert lifecycle status (stage). Possible values are: unknown, newAlert, inProgress, resolved. (supports update). Required.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "tags", {
        /**
         * Gets the tags property value. User-definable labels that can be applied to an alert and can serve as filter conditions (for example 'HVA', 'SAW', etc.) (supports update).
         * @returns a string
         */
        get: function () {
            return this._tags;
        },
        /**
         * Sets the tags property value. User-definable labels that can be applied to an alert and can serve as filter conditions (for example 'HVA', 'SAW', etc.) (supports update).
         * @param value Value to set for the tags property.
         */
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "title", {
        /**
         * Gets the title property value. Alert title. Required.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. Alert title. Required.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "triggers", {
        /**
         * Gets the triggers property value. Security-related information about the specific properties that triggered the alert (properties appearing in the alert). Alerts might contain information about multiple users, hosts, files, ip addresses. This field indicates which properties triggered the alert generation.
         * @returns a alertTrigger
         */
        get: function () {
            return this._triggers;
        },
        /**
         * Sets the triggers property value. Security-related information about the specific properties that triggered the alert (properties appearing in the alert). Alerts might contain information about multiple users, hosts, files, ip addresses. This field indicates which properties triggered the alert generation.
         * @param value Value to set for the triggers property.
         */
        set: function (value) {
            this._triggers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "uriClickSecurityStates", {
        /**
         * Gets the uriClickSecurityStates property value.
         * @returns a uriClickSecurityState
         */
        get: function () {
            return this._uriClickSecurityStates;
        },
        /**
         * Sets the uriClickSecurityStates property value.
         * @param value Value to set for the uriClickSecurityStates property.
         */
        set: function (value) {
            this._uriClickSecurityStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "userStates", {
        /**
         * Gets the userStates property value. Security-related stateful information generated by the provider about the user accounts related to this alert.
         * @returns a userSecurityState
         */
        get: function () {
            return this._userStates;
        },
        /**
         * Sets the userStates property value. Security-related stateful information generated by the provider about the user accounts related to this alert.
         * @param value Value to set for the userStates property.
         */
        set: function (value) {
            this._userStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "vendorInformation", {
        /**
         * Gets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=Windows Defender ATP; subProvider=AppLocker). Required.
         * @returns a securityVendorInformation
         */
        get: function () {
            return this._vendorInformation;
        },
        /**
         * Sets the vendorInformation property value. Complex type containing details about the security product/service vendor, provider, and subprovider (for example, vendor=Microsoft; provider=Windows Defender ATP; subProvider=AppLocker). Required.
         * @param value Value to set for the vendorInformation property.
         */
        set: function (value) {
            this._vendorInformation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Alert.prototype, "vulnerabilityStates", {
        /**
         * Gets the vulnerabilityStates property value. Threat intelligence pertaining to one or more vulnerabilities related to this alert.
         * @returns a vulnerabilityState
         */
        get: function () {
            return this._vulnerabilityStates;
        },
        /**
         * Sets the vulnerabilityStates property value. Threat intelligence pertaining to one or more vulnerabilities related to this alert.
         * @param value Value to set for the vulnerabilityStates property.
         */
        set: function (value) {
            this._vulnerabilityStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Alert.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activityGroupName", function (o, n) { o.activityGroupName = n.getStringValue(); }],
            ["alertDetections", function (o, n) { o.alertDetections = n.getCollectionOfPrimitiveValues(); }],
            ["assignedTo", function (o, n) { o.assignedTo = n.getStringValue(); }],
            ["azureSubscriptionId", function (o, n) { o.azureSubscriptionId = n.getStringValue(); }],
            ["azureTenantId", function (o, n) { o.azureTenantId = n.getStringValue(); }],
            ["category", function (o, n) { o.category = n.getStringValue(); }],
            ["closedDateTime", function (o, n) { o.closedDateTime = n.getDateValue(); }],
            ["cloudAppStates", function (o, n) { o.cloudAppStates = n.getCollectionOfPrimitiveValues(); }],
            ["comments", function (o, n) { o.comments = n.getCollectionOfPrimitiveValues(); }],
            ["confidence", function (o, n) { o.confidence = n.getNumberValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["detectionIds", function (o, n) { o.detectionIds = n.getCollectionOfPrimitiveValues(); }],
            ["eventDateTime", function (o, n) { o.eventDateTime = n.getDateValue(); }],
            ["feedback", function (o, n) { o.feedback = n.getObjectValue(AlertFeedback); }],
            ["fileStates", function (o, n) { o.fileStates = n.getCollectionOfPrimitiveValues(); }],
            ["historyStates", function (o, n) { o.historyStates = n.getCollectionOfPrimitiveValues(); }],
            ["hostStates", function (o, n) { o.hostStates = n.getCollectionOfPrimitiveValues(); }],
            ["incidentIds", function (o, n) { o.incidentIds = n.getCollectionOfPrimitiveValues(); }],
            ["investigationSecurityStates", function (o, n) { o.investigationSecurityStates = n.getCollectionOfPrimitiveValues(); }],
            ["lastEventDateTime", function (o, n) { o.lastEventDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["malwareStates", function (o, n) { o.malwareStates = n.getCollectionOfPrimitiveValues(); }],
            ["messageSecurityStates", function (o, n) { o.messageSecurityStates = n.getCollectionOfPrimitiveValues(); }],
            ["networkConnections", function (o, n) { o.networkConnections = n.getCollectionOfPrimitiveValues(); }],
            ["processes", function (o, n) { o.processes = n.getCollectionOfPrimitiveValues(); }],
            ["recommendedActions", function (o, n) { o.recommendedActions = n.getCollectionOfPrimitiveValues(); }],
            ["registryKeyStates", function (o, n) { o.registryKeyStates = n.getCollectionOfPrimitiveValues(); }],
            ["securityResources", function (o, n) { o.securityResources = n.getCollectionOfPrimitiveValues(); }],
            ["severity", function (o, n) { o.severity = n.getObjectValue(AlertSeverity); }],
            ["sourceMaterials", function (o, n) { o.sourceMaterials = n.getCollectionOfPrimitiveValues(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(AlertStatus); }],
            ["tags", function (o, n) { o.tags = n.getCollectionOfPrimitiveValues(); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],
            ["triggers", function (o, n) { o.triggers = n.getCollectionOfPrimitiveValues(); }],
            ["uriClickSecurityStates", function (o, n) { o.uriClickSecurityStates = n.getCollectionOfPrimitiveValues(); }],
            ["userStates", function (o, n) { o.userStates = n.getCollectionOfPrimitiveValues(); }],
            ["vendorInformation", function (o, n) { o.vendorInformation = n.getObjectValue(SecurityVendorInformation); }],
            ["vulnerabilityStates", function (o, n) { o.vulnerabilityStates = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Alert.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("activityGroupName", this.activityGroupName);
        writer.writeCollectionOfPrimitiveValues("alertDetections", this.alertDetections);
        writer.writeStringValue("assignedTo", this.assignedTo);
        writer.writeStringValue("azureSubscriptionId", this.azureSubscriptionId);
        writer.writeStringValue("azureTenantId", this.azureTenantId);
        writer.writeStringValue("category", this.category);
        writer.writeDateValue("closedDateTime", this.closedDateTime);
        writer.writeCollectionOfPrimitiveValues("cloudAppStates", this.cloudAppStates);
        writer.writeCollectionOfPrimitiveValues("comments", this.comments);
        writer.writeNumberValue("confidence", this.confidence);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfPrimitiveValues("detectionIds", this.detectionIds);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
        writer.writeObjectValue("feedback", this.feedback);
        writer.writeCollectionOfPrimitiveValues("fileStates", this.fileStates);
        writer.writeCollectionOfPrimitiveValues("historyStates", this.historyStates);
        writer.writeCollectionOfPrimitiveValues("hostStates", this.hostStates);
        writer.writeCollectionOfPrimitiveValues("incidentIds", this.incidentIds);
        writer.writeCollectionOfPrimitiveValues("investigationSecurityStates", this.investigationSecurityStates);
        writer.writeDateValue("lastEventDateTime", this.lastEventDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues("malwareStates", this.malwareStates);
        writer.writeCollectionOfPrimitiveValues("messageSecurityStates", this.messageSecurityStates);
        writer.writeCollectionOfPrimitiveValues("networkConnections", this.networkConnections);
        writer.writeCollectionOfPrimitiveValues("processes", this.processes);
        writer.writeCollectionOfPrimitiveValues("recommendedActions", this.recommendedActions);
        writer.writeCollectionOfPrimitiveValues("registryKeyStates", this.registryKeyStates);
        writer.writeCollectionOfPrimitiveValues("securityResources", this.securityResources);
        writer.writeObjectValue("severity", this.severity);
        writer.writeCollectionOfPrimitiveValues("sourceMaterials", this.sourceMaterials);
        writer.writeObjectValue("status", this.status);
        writer.writeCollectionOfPrimitiveValues("tags", this.tags);
        writer.writeStringValue("title", this.title);
        writer.writeCollectionOfPrimitiveValues("triggers", this.triggers);
        writer.writeCollectionOfPrimitiveValues("uriClickSecurityStates", this.uriClickSecurityStates);
        writer.writeCollectionOfPrimitiveValues("userStates", this.userStates);
        writer.writeObjectValue("vendorInformation", this.vendorInformation);
        writer.writeCollectionOfPrimitiveValues("vulnerabilityStates", this.vulnerabilityStates);
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
    ;
    ;
    ;
    ;
    ;
    ;
    return Alert;
}(entity_1.Entity));
exports.Alert = Alert;
