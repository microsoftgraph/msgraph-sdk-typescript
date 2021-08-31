"use strict";
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
exports.DeviceManagementRequestBuilder = void 0;
var applePushNotificationCertificateRequestBuilder_1 = require("./applePushNotificationCertificate/applePushNotificationCertificateRequestBuilder");
var complianceManagementPartnersRequestBuilder_1 = require("./complianceManagementPartners/complianceManagementPartnersRequestBuilder");
var complianceManagementPartnerRequestBuilder_1 = require("./complianceManagementPartners/item/complianceManagementPartnerRequestBuilder");
var conditionalAccessSettingsRequestBuilder_1 = require("./conditionalAccessSettings/conditionalAccessSettingsRequestBuilder");
var detectedAppsRequestBuilder_1 = require("./detectedApps/detectedAppsRequestBuilder");
var detectedAppRequestBuilder_1 = require("./detectedApps/item/detectedAppRequestBuilder");
var deviceCategoriesRequestBuilder_1 = require("./deviceCategories/deviceCategoriesRequestBuilder");
var deviceCategoryRequestBuilder_1 = require("./deviceCategories/item/deviceCategoryRequestBuilder");
var deviceCompliancePoliciesRequestBuilder_1 = require("./deviceCompliancePolicies/deviceCompliancePoliciesRequestBuilder");
var deviceCompliancePolicyRequestBuilder_1 = require("./deviceCompliancePolicies/item/deviceCompliancePolicyRequestBuilder");
var deviceCompliancePolicyDeviceStateSummaryRequestBuilder_1 = require("./deviceCompliancePolicyDeviceStateSummary/deviceCompliancePolicyDeviceStateSummaryRequestBuilder");
var deviceCompliancePolicySettingStateSummariesRequestBuilder_1 = require("./deviceCompliancePolicySettingStateSummaries/deviceCompliancePolicySettingStateSummariesRequestBuilder");
var deviceCompliancePolicySettingStateSummaryRequestBuilder_1 = require("./deviceCompliancePolicySettingStateSummaries/item/deviceCompliancePolicySettingStateSummaryRequestBuilder");
var deviceConfigurationDeviceStateSummariesRequestBuilder_1 = require("./deviceConfigurationDeviceStateSummaries/deviceConfigurationDeviceStateSummariesRequestBuilder");
var deviceConfigurationsRequestBuilder_1 = require("./deviceConfigurations/deviceConfigurationsRequestBuilder");
var deviceConfigurationRequestBuilder_1 = require("./deviceConfigurations/item/deviceConfigurationRequestBuilder");
var deviceEnrollmentConfigurationsRequestBuilder_1 = require("./deviceEnrollmentConfigurations/deviceEnrollmentConfigurationsRequestBuilder");
var deviceEnrollmentConfigurationRequestBuilder_1 = require("./deviceEnrollmentConfigurations/item/deviceEnrollmentConfigurationRequestBuilder");
var deviceManagement_1 = require("./deviceManagement");
var deviceManagementPartnersRequestBuilder_1 = require("./deviceManagementPartners/deviceManagementPartnersRequestBuilder");
var deviceManagementPartnerRequestBuilder_1 = require("./deviceManagementPartners/item/deviceManagementPartnerRequestBuilder");
var exchangeConnectorsRequestBuilder_1 = require("./exchangeConnectors/exchangeConnectorsRequestBuilder");
var deviceManagementExchangeConnectorRequestBuilder_1 = require("./exchangeConnectors/item/deviceManagementExchangeConnectorRequestBuilder");
var importedWindowsAutopilotDeviceIdentitiesRequestBuilder_1 = require("./importedWindowsAutopilotDeviceIdentities/importedWindowsAutopilotDeviceIdentitiesRequestBuilder");
var importedWindowsAutopilotDeviceIdentityRequestBuilder_1 = require("./importedWindowsAutopilotDeviceIdentities/item/importedWindowsAutopilotDeviceIdentityRequestBuilder");
var iosUpdateStatusesRequestBuilder_1 = require("./iosUpdateStatuses/iosUpdateStatusesRequestBuilder");
var iosUpdateDeviceStatusRequestBuilder_1 = require("./iosUpdateStatuses/item/iosUpdateDeviceStatusRequestBuilder");
var managedDeviceOverviewRequestBuilder_1 = require("./managedDeviceOverview/managedDeviceOverviewRequestBuilder");
var managedDeviceRequestBuilder_1 = require("./managedDevices/item/managedDeviceRequestBuilder");
var managedDevicesRequestBuilder_1 = require("./managedDevices/managedDevicesRequestBuilder");
var mobileThreatDefenseConnectorRequestBuilder_1 = require("./mobileThreatDefenseConnectors/item/mobileThreatDefenseConnectorRequestBuilder");
var mobileThreatDefenseConnectorsRequestBuilder_1 = require("./mobileThreatDefenseConnectors/mobileThreatDefenseConnectorsRequestBuilder");
var notificationMessageTemplateRequestBuilder_1 = require("./notificationMessageTemplates/item/notificationMessageTemplateRequestBuilder");
var notificationMessageTemplatesRequestBuilder_1 = require("./notificationMessageTemplates/notificationMessageTemplatesRequestBuilder");
var remoteAssistancePartnerRequestBuilder_1 = require("./remoteAssistancePartners/item/remoteAssistancePartnerRequestBuilder");
var remoteAssistancePartnersRequestBuilder_1 = require("./remoteAssistancePartners/remoteAssistancePartnersRequestBuilder");
var resourceOperationRequestBuilder_1 = require("./resourceOperations/item/resourceOperationRequestBuilder");
var resourceOperationsRequestBuilder_1 = require("./resourceOperations/resourceOperationsRequestBuilder");
var deviceAndAppManagementRoleAssignmentRequestBuilder_1 = require("./roleAssignments/item/deviceAndAppManagementRoleAssignmentRequestBuilder");
var roleAssignmentsRequestBuilder_1 = require("./roleAssignments/roleAssignmentsRequestBuilder");
var roleDefinitionRequestBuilder_1 = require("./roleDefinitions/item/roleDefinitionRequestBuilder");
var roleDefinitionsRequestBuilder_1 = require("./roleDefinitions/roleDefinitionsRequestBuilder");
var softwareUpdateStatusSummaryRequestBuilder_1 = require("./softwareUpdateStatusSummary/softwareUpdateStatusSummaryRequestBuilder");
var telecomExpenseManagementPartnerRequestBuilder_1 = require("./telecomExpenseManagementPartners/item/telecomExpenseManagementPartnerRequestBuilder");
var telecomExpenseManagementPartnersRequestBuilder_1 = require("./telecomExpenseManagementPartners/telecomExpenseManagementPartnersRequestBuilder");
var termsAndConditionsRequestBuilder_1 = require("./termsAndConditions/termsAndConditionsRequestBuilder");
var deviceManagementTroubleshootingEventRequestBuilder_1 = require("./troubleshootingEvents/item/deviceManagementTroubleshootingEventRequestBuilder");
var troubleshootingEventsRequestBuilder_1 = require("./troubleshootingEvents/troubleshootingEventsRequestBuilder");
var windowsAutopilotDeviceIdentityRequestBuilder_1 = require("./windowsAutopilotDeviceIdentities/item/windowsAutopilotDeviceIdentityRequestBuilder");
var windowsAutopilotDeviceIdentitiesRequestBuilder_1 = require("./windowsAutopilotDeviceIdentities/windowsAutopilotDeviceIdentitiesRequestBuilder");
var windowsInformationProtectionAppLearningSummaryRequestBuilder_1 = require("./windowsInformationProtectionAppLearningSummaries/item/windowsInformationProtectionAppLearningSummaryRequestBuilder");
var windowsInformationProtectionAppLearningSummariesRequestBuilder_1 = require("./windowsInformationProtectionAppLearningSummaries/windowsInformationProtectionAppLearningSummariesRequestBuilder");
var windowsInformationProtectionNetworkLearningSummaryRequestBuilder_1 = require("./windowsInformationProtectionNetworkLearningSummaries/item/windowsInformationProtectionNetworkLearningSummaryRequestBuilder");
var windowsInformationProtectionNetworkLearningSummariesRequestBuilder_1 = require("./windowsInformationProtectionNetworkLearningSummaries/windowsInformationProtectionNetworkLearningSummariesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /deviceManagement  */
var DeviceManagementRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new DeviceManagementRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function DeviceManagementRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/deviceManagement";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "applePushNotificationCertificate", {
        get: function () {
            return new applePushNotificationCertificateRequestBuilder_1.ApplePushNotificationCertificateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "complianceManagementPartners", {
        get: function () {
            return new complianceManagementPartnersRequestBuilder_1.ComplianceManagementPartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "conditionalAccessSettings", {
        get: function () {
            return new conditionalAccessSettingsRequestBuilder_1.ConditionalAccessSettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "detectedApps", {
        get: function () {
            return new detectedAppsRequestBuilder_1.DetectedAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceCategories", {
        get: function () {
            return new deviceCategoriesRequestBuilder_1.DeviceCategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceCompliancePolicies", {
        get: function () {
            return new deviceCompliancePoliciesRequestBuilder_1.DeviceCompliancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceCompliancePolicyDeviceStateSummary", {
        get: function () {
            return new deviceCompliancePolicyDeviceStateSummaryRequestBuilder_1.DeviceCompliancePolicyDeviceStateSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceCompliancePolicySettingStateSummaries", {
        get: function () {
            return new deviceCompliancePolicySettingStateSummariesRequestBuilder_1.DeviceCompliancePolicySettingStateSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceConfigurationDeviceStateSummaries", {
        get: function () {
            return new deviceConfigurationDeviceStateSummariesRequestBuilder_1.DeviceConfigurationDeviceStateSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceConfigurations", {
        get: function () {
            return new deviceConfigurationsRequestBuilder_1.DeviceConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceEnrollmentConfigurations", {
        get: function () {
            return new deviceEnrollmentConfigurationsRequestBuilder_1.DeviceEnrollmentConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "deviceManagementPartners", {
        get: function () {
            return new deviceManagementPartnersRequestBuilder_1.DeviceManagementPartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "exchangeConnectors", {
        get: function () {
            return new exchangeConnectorsRequestBuilder_1.ExchangeConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "importedWindowsAutopilotDeviceIdentities", {
        get: function () {
            return new importedWindowsAutopilotDeviceIdentitiesRequestBuilder_1.ImportedWindowsAutopilotDeviceIdentitiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "iosUpdateStatuses", {
        get: function () {
            return new iosUpdateStatusesRequestBuilder_1.IosUpdateStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "managedDeviceOverview", {
        get: function () {
            return new managedDeviceOverviewRequestBuilder_1.ManagedDeviceOverviewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "managedDevices", {
        get: function () {
            return new managedDevicesRequestBuilder_1.ManagedDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "mobileThreatDefenseConnectors", {
        get: function () {
            return new mobileThreatDefenseConnectorsRequestBuilder_1.MobileThreatDefenseConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "notificationMessageTemplates", {
        get: function () {
            return new notificationMessageTemplatesRequestBuilder_1.NotificationMessageTemplatesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "remoteAssistancePartners", {
        get: function () {
            return new remoteAssistancePartnersRequestBuilder_1.RemoteAssistancePartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "resourceOperations", {
        get: function () {
            return new resourceOperationsRequestBuilder_1.ResourceOperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "roleAssignments", {
        get: function () {
            return new roleAssignmentsRequestBuilder_1.RoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "roleDefinitions", {
        get: function () {
            return new roleDefinitionsRequestBuilder_1.RoleDefinitionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "softwareUpdateStatusSummary", {
        get: function () {
            return new softwareUpdateStatusSummaryRequestBuilder_1.SoftwareUpdateStatusSummaryRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "telecomExpenseManagementPartners", {
        get: function () {
            return new telecomExpenseManagementPartnersRequestBuilder_1.TelecomExpenseManagementPartnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "termsAndConditions", {
        get: function () {
            return new termsAndConditionsRequestBuilder_1.TermsAndConditionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "troubleshootingEvents", {
        get: function () {
            return new troubleshootingEventsRequestBuilder_1.TroubleshootingEventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "windowsAutopilotDeviceIdentities", {
        get: function () {
            return new windowsAutopilotDeviceIdentitiesRequestBuilder_1.WindowsAutopilotDeviceIdentitiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "windowsInformationProtectionAppLearningSummaries", {
        get: function () {
            return new windowsInformationProtectionAppLearningSummariesRequestBuilder_1.WindowsInformationProtectionAppLearningSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceManagementRequestBuilder.prototype, "windowsInformationProtectionNetworkLearningSummaries", {
        get: function () {
            return new windowsInformationProtectionNetworkLearningSummariesRequestBuilder_1.WindowsInformationProtectionNetworkLearningSummariesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.complianceManagementPartners collection
     * @param id Unique identifier of the item
     * @returns a ComplianceManagementPartnerRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.complianceManagementPartnersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new complianceManagementPartnerRequestBuilder_1.ComplianceManagementPartnerRequestBuilder(this.currentPath + this.pathSegment + "/complianceManagementPartners/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get deviceManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    DeviceManagementRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Update deviceManagement
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceManagementRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.detectedApps collection
     * @param id Unique identifier of the item
     * @returns a DetectedAppRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.detectedAppsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new detectedAppRequestBuilder_1.DetectedAppRequestBuilder(this.currentPath + this.pathSegment + "/detectedApps/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCategories collection
     * @param id Unique identifier of the item
     * @returns a DeviceCategoryRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.deviceCategoriesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceCategoryRequestBuilder_1.DeviceCategoryRequestBuilder(this.currentPath + this.pathSegment + "/deviceCategories/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicies collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicyRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.deviceCompliancePoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceCompliancePolicyRequestBuilder_1.DeviceCompliancePolicyRequestBuilder(this.currentPath + this.pathSegment + "/deviceCompliancePolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceCompliancePolicySettingStateSummaries collection
     * @param id Unique identifier of the item
     * @returns a DeviceCompliancePolicySettingStateSummaryRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.deviceCompliancePolicySettingStateSummariesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceCompliancePolicySettingStateSummaryRequestBuilder_1.DeviceCompliancePolicySettingStateSummaryRequestBuilder(this.currentPath + this.pathSegment + "/deviceCompliancePolicySettingStateSummaries/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceConfigurations collection
     * @param id Unique identifier of the item
     * @returns a DeviceConfigurationRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.deviceConfigurationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceConfigurationRequestBuilder_1.DeviceConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/deviceConfigurations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceEnrollmentConfigurations collection
     * @param id Unique identifier of the item
     * @returns a DeviceEnrollmentConfigurationRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.deviceEnrollmentConfigurationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceEnrollmentConfigurationRequestBuilder_1.DeviceEnrollmentConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/deviceEnrollmentConfigurations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.deviceManagementPartners collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementPartnerRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.deviceManagementPartnersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceManagementPartnerRequestBuilder_1.DeviceManagementPartnerRequestBuilder(this.currentPath + this.pathSegment + "/deviceManagementPartners/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.exchangeConnectors collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementExchangeConnectorRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.exchangeConnectorsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceManagementExchangeConnectorRequestBuilder_1.DeviceManagementExchangeConnectorRequestBuilder(this.currentPath + this.pathSegment + "/exchangeConnectors/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get deviceManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceManagement
     */
    DeviceManagementRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deviceManagement_1.DeviceManagement, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.importedWindowsAutopilotDeviceIdentities collection
     * @param id Unique identifier of the item
     * @returns a ImportedWindowsAutopilotDeviceIdentityRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.importedWindowsAutopilotDeviceIdentitiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new importedWindowsAutopilotDeviceIdentityRequestBuilder_1.ImportedWindowsAutopilotDeviceIdentityRequestBuilder(this.currentPath + this.pathSegment + "/importedWindowsAutopilotDeviceIdentities/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.iosUpdateStatuses collection
     * @param id Unique identifier of the item
     * @returns a IosUpdateDeviceStatusRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.iosUpdateStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new iosUpdateDeviceStatusRequestBuilder_1.IosUpdateDeviceStatusRequestBuilder(this.currentPath + this.pathSegment + "/iosUpdateStatuses/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.managedDevices collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.managedDevicesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedDeviceRequestBuilder_1.ManagedDeviceRequestBuilder(this.currentPath + this.pathSegment + "/managedDevices/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.mobileThreatDefenseConnectors collection
     * @param id Unique identifier of the item
     * @returns a MobileThreatDefenseConnectorRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.mobileThreatDefenseConnectorsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new mobileThreatDefenseConnectorRequestBuilder_1.MobileThreatDefenseConnectorRequestBuilder(this.currentPath + this.pathSegment + "/mobileThreatDefenseConnectors/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.notificationMessageTemplates collection
     * @param id Unique identifier of the item
     * @returns a NotificationMessageTemplateRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.notificationMessageTemplatesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new notificationMessageTemplateRequestBuilder_1.NotificationMessageTemplateRequestBuilder(this.currentPath + this.pathSegment + "/notificationMessageTemplates/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update deviceManagement
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceManagementRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.remoteAssistancePartners collection
     * @param id Unique identifier of the item
     * @returns a RemoteAssistancePartnerRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.remoteAssistancePartnersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new remoteAssistancePartnerRequestBuilder_1.RemoteAssistancePartnerRequestBuilder(this.currentPath + this.pathSegment + "/remoteAssistancePartners/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.resourceOperations collection
     * @param id Unique identifier of the item
     * @returns a ResourceOperationRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.resourceOperationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new resourceOperationRequestBuilder_1.ResourceOperationRequestBuilder(this.currentPath + this.pathSegment + "/resourceOperations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.roleAssignments collection
     * @param id Unique identifier of the item
     * @returns a DeviceAndAppManagementRoleAssignmentRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.roleAssignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceAndAppManagementRoleAssignmentRequestBuilder_1.DeviceAndAppManagementRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/roleAssignments/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.roleDefinitions collection
     * @param id Unique identifier of the item
     * @returns a RoleDefinitionRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.roleDefinitionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new roleDefinitionRequestBuilder_1.RoleDefinitionRequestBuilder(this.currentPath + this.pathSegment + "/roleDefinitions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.telecomExpenseManagementPartners collection
     * @param id Unique identifier of the item
     * @returns a TelecomExpenseManagementPartnerRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.telecomExpenseManagementPartnersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new telecomExpenseManagementPartnerRequestBuilder_1.TelecomExpenseManagementPartnerRequestBuilder(this.currentPath + this.pathSegment + "/telecomExpenseManagementPartners/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.termsAndConditions collection
     * @param id Unique identifier of the item
     * @returns a TermsAndConditionsRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.termsAndConditionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new termsAndConditionsRequestBuilder_1.TermsAndConditionsRequestBuilder(this.currentPath + this.pathSegment + "/termsAndConditions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.troubleshootingEvents collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementTroubleshootingEventRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.troubleshootingEventsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceManagementTroubleshootingEventRequestBuilder_1.DeviceManagementTroubleshootingEventRequestBuilder(this.currentPath + this.pathSegment + "/troubleshootingEvents/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsAutopilotDeviceIdentities collection
     * @param id Unique identifier of the item
     * @returns a WindowsAutopilotDeviceIdentityRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.windowsAutopilotDeviceIdentitiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new windowsAutopilotDeviceIdentityRequestBuilder_1.WindowsAutopilotDeviceIdentityRequestBuilder(this.currentPath + this.pathSegment + "/windowsAutopilotDeviceIdentities/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsInformationProtectionAppLearningSummaries collection
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionAppLearningSummaryRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.windowsInformationProtectionAppLearningSummariesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new windowsInformationProtectionAppLearningSummaryRequestBuilder_1.WindowsInformationProtectionAppLearningSummaryRequestBuilder(this.currentPath + this.pathSegment + "/windowsInformationProtectionAppLearningSummaries/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceManagement.windowsInformationProtectionNetworkLearningSummaries collection
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionNetworkLearningSummaryRequestBuilder
     */
    DeviceManagementRequestBuilder.prototype.windowsInformationProtectionNetworkLearningSummariesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new windowsInformationProtectionNetworkLearningSummaryRequestBuilder_1.WindowsInformationProtectionNetworkLearningSummaryRequestBuilder(this.currentPath + this.pathSegment + "/windowsInformationProtectionNetworkLearningSummaries/" + id, this.httpCore, false);
    };
    ;
    return DeviceManagementRequestBuilder;
}());
exports.DeviceManagementRequestBuilder = DeviceManagementRequestBuilder;
