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
exports.DeviceAppManagement = void 0;
var entity_1 = require("../entity");
var managedAppRegistration_1 = require("../managedAppRegistration");
var androidManagedAppProtection_1 = require("./androidManagedAppProtection");
var defaultManagedAppProtection_1 = require("./defaultManagedAppProtection");
var iosManagedAppProtection_1 = require("./iosManagedAppProtection");
var managedAppPolicy_1 = require("./managedAppPolicy");
var managedAppStatus_1 = require("./managedAppStatus");
var managedDeviceMobileAppConfiguration_1 = require("./managedDeviceMobileAppConfiguration");
var managedEBook_1 = require("./managedEBook");
var mdmWindowsInformationProtectionPolicy_1 = require("./mdmWindowsInformationProtectionPolicy");
var mobileApp_1 = require("./mobileApp");
var mobileAppCategory_1 = require("./mobileAppCategory");
var targetedManagedAppConfiguration_1 = require("./targetedManagedAppConfiguration");
var vppToken_1 = require("./vppToken");
var windowsInformationProtectionPolicy_1 = require("./windowsInformationProtectionPolicy");
var DeviceAppManagement = /** @class */ (function (_super) {
    __extends(DeviceAppManagement, _super);
    /**
     * Instantiates a new DeviceAppManagement and sets the default values.
     */
    function DeviceAppManagement() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "androidManagedAppProtections", {
        /**
         * Gets the androidManagedAppProtections property value. Android managed app policies.
         * @returns a androidManagedAppProtection
         */
        get: function () {
            return this._androidManagedAppProtections;
        },
        /**
         * Sets the androidManagedAppProtections property value. Android managed app policies.
         * @param value Value to set for the androidManagedAppProtections property.
         */
        set: function (value) {
            this._androidManagedAppProtections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "defaultManagedAppProtections", {
        /**
         * Gets the defaultManagedAppProtections property value. Default managed app policies.
         * @returns a defaultManagedAppProtection
         */
        get: function () {
            return this._defaultManagedAppProtections;
        },
        /**
         * Sets the defaultManagedAppProtections property value. Default managed app policies.
         * @param value Value to set for the defaultManagedAppProtections property.
         */
        set: function (value) {
            this._defaultManagedAppProtections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "iosManagedAppProtections", {
        /**
         * Gets the iosManagedAppProtections property value. iOS managed app policies.
         * @returns a iosManagedAppProtection
         */
        get: function () {
            return this._iosManagedAppProtections;
        },
        /**
         * Sets the iosManagedAppProtections property value. iOS managed app policies.
         * @param value Value to set for the iosManagedAppProtections property.
         */
        set: function (value) {
            this._iosManagedAppProtections = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "isEnabledForMicrosoftStoreForBusiness", {
        /**
         * Gets the isEnabledForMicrosoftStoreForBusiness property value. Whether the account is enabled for syncing applications from the Microsoft Store for Business.
         * @returns a boolean
         */
        get: function () {
            return this._isEnabledForMicrosoftStoreForBusiness;
        },
        /**
         * Sets the isEnabledForMicrosoftStoreForBusiness property value. Whether the account is enabled for syncing applications from the Microsoft Store for Business.
         * @param value Value to set for the isEnabledForMicrosoftStoreForBusiness property.
         */
        set: function (value) {
            this._isEnabledForMicrosoftStoreForBusiness = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "managedAppPolicies", {
        /**
         * Gets the managedAppPolicies property value. Managed app policies.
         * @returns a managedAppPolicy
         */
        get: function () {
            return this._managedAppPolicies;
        },
        /**
         * Sets the managedAppPolicies property value. Managed app policies.
         * @param value Value to set for the managedAppPolicies property.
         */
        set: function (value) {
            this._managedAppPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "managedAppRegistrations", {
        /**
         * Gets the managedAppRegistrations property value. The managed app registrations.
         * @returns a managedAppRegistration
         */
        get: function () {
            return this._managedAppRegistrations;
        },
        /**
         * Sets the managedAppRegistrations property value. The managed app registrations.
         * @param value Value to set for the managedAppRegistrations property.
         */
        set: function (value) {
            this._managedAppRegistrations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "managedAppStatuses", {
        /**
         * Gets the managedAppStatuses property value. The managed app statuses.
         * @returns a managedAppStatus
         */
        get: function () {
            return this._managedAppStatuses;
        },
        /**
         * Sets the managedAppStatuses property value. The managed app statuses.
         * @param value Value to set for the managedAppStatuses property.
         */
        set: function (value) {
            this._managedAppStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "managedEBooks", {
        /**
         * Gets the managedEBooks property value. The Managed eBook.
         * @returns a managedEBook
         */
        get: function () {
            return this._managedEBooks;
        },
        /**
         * Sets the managedEBooks property value. The Managed eBook.
         * @param value Value to set for the managedEBooks property.
         */
        set: function (value) {
            this._managedEBooks = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "mdmWindowsInformationProtectionPolicies", {
        /**
         * Gets the mdmWindowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are MDM enrolled.
         * @returns a mdmWindowsInformationProtectionPolicy
         */
        get: function () {
            return this._mdmWindowsInformationProtectionPolicies;
        },
        /**
         * Sets the mdmWindowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are MDM enrolled.
         * @param value Value to set for the mdmWindowsInformationProtectionPolicies property.
         */
        set: function (value) {
            this._mdmWindowsInformationProtectionPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "microsoftStoreForBusinessLanguage", {
        /**
         * Gets the microsoftStoreForBusinessLanguage property value. The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.
         * @returns a string
         */
        get: function () {
            return this._microsoftStoreForBusinessLanguage;
        },
        /**
         * Sets the microsoftStoreForBusinessLanguage property value. The locale information used to sync applications from the Microsoft Store for Business. Cultures that are specific to a country/region. The names of these cultures follow RFC 4646 (Windows Vista and later). The format is -<country/regioncode2>, where  is a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2> is an uppercase two-letter code derived from ISO 3166. For example, en-US for English (United States) is a specific culture.
         * @param value Value to set for the microsoftStoreForBusinessLanguage property.
         */
        set: function (value) {
            this._microsoftStoreForBusinessLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "microsoftStoreForBusinessLastCompletedApplicationSyncTime", {
        /**
         * Gets the microsoftStoreForBusinessLastCompletedApplicationSyncTime property value. The last time an application sync from the Microsoft Store for Business was completed.
         * @returns a Date
         */
        get: function () {
            return this._microsoftStoreForBusinessLastCompletedApplicationSyncTime;
        },
        /**
         * Sets the microsoftStoreForBusinessLastCompletedApplicationSyncTime property value. The last time an application sync from the Microsoft Store for Business was completed.
         * @param value Value to set for the microsoftStoreForBusinessLastCompletedApplicationSyncTime property.
         */
        set: function (value) {
            this._microsoftStoreForBusinessLastCompletedApplicationSyncTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "microsoftStoreForBusinessLastSuccessfulSyncDateTime", {
        /**
         * Gets the microsoftStoreForBusinessLastSuccessfulSyncDateTime property value. The last time the apps from the Microsoft Store for Business were synced successfully for the account.
         * @returns a Date
         */
        get: function () {
            return this._microsoftStoreForBusinessLastSuccessfulSyncDateTime;
        },
        /**
         * Sets the microsoftStoreForBusinessLastSuccessfulSyncDateTime property value. The last time the apps from the Microsoft Store for Business were synced successfully for the account.
         * @param value Value to set for the microsoftStoreForBusinessLastSuccessfulSyncDateTime property.
         */
        set: function (value) {
            this._microsoftStoreForBusinessLastSuccessfulSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "mobileAppCategories", {
        /**
         * Gets the mobileAppCategories property value. The mobile app categories.
         * @returns a mobileAppCategory
         */
        get: function () {
            return this._mobileAppCategories;
        },
        /**
         * Sets the mobileAppCategories property value. The mobile app categories.
         * @param value Value to set for the mobileAppCategories property.
         */
        set: function (value) {
            this._mobileAppCategories = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "mobileAppConfigurations", {
        /**
         * Gets the mobileAppConfigurations property value. The Managed Device Mobile Application Configurations.
         * @returns a managedDeviceMobileAppConfiguration
         */
        get: function () {
            return this._mobileAppConfigurations;
        },
        /**
         * Sets the mobileAppConfigurations property value. The Managed Device Mobile Application Configurations.
         * @param value Value to set for the mobileAppConfigurations property.
         */
        set: function (value) {
            this._mobileAppConfigurations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "mobileApps", {
        /**
         * Gets the mobileApps property value. The mobile apps.
         * @returns a mobileApp
         */
        get: function () {
            return this._mobileApps;
        },
        /**
         * Sets the mobileApps property value. The mobile apps.
         * @param value Value to set for the mobileApps property.
         */
        set: function (value) {
            this._mobileApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "targetedManagedAppConfigurations", {
        /**
         * Gets the targetedManagedAppConfigurations property value. Targeted managed app configurations.
         * @returns a targetedManagedAppConfiguration
         */
        get: function () {
            return this._targetedManagedAppConfigurations;
        },
        /**
         * Sets the targetedManagedAppConfigurations property value. Targeted managed app configurations.
         * @param value Value to set for the targetedManagedAppConfigurations property.
         */
        set: function (value) {
            this._targetedManagedAppConfigurations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "vppTokens", {
        /**
         * Gets the vppTokens property value. List of Vpp tokens for this organization.
         * @returns a vppToken
         */
        get: function () {
            return this._vppTokens;
        },
        /**
         * Sets the vppTokens property value. List of Vpp tokens for this organization.
         * @param value Value to set for the vppTokens property.
         */
        set: function (value) {
            this._vppTokens = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceAppManagement.prototype, "windowsInformationProtectionPolicies", {
        /**
         * Gets the windowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are not MDM enrolled.
         * @returns a windowsInformationProtectionPolicy
         */
        get: function () {
            return this._windowsInformationProtectionPolicies;
        },
        /**
         * Sets the windowsInformationProtectionPolicies property value. Windows information protection for apps running on devices which are not MDM enrolled.
         * @param value Value to set for the windowsInformationProtectionPolicies property.
         */
        set: function (value) {
            this._windowsInformationProtectionPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceAppManagement.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["androidManagedAppProtections", function (o, n) { o.androidManagedAppProtections = n.getCollectionOfObjectValues(androidManagedAppProtection_1.AndroidManagedAppProtection); }],
            ["defaultManagedAppProtections", function (o, n) { o.defaultManagedAppProtections = n.getCollectionOfObjectValues(defaultManagedAppProtection_1.DefaultManagedAppProtection); }],
            ["iosManagedAppProtections", function (o, n) { o.iosManagedAppProtections = n.getCollectionOfObjectValues(iosManagedAppProtection_1.IosManagedAppProtection); }],
            ["isEnabledForMicrosoftStoreForBusiness", function (o, n) { o.isEnabledForMicrosoftStoreForBusiness = n.getBooleanValue(); }],
            ["managedAppPolicies", function (o, n) { o.managedAppPolicies = n.getCollectionOfObjectValues(managedAppPolicy_1.ManagedAppPolicy); }],
            ["managedAppRegistrations", function (o, n) { o.managedAppRegistrations = n.getCollectionOfObjectValues(managedAppRegistration_1.ManagedAppRegistration); }],
            ["managedAppStatuses", function (o, n) { o.managedAppStatuses = n.getCollectionOfObjectValues(managedAppStatus_1.ManagedAppStatus); }],
            ["managedEBooks", function (o, n) { o.managedEBooks = n.getCollectionOfObjectValues(managedEBook_1.ManagedEBook); }],
            ["mdmWindowsInformationProtectionPolicies", function (o, n) { o.mdmWindowsInformationProtectionPolicies = n.getCollectionOfObjectValues(mdmWindowsInformationProtectionPolicy_1.MdmWindowsInformationProtectionPolicy); }],
            ["microsoftStoreForBusinessLanguage", function (o, n) { o.microsoftStoreForBusinessLanguage = n.getStringValue(); }],
            ["microsoftStoreForBusinessLastCompletedApplicationSyncTime", function (o, n) { o.microsoftStoreForBusinessLastCompletedApplicationSyncTime = n.getDateValue(); }],
            ["microsoftStoreForBusinessLastSuccessfulSyncDateTime", function (o, n) { o.microsoftStoreForBusinessLastSuccessfulSyncDateTime = n.getDateValue(); }],
            ["mobileAppCategories", function (o, n) { o.mobileAppCategories = n.getCollectionOfObjectValues(mobileAppCategory_1.MobileAppCategory); }],
            ["mobileAppConfigurations", function (o, n) { o.mobileAppConfigurations = n.getCollectionOfObjectValues(managedDeviceMobileAppConfiguration_1.ManagedDeviceMobileAppConfiguration); }],
            ["mobileApps", function (o, n) { o.mobileApps = n.getCollectionOfObjectValues(mobileApp_1.MobileApp); }],
            ["targetedManagedAppConfigurations", function (o, n) { o.targetedManagedAppConfigurations = n.getCollectionOfObjectValues(targetedManagedAppConfiguration_1.TargetedManagedAppConfiguration); }],
            ["vppTokens", function (o, n) { o.vppTokens = n.getCollectionOfObjectValues(vppToken_1.VppToken); }],
            ["windowsInformationProtectionPolicies", function (o, n) { o.windowsInformationProtectionPolicies = n.getCollectionOfObjectValues(windowsInformationProtectionPolicy_1.WindowsInformationProtectionPolicy); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceAppManagement.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("androidManagedAppProtections", this.androidManagedAppProtections);
        writer.writeCollectionOfObjectValues("defaultManagedAppProtections", this.defaultManagedAppProtections);
        writer.writeCollectionOfObjectValues("iosManagedAppProtections", this.iosManagedAppProtections);
        writer.writeBooleanValue("isEnabledForMicrosoftStoreForBusiness", this.isEnabledForMicrosoftStoreForBusiness);
        writer.writeCollectionOfObjectValues("managedAppPolicies", this.managedAppPolicies);
        writer.writeCollectionOfObjectValues("managedAppRegistrations", this.managedAppRegistrations);
        writer.writeCollectionOfObjectValues("managedAppStatuses", this.managedAppStatuses);
        writer.writeCollectionOfObjectValues("managedEBooks", this.managedEBooks);
        writer.writeCollectionOfObjectValues("mdmWindowsInformationProtectionPolicies", this.mdmWindowsInformationProtectionPolicies);
        writer.writeStringValue("microsoftStoreForBusinessLanguage", this.microsoftStoreForBusinessLanguage);
        writer.writeDateValue("microsoftStoreForBusinessLastCompletedApplicationSyncTime", this.microsoftStoreForBusinessLastCompletedApplicationSyncTime);
        writer.writeDateValue("microsoftStoreForBusinessLastSuccessfulSyncDateTime", this.microsoftStoreForBusinessLastSuccessfulSyncDateTime);
        writer.writeCollectionOfObjectValues("mobileAppCategories", this.mobileAppCategories);
        writer.writeCollectionOfObjectValues("mobileAppConfigurations", this.mobileAppConfigurations);
        writer.writeCollectionOfObjectValues("mobileApps", this.mobileApps);
        writer.writeCollectionOfObjectValues("targetedManagedAppConfigurations", this.targetedManagedAppConfigurations);
        writer.writeCollectionOfObjectValues("vppTokens", this.vppTokens);
        writer.writeCollectionOfObjectValues("windowsInformationProtectionPolicies", this.windowsInformationProtectionPolicies);
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
    return DeviceAppManagement;
}(entity_1.Entity));
exports.DeviceAppManagement = DeviceAppManagement;
