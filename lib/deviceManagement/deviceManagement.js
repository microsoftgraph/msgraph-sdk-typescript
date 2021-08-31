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
exports.DeviceManagement = void 0;
var deviceManagementTroubleshootingEvent_1 = require("../deviceManagementTroubleshootingEvent");
var entity_1 = require("../entity");
var managedDevice_1 = require("../managedDevice");
var applePushNotificationCertificate_1 = require("./applePushNotificationCertificate/applePushNotificationCertificate");
var complianceManagementPartner_1 = require("./complianceManagementPartner");
var onPremisesConditionalAccessSettings_1 = require("./conditionalAccessSettings/onPremisesConditionalAccessSettings");
var detectedApp_1 = require("./detectedApp");
var deviceAndAppManagementRoleAssignment_1 = require("./deviceAndAppManagementRoleAssignment");
var deviceCategory_1 = require("./deviceCategory");
var deviceCompliancePolicy_1 = require("./deviceCompliancePolicy");
var deviceCompliancePolicyDeviceStateSummary_1 = require("./deviceCompliancePolicyDeviceStateSummary/deviceCompliancePolicyDeviceStateSummary");
var deviceCompliancePolicySettingStateSummary_1 = require("./deviceCompliancePolicySettingStateSummary");
var deviceConfiguration_1 = require("./deviceConfiguration");
var deviceConfigurationDeviceStateSummary_1 = require("./deviceConfigurationDeviceStateSummaries/deviceConfigurationDeviceStateSummary");
var deviceEnrollmentConfiguration_1 = require("./deviceEnrollmentConfiguration");
var deviceManagementExchangeConnector_1 = require("./deviceManagementExchangeConnector");
var deviceManagementPartner_1 = require("./deviceManagementPartner");
var importedWindowsAutopilotDeviceIdentity_1 = require("./importedWindowsAutopilotDeviceIdentity");
var iosUpdateDeviceStatus_1 = require("./iosUpdateDeviceStatus");
var managedDeviceOverview_1 = require("./managedDeviceOverview/managedDeviceOverview");
var mobileThreatDefenseConnector_1 = require("./mobileThreatDefenseConnector");
var notificationMessageTemplate_1 = require("./notificationMessageTemplate");
var remoteAssistancePartner_1 = require("./remoteAssistancePartner");
var resourceOperation_1 = require("./resourceOperation");
var roleDefinition_1 = require("./roleDefinition");
var softwareUpdateStatusSummary_1 = require("./softwareUpdateStatusSummary/softwareUpdateStatusSummary");
var telecomExpenseManagementPartner_1 = require("./telecomExpenseManagementPartner");
var termsAndConditions_1 = require("./termsAndConditions");
var windowsAutopilotDeviceIdentity_1 = require("./windowsAutopilotDeviceIdentity");
var windowsInformationProtectionAppLearningSummary_1 = require("./windowsInformationProtectionAppLearningSummary");
var windowsInformationProtectionNetworkLearningSummary_1 = require("./windowsInformationProtectionNetworkLearningSummary");
var DeviceManagement = /** @class */ (function (_super) {
    __extends(DeviceManagement, _super);
    /**
     * Instantiates a new DeviceManagement and sets the default values.
     */
    function DeviceManagement() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceManagement.prototype, "applePushNotificationCertificate", {
        /**
         * Gets the applePushNotificationCertificate property value. Apple push notification certificate.
         * @returns a applePushNotificationCertificate
         */
        get: function () {
            return this._applePushNotificationCertificate;
        },
        /**
         * Sets the applePushNotificationCertificate property value. Apple push notification certificate.
         * @param value Value to set for the applePushNotificationCertificate property.
         */
        set: function (value) {
            this._applePushNotificationCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "complianceManagementPartners", {
        /**
         * Gets the complianceManagementPartners property value. The list of Compliance Management Partners configured by the tenant.
         * @returns a complianceManagementPartner
         */
        get: function () {
            return this._complianceManagementPartners;
        },
        /**
         * Sets the complianceManagementPartners property value. The list of Compliance Management Partners configured by the tenant.
         * @param value Value to set for the complianceManagementPartners property.
         */
        set: function (value) {
            this._complianceManagementPartners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "conditionalAccessSettings", {
        /**
         * Gets the conditionalAccessSettings property value. The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
         * @returns a onPremisesConditionalAccessSettings
         */
        get: function () {
            return this._conditionalAccessSettings;
        },
        /**
         * Sets the conditionalAccessSettings property value. The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access
         * @param value Value to set for the conditionalAccessSettings property.
         */
        set: function (value) {
            this._conditionalAccessSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "detectedApps", {
        /**
         * Gets the detectedApps property value. The list of detected apps associated with a device.
         * @returns a detectedApp
         */
        get: function () {
            return this._detectedApps;
        },
        /**
         * Sets the detectedApps property value. The list of detected apps associated with a device.
         * @param value Value to set for the detectedApps property.
         */
        set: function (value) {
            this._detectedApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceCategories", {
        /**
         * Gets the deviceCategories property value. The list of device categories with the tenant.
         * @returns a deviceCategory
         */
        get: function () {
            return this._deviceCategories;
        },
        /**
         * Sets the deviceCategories property value. The list of device categories with the tenant.
         * @param value Value to set for the deviceCategories property.
         */
        set: function (value) {
            this._deviceCategories = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceCompliancePolicies", {
        /**
         * Gets the deviceCompliancePolicies property value. The device compliance policies.
         * @returns a deviceCompliancePolicy
         */
        get: function () {
            return this._deviceCompliancePolicies;
        },
        /**
         * Sets the deviceCompliancePolicies property value. The device compliance policies.
         * @param value Value to set for the deviceCompliancePolicies property.
         */
        set: function (value) {
            this._deviceCompliancePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceCompliancePolicyDeviceStateSummary", {
        /**
         * Gets the deviceCompliancePolicyDeviceStateSummary property value. The device compliance state summary for this account.
         * @returns a deviceCompliancePolicyDeviceStateSummary
         */
        get: function () {
            return this._deviceCompliancePolicyDeviceStateSummary;
        },
        /**
         * Sets the deviceCompliancePolicyDeviceStateSummary property value. The device compliance state summary for this account.
         * @param value Value to set for the deviceCompliancePolicyDeviceStateSummary property.
         */
        set: function (value) {
            this._deviceCompliancePolicyDeviceStateSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceCompliancePolicySettingStateSummaries", {
        /**
         * Gets the deviceCompliancePolicySettingStateSummaries property value. The summary states of compliance policy settings for this account.
         * @returns a deviceCompliancePolicySettingStateSummary
         */
        get: function () {
            return this._deviceCompliancePolicySettingStateSummaries;
        },
        /**
         * Sets the deviceCompliancePolicySettingStateSummaries property value. The summary states of compliance policy settings for this account.
         * @param value Value to set for the deviceCompliancePolicySettingStateSummaries property.
         */
        set: function (value) {
            this._deviceCompliancePolicySettingStateSummaries = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceConfigurationDeviceStateSummaries", {
        /**
         * Gets the deviceConfigurationDeviceStateSummaries property value. The device configuration device state summary for this account.
         * @returns a deviceConfigurationDeviceStateSummary
         */
        get: function () {
            return this._deviceConfigurationDeviceStateSummaries;
        },
        /**
         * Sets the deviceConfigurationDeviceStateSummaries property value. The device configuration device state summary for this account.
         * @param value Value to set for the deviceConfigurationDeviceStateSummaries property.
         */
        set: function (value) {
            this._deviceConfigurationDeviceStateSummaries = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceConfigurations", {
        /**
         * Gets the deviceConfigurations property value. The device configurations.
         * @returns a deviceConfiguration
         */
        get: function () {
            return this._deviceConfigurations;
        },
        /**
         * Sets the deviceConfigurations property value. The device configurations.
         * @param value Value to set for the deviceConfigurations property.
         */
        set: function (value) {
            this._deviceConfigurations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceEnrollmentConfigurations", {
        /**
         * Gets the deviceEnrollmentConfigurations property value. The list of device enrollment configurations
         * @returns a deviceEnrollmentConfiguration
         */
        get: function () {
            return this._deviceEnrollmentConfigurations;
        },
        /**
         * Sets the deviceEnrollmentConfigurations property value. The list of device enrollment configurations
         * @param value Value to set for the deviceEnrollmentConfigurations property.
         */
        set: function (value) {
            this._deviceEnrollmentConfigurations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "deviceManagementPartners", {
        /**
         * Gets the deviceManagementPartners property value. The list of Device Management Partners configured by the tenant.
         * @returns a deviceManagementPartner
         */
        get: function () {
            return this._deviceManagementPartners;
        },
        /**
         * Sets the deviceManagementPartners property value. The list of Device Management Partners configured by the tenant.
         * @param value Value to set for the deviceManagementPartners property.
         */
        set: function (value) {
            this._deviceManagementPartners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "exchangeConnectors", {
        /**
         * Gets the exchangeConnectors property value. The list of Exchange Connectors configured by the tenant.
         * @returns a deviceManagementExchangeConnector
         */
        get: function () {
            return this._exchangeConnectors;
        },
        /**
         * Sets the exchangeConnectors property value. The list of Exchange Connectors configured by the tenant.
         * @param value Value to set for the exchangeConnectors property.
         */
        set: function (value) {
            this._exchangeConnectors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "importedWindowsAutopilotDeviceIdentities", {
        /**
         * Gets the importedWindowsAutopilotDeviceIdentities property value. Collection of imported Windows autopilot devices.
         * @returns a importedWindowsAutopilotDeviceIdentity
         */
        get: function () {
            return this._importedWindowsAutopilotDeviceIdentities;
        },
        /**
         * Sets the importedWindowsAutopilotDeviceIdentities property value. Collection of imported Windows autopilot devices.
         * @param value Value to set for the importedWindowsAutopilotDeviceIdentities property.
         */
        set: function (value) {
            this._importedWindowsAutopilotDeviceIdentities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "intuneAccountId", {
        /**
         * Gets the intuneAccountId property value. Intune Account ID for given tenant
         * @returns a string
         */
        get: function () {
            return this._intuneAccountId;
        },
        /**
         * Sets the intuneAccountId property value. Intune Account ID for given tenant
         * @param value Value to set for the intuneAccountId property.
         */
        set: function (value) {
            this._intuneAccountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "intuneBrand", {
        /**
         * Gets the intuneBrand property value. intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal.
         * @returns a intuneBrand
         */
        get: function () {
            return this._intuneBrand;
        },
        /**
         * Sets the intuneBrand property value. intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal.
         * @param value Value to set for the intuneBrand property.
         */
        set: function (value) {
            this._intuneBrand = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "iosUpdateStatuses", {
        /**
         * Gets the iosUpdateStatuses property value. The IOS software update installation statuses for this account.
         * @returns a iosUpdateDeviceStatus
         */
        get: function () {
            return this._iosUpdateStatuses;
        },
        /**
         * Sets the iosUpdateStatuses property value. The IOS software update installation statuses for this account.
         * @param value Value to set for the iosUpdateStatuses property.
         */
        set: function (value) {
            this._iosUpdateStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "managedDeviceOverview", {
        /**
         * Gets the managedDeviceOverview property value. Device overview
         * @returns a managedDeviceOverview
         */
        get: function () {
            return this._managedDeviceOverview;
        },
        /**
         * Sets the managedDeviceOverview property value. Device overview
         * @param value Value to set for the managedDeviceOverview property.
         */
        set: function (value) {
            this._managedDeviceOverview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "managedDevices", {
        /**
         * Gets the managedDevices property value. The list of managed devices.
         * @returns a managedDevice
         */
        get: function () {
            return this._managedDevices;
        },
        /**
         * Sets the managedDevices property value. The list of managed devices.
         * @param value Value to set for the managedDevices property.
         */
        set: function (value) {
            this._managedDevices = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "mobileThreatDefenseConnectors", {
        /**
         * Gets the mobileThreatDefenseConnectors property value. The list of Mobile threat Defense connectors configured by the tenant.
         * @returns a mobileThreatDefenseConnector
         */
        get: function () {
            return this._mobileThreatDefenseConnectors;
        },
        /**
         * Sets the mobileThreatDefenseConnectors property value. The list of Mobile threat Defense connectors configured by the tenant.
         * @param value Value to set for the mobileThreatDefenseConnectors property.
         */
        set: function (value) {
            this._mobileThreatDefenseConnectors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "notificationMessageTemplates", {
        /**
         * Gets the notificationMessageTemplates property value. The Notification Message Templates.
         * @returns a notificationMessageTemplate
         */
        get: function () {
            return this._notificationMessageTemplates;
        },
        /**
         * Sets the notificationMessageTemplates property value. The Notification Message Templates.
         * @param value Value to set for the notificationMessageTemplates property.
         */
        set: function (value) {
            this._notificationMessageTemplates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "remoteAssistancePartners", {
        /**
         * Gets the remoteAssistancePartners property value. The remote assist partners.
         * @returns a remoteAssistancePartner
         */
        get: function () {
            return this._remoteAssistancePartners;
        },
        /**
         * Sets the remoteAssistancePartners property value. The remote assist partners.
         * @param value Value to set for the remoteAssistancePartners property.
         */
        set: function (value) {
            this._remoteAssistancePartners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "resourceOperations", {
        /**
         * Gets the resourceOperations property value. The Resource Operations.
         * @returns a resourceOperation
         */
        get: function () {
            return this._resourceOperations;
        },
        /**
         * Sets the resourceOperations property value. The Resource Operations.
         * @param value Value to set for the resourceOperations property.
         */
        set: function (value) {
            this._resourceOperations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "roleAssignments", {
        /**
         * Gets the roleAssignments property value. The Role Assignments.
         * @returns a deviceAndAppManagementRoleAssignment
         */
        get: function () {
            return this._roleAssignments;
        },
        /**
         * Sets the roleAssignments property value. The Role Assignments.
         * @param value Value to set for the roleAssignments property.
         */
        set: function (value) {
            this._roleAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "roleDefinitions", {
        /**
         * Gets the roleDefinitions property value. The Role Definitions.
         * @returns a roleDefinition
         */
        get: function () {
            return this._roleDefinitions;
        },
        /**
         * Sets the roleDefinitions property value. The Role Definitions.
         * @param value Value to set for the roleDefinitions property.
         */
        set: function (value) {
            this._roleDefinitions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "settings", {
        /**
         * Gets the settings property value. Account level settings.
         * @returns a deviceManagementSettings
         */
        get: function () {
            return this._settings;
        },
        /**
         * Sets the settings property value. Account level settings.
         * @param value Value to set for the settings property.
         */
        set: function (value) {
            this._settings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "softwareUpdateStatusSummary", {
        /**
         * Gets the softwareUpdateStatusSummary property value. The software update status summary.
         * @returns a softwareUpdateStatusSummary
         */
        get: function () {
            return this._softwareUpdateStatusSummary;
        },
        /**
         * Sets the softwareUpdateStatusSummary property value. The software update status summary.
         * @param value Value to set for the softwareUpdateStatusSummary property.
         */
        set: function (value) {
            this._softwareUpdateStatusSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "subscriptionState", {
        /**
         * Gets the subscriptionState property value. Tenant mobile device management subscription state. Possible values are: pending, active, warning, disabled, deleted, blocked, lockedOut.
         * @returns a deviceManagementSubscriptionState
         */
        get: function () {
            return this._subscriptionState;
        },
        /**
         * Sets the subscriptionState property value. Tenant mobile device management subscription state. Possible values are: pending, active, warning, disabled, deleted, blocked, lockedOut.
         * @param value Value to set for the subscriptionState property.
         */
        set: function (value) {
            this._subscriptionState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "telecomExpenseManagementPartners", {
        /**
         * Gets the telecomExpenseManagementPartners property value. The telecom expense management partners.
         * @returns a telecomExpenseManagementPartner
         */
        get: function () {
            return this._telecomExpenseManagementPartners;
        },
        /**
         * Sets the telecomExpenseManagementPartners property value. The telecom expense management partners.
         * @param value Value to set for the telecomExpenseManagementPartners property.
         */
        set: function (value) {
            this._telecomExpenseManagementPartners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "termsAndConditions", {
        /**
         * Gets the termsAndConditions property value. The terms and conditions associated with device management of the company.
         * @returns a termsAndConditions
         */
        get: function () {
            return this._termsAndConditions;
        },
        /**
         * Sets the termsAndConditions property value. The terms and conditions associated with device management of the company.
         * @param value Value to set for the termsAndConditions property.
         */
        set: function (value) {
            this._termsAndConditions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "troubleshootingEvents", {
        /**
         * Gets the troubleshootingEvents property value. The list of troubleshooting events for the tenant.
         * @returns a deviceManagementTroubleshootingEvent
         */
        get: function () {
            return this._troubleshootingEvents;
        },
        /**
         * Sets the troubleshootingEvents property value. The list of troubleshooting events for the tenant.
         * @param value Value to set for the troubleshootingEvents property.
         */
        set: function (value) {
            this._troubleshootingEvents = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "windowsAutopilotDeviceIdentities", {
        /**
         * Gets the windowsAutopilotDeviceIdentities property value. The Windows autopilot device identities contained collection.
         * @returns a windowsAutopilotDeviceIdentity
         */
        get: function () {
            return this._windowsAutopilotDeviceIdentities;
        },
        /**
         * Sets the windowsAutopilotDeviceIdentities property value. The Windows autopilot device identities contained collection.
         * @param value Value to set for the windowsAutopilotDeviceIdentities property.
         */
        set: function (value) {
            this._windowsAutopilotDeviceIdentities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "windowsInformationProtectionAppLearningSummaries", {
        /**
         * Gets the windowsInformationProtectionAppLearningSummaries property value. The windows information protection app learning summaries.
         * @returns a windowsInformationProtectionAppLearningSummary
         */
        get: function () {
            return this._windowsInformationProtectionAppLearningSummaries;
        },
        /**
         * Sets the windowsInformationProtectionAppLearningSummaries property value. The windows information protection app learning summaries.
         * @param value Value to set for the windowsInformationProtectionAppLearningSummaries property.
         */
        set: function (value) {
            this._windowsInformationProtectionAppLearningSummaries = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagement.prototype, "windowsInformationProtectionNetworkLearningSummaries", {
        /**
         * Gets the windowsInformationProtectionNetworkLearningSummaries property value. The windows information protection network learning summaries.
         * @returns a windowsInformationProtectionNetworkLearningSummary
         */
        get: function () {
            return this._windowsInformationProtectionNetworkLearningSummaries;
        },
        /**
         * Sets the windowsInformationProtectionNetworkLearningSummaries property value. The windows information protection network learning summaries.
         * @param value Value to set for the windowsInformationProtectionNetworkLearningSummaries property.
         */
        set: function (value) {
            this._windowsInformationProtectionNetworkLearningSummaries = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceManagement.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["applePushNotificationCertificate", function (o, n) { o.applePushNotificationCertificate = n.getObjectValue(applePushNotificationCertificate_1.ApplePushNotificationCertificate); }],
            ["complianceManagementPartners", function (o, n) { o.complianceManagementPartners = n.getCollectionOfObjectValues(complianceManagementPartner_1.ComplianceManagementPartner); }],
            ["conditionalAccessSettings", function (o, n) { o.conditionalAccessSettings = n.getObjectValue(onPremisesConditionalAccessSettings_1.OnPremisesConditionalAccessSettings); }],
            ["detectedApps", function (o, n) { o.detectedApps = n.getCollectionOfObjectValues(detectedApp_1.DetectedApp); }],
            ["deviceCategories", function (o, n) { o.deviceCategories = n.getCollectionOfObjectValues(deviceCategory_1.DeviceCategory); }],
            ["deviceCompliancePolicies", function (o, n) { o.deviceCompliancePolicies = n.getCollectionOfObjectValues(deviceCompliancePolicy_1.DeviceCompliancePolicy); }],
            ["deviceCompliancePolicyDeviceStateSummary", function (o, n) { o.deviceCompliancePolicyDeviceStateSummary = n.getObjectValue(deviceCompliancePolicyDeviceStateSummary_1.DeviceCompliancePolicyDeviceStateSummary); }],
            ["deviceCompliancePolicySettingStateSummaries", function (o, n) { o.deviceCompliancePolicySettingStateSummaries = n.getCollectionOfObjectValues(deviceCompliancePolicySettingStateSummary_1.DeviceCompliancePolicySettingStateSummary); }],
            ["deviceConfigurationDeviceStateSummaries", function (o, n) { o.deviceConfigurationDeviceStateSummaries = n.getObjectValue(deviceConfigurationDeviceStateSummary_1.DeviceConfigurationDeviceStateSummary); }],
            ["deviceConfigurations", function (o, n) { o.deviceConfigurations = n.getCollectionOfObjectValues(deviceConfiguration_1.DeviceConfiguration); }],
            ["deviceEnrollmentConfigurations", function (o, n) { o.deviceEnrollmentConfigurations = n.getCollectionOfObjectValues(deviceEnrollmentConfiguration_1.DeviceEnrollmentConfiguration); }],
            ["deviceManagementPartners", function (o, n) { o.deviceManagementPartners = n.getCollectionOfObjectValues(deviceManagementPartner_1.DeviceManagementPartner); }],
            ["exchangeConnectors", function (o, n) { o.exchangeConnectors = n.getCollectionOfObjectValues(deviceManagementExchangeConnector_1.DeviceManagementExchangeConnector); }],
            ["importedWindowsAutopilotDeviceIdentities", function (o, n) { o.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues(importedWindowsAutopilotDeviceIdentity_1.ImportedWindowsAutopilotDeviceIdentity); }],
            ["intuneAccountId", function (o, n) { o.intuneAccountId = n.getStringValue(); }],
            ["intuneBrand", function (o, n) { o.intuneBrand = n.getObjectValue(IntuneBrand); }],
            ["iosUpdateStatuses", function (o, n) { o.iosUpdateStatuses = n.getCollectionOfObjectValues(iosUpdateDeviceStatus_1.IosUpdateDeviceStatus); }],
            ["managedDeviceOverview", function (o, n) { o.managedDeviceOverview = n.getObjectValue(managedDeviceOverview_1.ManagedDeviceOverview); }],
            ["managedDevices", function (o, n) { o.managedDevices = n.getCollectionOfObjectValues(managedDevice_1.ManagedDevice); }],
            ["mobileThreatDefenseConnectors", function (o, n) { o.mobileThreatDefenseConnectors = n.getCollectionOfObjectValues(mobileThreatDefenseConnector_1.MobileThreatDefenseConnector); }],
            ["notificationMessageTemplates", function (o, n) { o.notificationMessageTemplates = n.getCollectionOfObjectValues(notificationMessageTemplate_1.NotificationMessageTemplate); }],
            ["remoteAssistancePartners", function (o, n) { o.remoteAssistancePartners = n.getCollectionOfObjectValues(remoteAssistancePartner_1.RemoteAssistancePartner); }],
            ["resourceOperations", function (o, n) { o.resourceOperations = n.getCollectionOfObjectValues(resourceOperation_1.ResourceOperation); }],
            ["roleAssignments", function (o, n) { o.roleAssignments = n.getCollectionOfObjectValues(deviceAndAppManagementRoleAssignment_1.DeviceAndAppManagementRoleAssignment); }],
            ["roleDefinitions", function (o, n) { o.roleDefinitions = n.getCollectionOfObjectValues(roleDefinition_1.RoleDefinition); }],
            ["settings", function (o, n) { o.settings = n.getObjectValue(DeviceManagementSettings); }],
            ["softwareUpdateStatusSummary", function (o, n) { o.softwareUpdateStatusSummary = n.getObjectValue(softwareUpdateStatusSummary_1.SoftwareUpdateStatusSummary); }],
            ["subscriptionState", function (o, n) { o.subscriptionState = n.getObjectValue(DeviceManagementSubscriptionState); }],
            ["telecomExpenseManagementPartners", function (o, n) { o.telecomExpenseManagementPartners = n.getCollectionOfObjectValues(telecomExpenseManagementPartner_1.TelecomExpenseManagementPartner); }],
            ["termsAndConditions", function (o, n) { o.termsAndConditions = n.getCollectionOfObjectValues(termsAndConditions_1.TermsAndConditions); }],
            ["troubleshootingEvents", function (o, n) { o.troubleshootingEvents = n.getCollectionOfObjectValues(deviceManagementTroubleshootingEvent_1.DeviceManagementTroubleshootingEvent); }],
            ["windowsAutopilotDeviceIdentities", function (o, n) { o.windowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues(windowsAutopilotDeviceIdentity_1.WindowsAutopilotDeviceIdentity); }],
            ["windowsInformationProtectionAppLearningSummaries", function (o, n) { o.windowsInformationProtectionAppLearningSummaries = n.getCollectionOfObjectValues(windowsInformationProtectionAppLearningSummary_1.WindowsInformationProtectionAppLearningSummary); }],
            ["windowsInformationProtectionNetworkLearningSummaries", function (o, n) { o.windowsInformationProtectionNetworkLearningSummaries = n.getCollectionOfObjectValues(windowsInformationProtectionNetworkLearningSummary_1.WindowsInformationProtectionNetworkLearningSummary); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceManagement.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("applePushNotificationCertificate", this.applePushNotificationCertificate);
        writer.writeCollectionOfObjectValues("complianceManagementPartners", this.complianceManagementPartners);
        writer.writeObjectValue("conditionalAccessSettings", this.conditionalAccessSettings);
        writer.writeCollectionOfObjectValues("detectedApps", this.detectedApps);
        writer.writeCollectionOfObjectValues("deviceCategories", this.deviceCategories);
        writer.writeCollectionOfObjectValues("deviceCompliancePolicies", this.deviceCompliancePolicies);
        writer.writeObjectValue("deviceCompliancePolicyDeviceStateSummary", this.deviceCompliancePolicyDeviceStateSummary);
        writer.writeCollectionOfObjectValues("deviceCompliancePolicySettingStateSummaries", this.deviceCompliancePolicySettingStateSummaries);
        writer.writeObjectValue("deviceConfigurationDeviceStateSummaries", this.deviceConfigurationDeviceStateSummaries);
        writer.writeCollectionOfObjectValues("deviceConfigurations", this.deviceConfigurations);
        writer.writeCollectionOfObjectValues("deviceEnrollmentConfigurations", this.deviceEnrollmentConfigurations);
        writer.writeCollectionOfObjectValues("deviceManagementPartners", this.deviceManagementPartners);
        writer.writeCollectionOfObjectValues("exchangeConnectors", this.exchangeConnectors);
        writer.writeCollectionOfObjectValues("importedWindowsAutopilotDeviceIdentities", this.importedWindowsAutopilotDeviceIdentities);
        writer.writeStringValue("intuneAccountId", this.intuneAccountId);
        writer.writeObjectValue("intuneBrand", this.intuneBrand);
        writer.writeCollectionOfObjectValues("iosUpdateStatuses", this.iosUpdateStatuses);
        writer.writeObjectValue("managedDeviceOverview", this.managedDeviceOverview);
        writer.writeCollectionOfObjectValues("managedDevices", this.managedDevices);
        writer.writeCollectionOfObjectValues("mobileThreatDefenseConnectors", this.mobileThreatDefenseConnectors);
        writer.writeCollectionOfObjectValues("notificationMessageTemplates", this.notificationMessageTemplates);
        writer.writeCollectionOfObjectValues("remoteAssistancePartners", this.remoteAssistancePartners);
        writer.writeCollectionOfObjectValues("resourceOperations", this.resourceOperations);
        writer.writeCollectionOfObjectValues("roleAssignments", this.roleAssignments);
        writer.writeCollectionOfObjectValues("roleDefinitions", this.roleDefinitions);
        writer.writeObjectValue("settings", this.settings);
        writer.writeObjectValue("softwareUpdateStatusSummary", this.softwareUpdateStatusSummary);
        writer.writeObjectValue("subscriptionState", this.subscriptionState);
        writer.writeCollectionOfObjectValues("telecomExpenseManagementPartners", this.telecomExpenseManagementPartners);
        writer.writeCollectionOfObjectValues("termsAndConditions", this.termsAndConditions);
        writer.writeCollectionOfObjectValues("troubleshootingEvents", this.troubleshootingEvents);
        writer.writeCollectionOfObjectValues("windowsAutopilotDeviceIdentities", this.windowsAutopilotDeviceIdentities);
        writer.writeCollectionOfObjectValues("windowsInformationProtectionAppLearningSummaries", this.windowsInformationProtectionAppLearningSummaries);
        writer.writeCollectionOfObjectValues("windowsInformationProtectionNetworkLearningSummaries", this.windowsInformationProtectionNetworkLearningSummaries);
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
    return DeviceManagement;
}(entity_1.Entity));
exports.DeviceManagement = DeviceManagement;
