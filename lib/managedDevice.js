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
exports.ManagedDevice = void 0;
var deviceCategory_1 = require("./deviceManagement/deviceCategory");
var deviceCompliancePolicyState_1 = require("./deviceManagement/deviceCompliancePolicyState");
var deviceConfigurationState_1 = require("./deviceManagement/deviceConfigurationState");
var entity_1 = require("./entity");
var ManagedDevice = /** @class */ (function (_super) {
    __extends(ManagedDevice, _super);
    /**
     * Instantiates a new managedDevice and sets the default values.
     */
    function ManagedDevice() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ManagedDevice.prototype, "activationLockBypassCode", {
        /**
         * Gets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._activationLockBypassCode;
        },
        /**
         * Sets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
         * @param value Value to set for the activationLockBypassCode property.
         */
        set: function (value) {
            this._activationLockBypassCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "androidSecurityPatchLevel", {
        /**
         * Gets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._androidSecurityPatchLevel;
        },
        /**
         * Sets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
         * @param value Value to set for the androidSecurityPatchLevel property.
         */
        set: function (value) {
            this._androidSecurityPatchLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "azureADDeviceId", {
        /**
         * Gets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._azureADDeviceId;
        },
        /**
         * Sets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
         * @param value Value to set for the azureADDeviceId property.
         */
        set: function (value) {
            this._azureADDeviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "azureADRegistered", {
        /**
         * Gets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
         * @returns a boolean
         */
        get: function () {
            return this._azureADRegistered;
        },
        /**
         * Sets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
         * @param value Value to set for the azureADRegistered property.
         */
        set: function (value) {
            this._azureADRegistered = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "complianceGracePeriodExpirationDateTime", {
        /**
         * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
         * @returns a Date
         */
        get: function () {
            return this._complianceGracePeriodExpirationDateTime;
        },
        /**
         * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
         * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
         */
        set: function (value) {
            this._complianceGracePeriodExpirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "complianceState", {
        /**
         * Gets the complianceState property value. Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod, configManager.
         * @returns a complianceState
         */
        get: function () {
            return this._complianceState;
        },
        /**
         * Sets the complianceState property value. Compliance state of the device. This property is read-only. Possible values are: unknown, compliant, noncompliant, conflict, error, inGracePeriod, configManager.
         * @param value Value to set for the complianceState property.
         */
        set: function (value) {
            this._complianceState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "configurationManagerClientEnabledFeatures", {
        /**
         * Gets the configurationManagerClientEnabledFeatures property value. ConfigrMgr client enabled features. This property is read-only.
         * @returns a configurationManagerClientEnabledFeatures
         */
        get: function () {
            return this._configurationManagerClientEnabledFeatures;
        },
        /**
         * Sets the configurationManagerClientEnabledFeatures property value. ConfigrMgr client enabled features. This property is read-only.
         * @param value Value to set for the configurationManagerClientEnabledFeatures property.
         */
        set: function (value) {
            this._configurationManagerClientEnabledFeatures = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceActionResults", {
        /**
         * Gets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
         * @returns a deviceActionResult
         */
        get: function () {
            return this._deviceActionResults;
        },
        /**
         * Sets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
         * @param value Value to set for the deviceActionResults property.
         */
        set: function (value) {
            this._deviceActionResults = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceCategory", {
        /**
         * Gets the deviceCategory property value. Device category
         * @returns a deviceCategory
         */
        get: function () {
            return this._deviceCategory;
        },
        /**
         * Sets the deviceCategory property value. Device category
         * @param value Value to set for the deviceCategory property.
         */
        set: function (value) {
            this._deviceCategory = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceCategoryDisplayName", {
        /**
         * Gets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._deviceCategoryDisplayName;
        },
        /**
         * Sets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
         * @param value Value to set for the deviceCategoryDisplayName property.
         */
        set: function (value) {
            this._deviceCategoryDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceCompliancePolicyStates", {
        /**
         * Gets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
         * @returns a deviceCompliancePolicyState
         */
        get: function () {
            return this._deviceCompliancePolicyStates;
        },
        /**
         * Sets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
         * @param value Value to set for the deviceCompliancePolicyStates property.
         */
        set: function (value) {
            this._deviceCompliancePolicyStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceConfigurationStates", {
        /**
         * Gets the deviceConfigurationStates property value. Device configuration states for this device.
         * @returns a deviceConfigurationState
         */
        get: function () {
            return this._deviceConfigurationStates;
        },
        /**
         * Sets the deviceConfigurationStates property value. Device configuration states for this device.
         * @param value Value to set for the deviceConfigurationStates property.
         */
        set: function (value) {
            this._deviceConfigurationStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceEnrollmentType", {
        /**
         * Gets the deviceEnrollmentType property value. Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile.
         * @returns a deviceEnrollmentType
         */
        get: function () {
            return this._deviceEnrollmentType;
        },
        /**
         * Sets the deviceEnrollmentType property value. Enrollment type of the device. This property is read-only. Possible values are: unknown, userEnrollment, deviceEnrollmentManager, appleBulkWithUser, appleBulkWithoutUser, windowsAzureADJoin, windowsBulkUserless, windowsAutoEnrollment, windowsBulkAzureDomainJoin, windowsCoManagement, windowsAzureADJoinUsingDeviceAuth, appleUserEnrollment, appleUserEnrollmentWithServiceAccount, azureAdJoinUsingAzureVmExtension, androidEnterpriseDedicatedDevice, androidEnterpriseFullyManaged, androidEnterpriseCorporateWorkProfile.
         * @param value Value to set for the deviceEnrollmentType property.
         */
        set: function (value) {
            this._deviceEnrollmentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceHealthAttestationState", {
        /**
         * Gets the deviceHealthAttestationState property value. The device health attestation state. This property is read-only.
         * @returns a deviceHealthAttestationState
         */
        get: function () {
            return this._deviceHealthAttestationState;
        },
        /**
         * Sets the deviceHealthAttestationState property value. The device health attestation state. This property is read-only.
         * @param value Value to set for the deviceHealthAttestationState property.
         */
        set: function (value) {
            this._deviceHealthAttestationState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceName", {
        /**
         * Gets the deviceName property value. Name of the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._deviceName;
        },
        /**
         * Sets the deviceName property value. Name of the device. This property is read-only.
         * @param value Value to set for the deviceName property.
         */
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "deviceRegistrationState", {
        /**
         * Gets the deviceRegistrationState property value. Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown.
         * @returns a deviceRegistrationState
         */
        get: function () {
            return this._deviceRegistrationState;
        },
        /**
         * Sets the deviceRegistrationState property value. Device registration state. This property is read-only. Possible values are: notRegistered, registered, revoked, keyConflict, approvalPending, certificateReset, notRegisteredPendingEnrollment, unknown.
         * @param value Value to set for the deviceRegistrationState property.
         */
        set: function (value) {
            this._deviceRegistrationState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "easActivated", {
        /**
         * Gets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
         * @returns a boolean
         */
        get: function () {
            return this._easActivated;
        },
        /**
         * Sets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
         * @param value Value to set for the easActivated property.
         */
        set: function (value) {
            this._easActivated = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "easActivationDateTime", {
        /**
         * Gets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
         * @returns a Date
         */
        get: function () {
            return this._easActivationDateTime;
        },
        /**
         * Sets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
         * @param value Value to set for the easActivationDateTime property.
         */
        set: function (value) {
            this._easActivationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "easDeviceId", {
        /**
         * Gets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._easDeviceId;
        },
        /**
         * Sets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
         * @param value Value to set for the easDeviceId property.
         */
        set: function (value) {
            this._easDeviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "emailAddress", {
        /**
         * Gets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._emailAddress;
        },
        /**
         * Sets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
         * @param value Value to set for the emailAddress property.
         */
        set: function (value) {
            this._emailAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "enrolledDateTime", {
        /**
         * Gets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
         * @returns a Date
         */
        get: function () {
            return this._enrolledDateTime;
        },
        /**
         * Sets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
         * @param value Value to set for the enrolledDateTime property.
         */
        set: function (value) {
            this._enrolledDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "ethernetMacAddress", {
        /**
         * Gets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._ethernetMacAddress;
        },
        /**
         * Sets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
         * @param value Value to set for the ethernetMacAddress property.
         */
        set: function (value) {
            this._ethernetMacAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "exchangeAccessState", {
        /**
         * Gets the exchangeAccessState property value. The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed, blocked, quarantined.
         * @returns a deviceManagementExchangeAccessState
         */
        get: function () {
            return this._exchangeAccessState;
        },
        /**
         * Sets the exchangeAccessState property value. The Access State of the device in Exchange. This property is read-only. Possible values are: none, unknown, allowed, blocked, quarantined.
         * @param value Value to set for the exchangeAccessState property.
         */
        set: function (value) {
            this._exchangeAccessState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "exchangeAccessStateReason", {
        /**
         * Gets the exchangeAccessStateReason property value. The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown, exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword, deviceNotKnownWithManagedApp.
         * @returns a deviceManagementExchangeAccessStateReason
         */
        get: function () {
            return this._exchangeAccessStateReason;
        },
        /**
         * Sets the exchangeAccessStateReason property value. The reason for the device's access state in Exchange. This property is read-only. Possible values are: none, unknown, exchangeGlobalRule, exchangeIndividualRule, exchangeDeviceRule, exchangeUpgrade, exchangeMailboxPolicy, other, compliant, notCompliant, notEnrolled, unknownLocation, mfaRequired, azureADBlockDueToAccessPolicy, compromisedPassword, deviceNotKnownWithManagedApp.
         * @param value Value to set for the exchangeAccessStateReason property.
         */
        set: function (value) {
            this._exchangeAccessStateReason = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "exchangeLastSuccessfulSyncDateTime", {
        /**
         * Gets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
         * @returns a Date
         */
        get: function () {
            return this._exchangeLastSuccessfulSyncDateTime;
        },
        /**
         * Sets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
         * @param value Value to set for the exchangeLastSuccessfulSyncDateTime property.
         */
        set: function (value) {
            this._exchangeLastSuccessfulSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "freeStorageSpaceInBytes", {
        /**
         * Gets the freeStorageSpaceInBytes property value. Free Storage in Bytes. This property is read-only.
         * @returns a int64
         */
        get: function () {
            return this._freeStorageSpaceInBytes;
        },
        /**
         * Sets the freeStorageSpaceInBytes property value. Free Storage in Bytes. This property is read-only.
         * @param value Value to set for the freeStorageSpaceInBytes property.
         */
        set: function (value) {
            this._freeStorageSpaceInBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "iccid", {
        /**
         * Gets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._iccid;
        },
        /**
         * Sets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. This property is read-only.
         * @param value Value to set for the iccid property.
         */
        set: function (value) {
            this._iccid = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "imei", {
        /**
         * Gets the imei property value. IMEI. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._imei;
        },
        /**
         * Sets the imei property value. IMEI. This property is read-only.
         * @param value Value to set for the imei property.
         */
        set: function (value) {
            this._imei = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "isEncrypted", {
        /**
         * Gets the isEncrypted property value. Device encryption status. This property is read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isEncrypted;
        },
        /**
         * Sets the isEncrypted property value. Device encryption status. This property is read-only.
         * @param value Value to set for the isEncrypted property.
         */
        set: function (value) {
            this._isEncrypted = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "isSupervised", {
        /**
         * Gets the isSupervised property value. Device supervised status. This property is read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isSupervised;
        },
        /**
         * Sets the isSupervised property value. Device supervised status. This property is read-only.
         * @param value Value to set for the isSupervised property.
         */
        set: function (value) {
            this._isSupervised = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "jailBroken", {
        /**
         * Gets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._jailBroken;
        },
        /**
         * Sets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
         * @param value Value to set for the jailBroken property.
         */
        set: function (value) {
            this._jailBroken = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "lastSyncDateTime", {
        /**
         * Gets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
         * @returns a Date
         */
        get: function () {
            return this._lastSyncDateTime;
        },
        /**
         * Sets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
         * @param value Value to set for the lastSyncDateTime property.
         */
        set: function (value) {
            this._lastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "managedDeviceName", {
        /**
         * Gets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
         * @returns a string
         */
        get: function () {
            return this._managedDeviceName;
        },
        /**
         * Sets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
         * @param value Value to set for the managedDeviceName property.
         */
        set: function (value) {
            this._managedDeviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "managedDeviceOwnerType", {
        /**
         * Gets the managedDeviceOwnerType property value. Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal.
         * @returns a managedDeviceOwnerType
         */
        get: function () {
            return this._managedDeviceOwnerType;
        },
        /**
         * Sets the managedDeviceOwnerType property value. Ownership of the device. Can be 'company' or 'personal'. Possible values are: unknown, company, personal.
         * @param value Value to set for the managedDeviceOwnerType property.
         */
        set: function (value) {
            this._managedDeviceOwnerType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "managementAgent", {
        /**
         * Gets the managementAgent property value. Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController, microsoft365ManagedMdm, msSense, intuneAosp.
         * @returns a managementAgentType
         */
        get: function () {
            return this._managementAgent;
        },
        /**
         * Sets the managementAgent property value. Management channel of the device. Intune, EAS, etc. This property is read-only. Possible values are: eas, mdm, easMdm, intuneClient, easIntuneClient, configurationManagerClient, configurationManagerClientMdm, configurationManagerClientMdmEas, unknown, jamf, googleCloudDevicePolicyController, microsoft365ManagedMdm, msSense, intuneAosp.
         * @param value Value to set for the managementAgent property.
         */
        set: function (value) {
            this._managementAgent = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "manufacturer", {
        /**
         * Gets the manufacturer property value. Manufacturer of the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._manufacturer;
        },
        /**
         * Sets the manufacturer property value. Manufacturer of the device. This property is read-only.
         * @param value Value to set for the manufacturer property.
         */
        set: function (value) {
            this._manufacturer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "meid", {
        /**
         * Gets the meid property value. MEID. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._meid;
        },
        /**
         * Sets the meid property value. MEID. This property is read-only.
         * @param value Value to set for the meid property.
         */
        set: function (value) {
            this._meid = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "model", {
        /**
         * Gets the model property value. Model of the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._model;
        },
        /**
         * Sets the model property value. Model of the device. This property is read-only.
         * @param value Value to set for the model property.
         */
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "notes", {
        /**
         * Gets the notes property value. Notes on the device created by IT Admin
         * @returns a string
         */
        get: function () {
            return this._notes;
        },
        /**
         * Sets the notes property value. Notes on the device created by IT Admin
         * @param value Value to set for the notes property.
         */
        set: function (value) {
            this._notes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "operatingSystem", {
        /**
         * Gets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._operatingSystem;
        },
        /**
         * Sets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
         * @param value Value to set for the operatingSystem property.
         */
        set: function (value) {
            this._operatingSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "osVersion", {
        /**
         * Gets the osVersion property value. Operating system version of the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._osVersion;
        },
        /**
         * Sets the osVersion property value. Operating system version of the device. This property is read-only.
         * @param value Value to set for the osVersion property.
         */
        set: function (value) {
            this._osVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "partnerReportedThreatState", {
        /**
         * Gets the partnerReportedThreatState property value. Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity, unresponsive, compromised, misconfigured.
         * @returns a managedDevicePartnerReportedHealthState
         */
        get: function () {
            return this._partnerReportedThreatState;
        },
        /**
         * Sets the partnerReportedThreatState property value. Indicates the threat state of a device when a Mobile Threat Defense partner is in use by the account and device. Read Only. This property is read-only. Possible values are: unknown, activated, deactivated, secured, lowSeverity, mediumSeverity, highSeverity, unresponsive, compromised, misconfigured.
         * @param value Value to set for the partnerReportedThreatState property.
         */
        set: function (value) {
            this._partnerReportedThreatState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "phoneNumber", {
        /**
         * Gets the phoneNumber property value. Phone number of the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._phoneNumber;
        },
        /**
         * Sets the phoneNumber property value. Phone number of the device. This property is read-only.
         * @param value Value to set for the phoneNumber property.
         */
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "physicalMemoryInBytes", {
        /**
         * Gets the physicalMemoryInBytes property value. Total Memory in Bytes. This property is read-only.
         * @returns a int64
         */
        get: function () {
            return this._physicalMemoryInBytes;
        },
        /**
         * Sets the physicalMemoryInBytes property value. Total Memory in Bytes. This property is read-only.
         * @param value Value to set for the physicalMemoryInBytes property.
         */
        set: function (value) {
            this._physicalMemoryInBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "remoteAssistanceSessionErrorDetails", {
        /**
         * Gets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._remoteAssistanceSessionErrorDetails;
        },
        /**
         * Sets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
         * @param value Value to set for the remoteAssistanceSessionErrorDetails property.
         */
        set: function (value) {
            this._remoteAssistanceSessionErrorDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "remoteAssistanceSessionUrl", {
        /**
         * Gets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._remoteAssistanceSessionUrl;
        },
        /**
         * Sets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
         * @param value Value to set for the remoteAssistanceSessionUrl property.
         */
        set: function (value) {
            this._remoteAssistanceSessionUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "serialNumber", {
        /**
         * Gets the serialNumber property value. SerialNumber. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._serialNumber;
        },
        /**
         * Sets the serialNumber property value. SerialNumber. This property is read-only.
         * @param value Value to set for the serialNumber property.
         */
        set: function (value) {
            this._serialNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "subscriberCarrier", {
        /**
         * Gets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._subscriberCarrier;
        },
        /**
         * Sets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
         * @param value Value to set for the subscriberCarrier property.
         */
        set: function (value) {
            this._subscriberCarrier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "totalStorageSpaceInBytes", {
        /**
         * Gets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
         * @returns a int64
         */
        get: function () {
            return this._totalStorageSpaceInBytes;
        },
        /**
         * Sets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
         * @param value Value to set for the totalStorageSpaceInBytes property.
         */
        set: function (value) {
            this._totalStorageSpaceInBytes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "udid", {
        /**
         * Gets the udid property value. Unique Device Identifier for iOS and macOS devices. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._udid;
        },
        /**
         * Sets the udid property value. Unique Device Identifier for iOS and macOS devices. This property is read-only.
         * @param value Value to set for the udid property.
         */
        set: function (value) {
            this._udid = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "userDisplayName", {
        /**
         * Gets the userDisplayName property value. User display name. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._userDisplayName;
        },
        /**
         * Sets the userDisplayName property value. User display name. This property is read-only.
         * @param value Value to set for the userDisplayName property.
         */
        set: function (value) {
            this._userDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "userId", {
        /**
         * Gets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
         * @param value Value to set for the userId property.
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. Device user principal name. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. Device user principal name. This property is read-only.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDevice.prototype, "wiFiMacAddress", {
        /**
         * Gets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._wiFiMacAddress;
        },
        /**
         * Sets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
         * @param value Value to set for the wiFiMacAddress property.
         */
        set: function (value) {
            this._wiFiMacAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ManagedDevice.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activationLockBypassCode", function (o, n) { o.activationLockBypassCode = n.getStringValue(); }],
            ["androidSecurityPatchLevel", function (o, n) { o.androidSecurityPatchLevel = n.getStringValue(); }],
            ["azureADDeviceId", function (o, n) { o.azureADDeviceId = n.getStringValue(); }],
            ["azureADRegistered", function (o, n) { o.azureADRegistered = n.getBooleanValue(); }],
            ["complianceGracePeriodExpirationDateTime", function (o, n) { o.complianceGracePeriodExpirationDateTime = n.getDateValue(); }],
            ["complianceState", function (o, n) { o.complianceState = n.getObjectValue(ComplianceState); }],
            ["configurationManagerClientEnabledFeatures", function (o, n) { o.configurationManagerClientEnabledFeatures = n.getObjectValue(ConfigurationManagerClientEnabledFeatures); }],
            ["deviceActionResults", function (o, n) { o.deviceActionResults = n.getCollectionOfPrimitiveValues(); }],
            ["deviceCategory", function (o, n) { o.deviceCategory = n.getObjectValue(deviceCategory_1.DeviceCategory); }],
            ["deviceCategoryDisplayName", function (o, n) { o.deviceCategoryDisplayName = n.getStringValue(); }],
            ["deviceCompliancePolicyStates", function (o, n) { o.deviceCompliancePolicyStates = n.getCollectionOfObjectValues(deviceCompliancePolicyState_1.DeviceCompliancePolicyState); }],
            ["deviceConfigurationStates", function (o, n) { o.deviceConfigurationStates = n.getCollectionOfObjectValues(deviceConfigurationState_1.DeviceConfigurationState); }],
            ["deviceEnrollmentType", function (o, n) { o.deviceEnrollmentType = n.getObjectValue(DeviceEnrollmentType); }],
            ["deviceHealthAttestationState", function (o, n) { o.deviceHealthAttestationState = n.getObjectValue(DeviceHealthAttestationState); }],
            ["deviceName", function (o, n) { o.deviceName = n.getStringValue(); }],
            ["deviceRegistrationState", function (o, n) { o.deviceRegistrationState = n.getObjectValue(DeviceRegistrationState); }],
            ["easActivated", function (o, n) { o.easActivated = n.getBooleanValue(); }],
            ["easActivationDateTime", function (o, n) { o.easActivationDateTime = n.getDateValue(); }],
            ["easDeviceId", function (o, n) { o.easDeviceId = n.getStringValue(); }],
            ["emailAddress", function (o, n) { o.emailAddress = n.getStringValue(); }],
            ["enrolledDateTime", function (o, n) { o.enrolledDateTime = n.getDateValue(); }],
            ["ethernetMacAddress", function (o, n) { o.ethernetMacAddress = n.getStringValue(); }],
            ["exchangeAccessState", function (o, n) { o.exchangeAccessState = n.getObjectValue(DeviceManagementExchangeAccessState); }],
            ["exchangeAccessStateReason", function (o, n) { o.exchangeAccessStateReason = n.getObjectValue(DeviceManagementExchangeAccessStateReason); }],
            ["exchangeLastSuccessfulSyncDateTime", function (o, n) { o.exchangeLastSuccessfulSyncDateTime = n.getDateValue(); }],
            ["freeStorageSpaceInBytes", function (o, n) { o.freeStorageSpaceInBytes = n.getObjectValue(Int64); }],
            ["iccid", function (o, n) { o.iccid = n.getStringValue(); }],
            ["imei", function (o, n) { o.imei = n.getStringValue(); }],
            ["isEncrypted", function (o, n) { o.isEncrypted = n.getBooleanValue(); }],
            ["isSupervised", function (o, n) { o.isSupervised = n.getBooleanValue(); }],
            ["jailBroken", function (o, n) { o.jailBroken = n.getStringValue(); }],
            ["lastSyncDateTime", function (o, n) { o.lastSyncDateTime = n.getDateValue(); }],
            ["managedDeviceName", function (o, n) { o.managedDeviceName = n.getStringValue(); }],
            ["managedDeviceOwnerType", function (o, n) { o.managedDeviceOwnerType = n.getObjectValue(ManagedDeviceOwnerType); }],
            ["managementAgent", function (o, n) { o.managementAgent = n.getObjectValue(ManagementAgentType); }],
            ["manufacturer", function (o, n) { o.manufacturer = n.getStringValue(); }],
            ["meid", function (o, n) { o.meid = n.getStringValue(); }],
            ["model", function (o, n) { o.model = n.getStringValue(); }],
            ["notes", function (o, n) { o.notes = n.getStringValue(); }],
            ["operatingSystem", function (o, n) { o.operatingSystem = n.getStringValue(); }],
            ["osVersion", function (o, n) { o.osVersion = n.getStringValue(); }],
            ["partnerReportedThreatState", function (o, n) { o.partnerReportedThreatState = n.getObjectValue(ManagedDevicePartnerReportedHealthState); }],
            ["phoneNumber", function (o, n) { o.phoneNumber = n.getStringValue(); }],
            ["physicalMemoryInBytes", function (o, n) { o.physicalMemoryInBytes = n.getObjectValue(Int64); }],
            ["remoteAssistanceSessionErrorDetails", function (o, n) { o.remoteAssistanceSessionErrorDetails = n.getStringValue(); }],
            ["remoteAssistanceSessionUrl", function (o, n) { o.remoteAssistanceSessionUrl = n.getStringValue(); }],
            ["serialNumber", function (o, n) { o.serialNumber = n.getStringValue(); }],
            ["subscriberCarrier", function (o, n) { o.subscriberCarrier = n.getStringValue(); }],
            ["totalStorageSpaceInBytes", function (o, n) { o.totalStorageSpaceInBytes = n.getObjectValue(Int64); }],
            ["udid", function (o, n) { o.udid = n.getStringValue(); }],
            ["userDisplayName", function (o, n) { o.userDisplayName = n.getStringValue(); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],
            ["wiFiMacAddress", function (o, n) { o.wiFiMacAddress = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ManagedDevice.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("activationLockBypassCode", this.activationLockBypassCode);
        writer.writeStringValue("androidSecurityPatchLevel", this.androidSecurityPatchLevel);
        writer.writeStringValue("azureADDeviceId", this.azureADDeviceId);
        writer.writeBooleanValue("azureADRegistered", this.azureADRegistered);
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        writer.writeObjectValue("complianceState", this.complianceState);
        writer.writeObjectValue("configurationManagerClientEnabledFeatures", this.configurationManagerClientEnabledFeatures);
        writer.writeCollectionOfPrimitiveValues("deviceActionResults", this.deviceActionResults);
        writer.writeObjectValue("deviceCategory", this.deviceCategory);
        writer.writeStringValue("deviceCategoryDisplayName", this.deviceCategoryDisplayName);
        writer.writeCollectionOfObjectValues("deviceCompliancePolicyStates", this.deviceCompliancePolicyStates);
        writer.writeCollectionOfObjectValues("deviceConfigurationStates", this.deviceConfigurationStates);
        writer.writeObjectValue("deviceEnrollmentType", this.deviceEnrollmentType);
        writer.writeObjectValue("deviceHealthAttestationState", this.deviceHealthAttestationState);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeObjectValue("deviceRegistrationState", this.deviceRegistrationState);
        writer.writeBooleanValue("easActivated", this.easActivated);
        writer.writeDateValue("easActivationDateTime", this.easActivationDateTime);
        writer.writeStringValue("easDeviceId", this.easDeviceId);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeDateValue("enrolledDateTime", this.enrolledDateTime);
        writer.writeStringValue("ethernetMacAddress", this.ethernetMacAddress);
        writer.writeObjectValue("exchangeAccessState", this.exchangeAccessState);
        writer.writeObjectValue("exchangeAccessStateReason", this.exchangeAccessStateReason);
        writer.writeDateValue("exchangeLastSuccessfulSyncDateTime", this.exchangeLastSuccessfulSyncDateTime);
        writer.writeObjectValue("freeStorageSpaceInBytes", this.freeStorageSpaceInBytes);
        writer.writeStringValue("iccid", this.iccid);
        writer.writeStringValue("imei", this.imei);
        writer.writeBooleanValue("isEncrypted", this.isEncrypted);
        writer.writeBooleanValue("isSupervised", this.isSupervised);
        writer.writeStringValue("jailBroken", this.jailBroken);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("managedDeviceName", this.managedDeviceName);
        writer.writeObjectValue("managedDeviceOwnerType", this.managedDeviceOwnerType);
        writer.writeObjectValue("managementAgent", this.managementAgent);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("meid", this.meid);
        writer.writeStringValue("model", this.model);
        writer.writeStringValue("notes", this.notes);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeStringValue("osVersion", this.osVersion);
        writer.writeObjectValue("partnerReportedThreatState", this.partnerReportedThreatState);
        writer.writeStringValue("phoneNumber", this.phoneNumber);
        writer.writeObjectValue("physicalMemoryInBytes", this.physicalMemoryInBytes);
        writer.writeStringValue("remoteAssistanceSessionErrorDetails", this.remoteAssistanceSessionErrorDetails);
        writer.writeStringValue("remoteAssistanceSessionUrl", this.remoteAssistanceSessionUrl);
        writer.writeStringValue("serialNumber", this.serialNumber);
        writer.writeStringValue("subscriberCarrier", this.subscriberCarrier);
        writer.writeObjectValue("totalStorageSpaceInBytes", this.totalStorageSpaceInBytes);
        writer.writeStringValue("udid", this.udid);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeStringValue("wiFiMacAddress", this.wiFiMacAddress);
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
    return ManagedDevice;
}(entity_1.Entity));
exports.ManagedDevice = ManagedDevice;
