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
exports.DeviceAppManagementRequestBuilder = void 0;
var androidManagedAppProtectionsRequestBuilder_1 = require("./androidManagedAppProtections/androidManagedAppProtectionsRequestBuilder");
var androidManagedAppProtectionRequestBuilder_1 = require("./androidManagedAppProtections/item/androidManagedAppProtectionRequestBuilder");
var defaultManagedAppProtectionsRequestBuilder_1 = require("./defaultManagedAppProtections/defaultManagedAppProtectionsRequestBuilder");
var defaultManagedAppProtectionRequestBuilder_1 = require("./defaultManagedAppProtections/item/defaultManagedAppProtectionRequestBuilder");
var deviceAppManagement_1 = require("./deviceAppManagement");
var iosManagedAppProtectionsRequestBuilder_1 = require("./iosManagedAppProtections/iosManagedAppProtectionsRequestBuilder");
var iosManagedAppProtectionRequestBuilder_1 = require("./iosManagedAppProtections/item/iosManagedAppProtectionRequestBuilder");
var managedAppPolicyRequestBuilder_1 = require("./managedAppPolicies/item/managedAppPolicyRequestBuilder");
var managedAppPoliciesRequestBuilder_1 = require("./managedAppPolicies/managedAppPoliciesRequestBuilder");
var managedAppRegistrationRequestBuilder_1 = require("./managedAppRegistrations/item/managedAppRegistrationRequestBuilder");
var managedAppRegistrationsRequestBuilder_1 = require("./managedAppRegistrations/managedAppRegistrationsRequestBuilder");
var managedAppStatusRequestBuilder_1 = require("./managedAppStatuses/item/managedAppStatusRequestBuilder");
var managedAppStatusesRequestBuilder_1 = require("./managedAppStatuses/managedAppStatusesRequestBuilder");
var managedEBookRequestBuilder_1 = require("./managedEBooks/item/managedEBookRequestBuilder");
var managedEBooksRequestBuilder_1 = require("./managedEBooks/managedEBooksRequestBuilder");
var mdmWindowsInformationProtectionPolicyRequestBuilder_1 = require("./mdmWindowsInformationProtectionPolicies/item/mdmWindowsInformationProtectionPolicyRequestBuilder");
var mdmWindowsInformationProtectionPoliciesRequestBuilder_1 = require("./mdmWindowsInformationProtectionPolicies/mdmWindowsInformationProtectionPoliciesRequestBuilder");
var microsoft_graph_syncMicrosoftStoreForBusinessAppsRequestBuilder_1 = require("./microsoft/graph/syncMicrosoftStoreForBusinessApps/microsoft.graph.syncMicrosoftStoreForBusinessAppsRequestBuilder");
var mobileAppCategoryRequestBuilder_1 = require("./mobileAppCategories/item/mobileAppCategoryRequestBuilder");
var mobileAppCategoriesRequestBuilder_1 = require("./mobileAppCategories/mobileAppCategoriesRequestBuilder");
var managedDeviceMobileAppConfigurationRequestBuilder_1 = require("./mobileAppConfigurations/item/managedDeviceMobileAppConfigurationRequestBuilder");
var mobileAppConfigurationsRequestBuilder_1 = require("./mobileAppConfigurations/mobileAppConfigurationsRequestBuilder");
var mobileAppRequestBuilder_1 = require("./mobileApps/item/mobileAppRequestBuilder");
var mobileAppsRequestBuilder_1 = require("./mobileApps/mobileAppsRequestBuilder");
var targetedManagedAppConfigurationRequestBuilder_1 = require("./targetedManagedAppConfigurations/item/targetedManagedAppConfigurationRequestBuilder");
var targetedManagedAppConfigurationsRequestBuilder_1 = require("./targetedManagedAppConfigurations/targetedManagedAppConfigurationsRequestBuilder");
var vppTokenRequestBuilder_1 = require("./vppTokens/item/vppTokenRequestBuilder");
var vppTokensRequestBuilder_1 = require("./vppTokens/vppTokensRequestBuilder");
var windowsInformationProtectionPolicyRequestBuilder_1 = require("./windowsInformationProtectionPolicies/item/windowsInformationProtectionPolicyRequestBuilder");
var windowsInformationProtectionPoliciesRequestBuilder_1 = require("./windowsInformationProtectionPolicies/windowsInformationProtectionPoliciesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /deviceAppManagement  */
var DeviceAppManagementRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new DeviceAppManagementRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function DeviceAppManagementRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/deviceAppManagement";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "androidManagedAppProtections", {
        get: function () {
            return new androidManagedAppProtectionsRequestBuilder_1.AndroidManagedAppProtectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "defaultManagedAppProtections", {
        get: function () {
            return new defaultManagedAppProtectionsRequestBuilder_1.DefaultManagedAppProtectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "iosManagedAppProtections", {
        get: function () {
            return new iosManagedAppProtectionsRequestBuilder_1.IosManagedAppProtectionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "managedAppPolicies", {
        get: function () {
            return new managedAppPoliciesRequestBuilder_1.ManagedAppPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "managedAppRegistrations", {
        get: function () {
            return new managedAppRegistrationsRequestBuilder_1.ManagedAppRegistrationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "managedAppStatuses", {
        get: function () {
            return new managedAppStatusesRequestBuilder_1.ManagedAppStatusesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "managedEBooks", {
        get: function () {
            return new managedEBooksRequestBuilder_1.ManagedEBooksRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "mdmWindowsInformationProtectionPolicies", {
        get: function () {
            return new mdmWindowsInformationProtectionPoliciesRequestBuilder_1.MdmWindowsInformationProtectionPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    DeviceAppManagementRequestBuilder.prototype.syncMicrosoftStoreForBusinessApps = function () {
        return new microsoft_graph_syncMicrosoftStoreForBusinessAppsRequestBuilder_1.Microsoft.graph.syncMicrosoftStoreForBusinessAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "mobileAppCategories", {
        get: function () {
            return new mobileAppCategoriesRequestBuilder_1.MobileAppCategoriesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "mobileAppConfigurations", {
        get: function () {
            return new mobileAppConfigurationsRequestBuilder_1.MobileAppConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "mobileApps", {
        get: function () {
            return new mobileAppsRequestBuilder_1.MobileAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "targetedManagedAppConfigurations", {
        get: function () {
            return new targetedManagedAppConfigurationsRequestBuilder_1.TargetedManagedAppConfigurationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "vppTokens", {
        get: function () {
            return new vppTokensRequestBuilder_1.VppTokensRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceAppManagementRequestBuilder.prototype, "windowsInformationProtectionPolicies", {
        get: function () {
            return new windowsInformationProtectionPoliciesRequestBuilder_1.WindowsInformationProtectionPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.androidManagedAppProtections collection
     * @param id Unique identifier of the item
     * @returns a AndroidManagedAppProtectionRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.androidManagedAppProtectionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new androidManagedAppProtectionRequestBuilder_1.AndroidManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment + "/androidManagedAppProtections/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get deviceAppManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    DeviceAppManagementRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update deviceAppManagement
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    DeviceAppManagementRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Gets an item from the MicrosoftGraph.deviceAppManagement.defaultManagedAppProtections collection
     * @param id Unique identifier of the item
     * @returns a DefaultManagedAppProtectionRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.defaultManagedAppProtectionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new defaultManagedAppProtectionRequestBuilder_1.DefaultManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment + "/defaultManagedAppProtections/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get deviceAppManagement
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceAppManagement
     */
    DeviceAppManagementRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, deviceAppManagement_1.DeviceAppManagement, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.iosManagedAppProtections collection
     * @param id Unique identifier of the item
     * @returns a IosManagedAppProtectionRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.iosManagedAppProtectionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new iosManagedAppProtectionRequestBuilder_1.IosManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment + "/iosManagedAppProtections/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppPolicies collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.managedAppPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedAppPolicyRequestBuilder_1.ManagedAppPolicyRequestBuilder(this.currentPath + this.pathSegment + "/managedAppPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppRegistrationRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.managedAppRegistrationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedAppRegistrationRequestBuilder_1.ManagedAppRegistrationRequestBuilder(this.currentPath + this.pathSegment + "/managedAppRegistrations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppStatuses collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppStatusRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.managedAppStatusesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedAppStatusRequestBuilder_1.ManagedAppStatusRequestBuilder(this.currentPath + this.pathSegment + "/managedAppStatuses/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedEBooks collection
     * @param id Unique identifier of the item
     * @returns a ManagedEBookRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.managedEBooksById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedEBookRequestBuilder_1.ManagedEBookRequestBuilder(this.currentPath + this.pathSegment + "/managedEBooks/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mdmWindowsInformationProtectionPolicies collection
     * @param id Unique identifier of the item
     * @returns a MdmWindowsInformationProtectionPolicyRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.mdmWindowsInformationProtectionPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new mdmWindowsInformationProtectionPolicyRequestBuilder_1.MdmWindowsInformationProtectionPolicyRequestBuilder(this.currentPath + this.pathSegment + "/mdmWindowsInformationProtectionPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppCategories collection
     * @param id Unique identifier of the item
     * @returns a MobileAppCategoryRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.mobileAppCategoriesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new mobileAppCategoryRequestBuilder_1.MobileAppCategoryRequestBuilder(this.currentPath + this.pathSegment + "/mobileAppCategories/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileAppConfigurations collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceMobileAppConfigurationRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.mobileAppConfigurationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedDeviceMobileAppConfigurationRequestBuilder_1.ManagedDeviceMobileAppConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/mobileAppConfigurations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.mobileApps collection
     * @param id Unique identifier of the item
     * @returns a MobileAppRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.mobileAppsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new mobileAppRequestBuilder_1.MobileAppRequestBuilder(this.currentPath + this.pathSegment + "/mobileApps/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update deviceAppManagement
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    DeviceAppManagementRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.targetedManagedAppConfigurations collection
     * @param id Unique identifier of the item
     * @returns a TargetedManagedAppConfigurationRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.targetedManagedAppConfigurationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new targetedManagedAppConfigurationRequestBuilder_1.TargetedManagedAppConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/targetedManagedAppConfigurations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.vppTokens collection
     * @param id Unique identifier of the item
     * @returns a VppTokenRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.vppTokensById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new vppTokenRequestBuilder_1.VppTokenRequestBuilder(this.currentPath + this.pathSegment + "/vppTokens/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.windowsInformationProtectionPolicies collection
     * @param id Unique identifier of the item
     * @returns a WindowsInformationProtectionPolicyRequestBuilder
     */
    DeviceAppManagementRequestBuilder.prototype.windowsInformationProtectionPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new windowsInformationProtectionPolicyRequestBuilder_1.WindowsInformationProtectionPolicyRequestBuilder(this.currentPath + this.pathSegment + "/windowsInformationProtectionPolicies/" + id, this.httpCore, false);
    };
    ;
    return DeviceAppManagementRequestBuilder;
}());
exports.DeviceAppManagementRequestBuilder = DeviceAppManagementRequestBuilder;
