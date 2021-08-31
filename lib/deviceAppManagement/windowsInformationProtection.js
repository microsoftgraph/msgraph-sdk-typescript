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
exports.WindowsInformationProtection = void 0;
var managedAppPolicy_1 = require("./managedAppPolicy");
var targetedManagedAppPolicyAssignment_1 = require("./targetedManagedAppPolicyAssignment");
var windowsInformationProtectionAppLockerFile_1 = require("./windowsInformationProtectionAppLockerFile");
var WindowsInformationProtection = /** @class */ (function (_super) {
    __extends(WindowsInformationProtection, _super);
    /**
     * Instantiates a new windowsInformationProtection and sets the default values.
     */
    function WindowsInformationProtection() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "assignments", {
        /**
         * Gets the assignments property value. Navigation property to list of security groups targeted for policy.
         * @returns a targetedManagedAppPolicyAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. Navigation property to list of security groups targeted for policy.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "azureRightsManagementServicesAllowed", {
        /**
         * Gets the azureRightsManagementServicesAllowed property value. Specifies whether to allow Azure RMS encryption for WIP
         * @returns a boolean
         */
        get: function () {
            return this._azureRightsManagementServicesAllowed;
        },
        /**
         * Sets the azureRightsManagementServicesAllowed property value. Specifies whether to allow Azure RMS encryption for WIP
         * @param value Value to set for the azureRightsManagementServicesAllowed property.
         */
        set: function (value) {
            this._azureRightsManagementServicesAllowed = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "dataRecoveryCertificate", {
        /**
         * Gets the dataRecoveryCertificate property value. Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)
         * @returns a windowsInformationProtectionDataRecoveryCertificate
         */
        get: function () {
            return this._dataRecoveryCertificate;
        },
        /**
         * Sets the dataRecoveryCertificate property value. Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)
         * @param value Value to set for the dataRecoveryCertificate property.
         */
        set: function (value) {
            this._dataRecoveryCertificate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enforcementLevel", {
        /**
         * Gets the enforcementLevel property value. WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
         * @returns a windowsInformationProtectionEnforcementLevel
         */
        get: function () {
            return this._enforcementLevel;
        },
        /**
         * Sets the enforcementLevel property value. WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
         * @param value Value to set for the enforcementLevel property.
         */
        set: function (value) {
            this._enforcementLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseDomain", {
        /**
         * Gets the enterpriseDomain property value. Primary enterprise domain
         * @returns a string
         */
        get: function () {
            return this._enterpriseDomain;
        },
        /**
         * Sets the enterpriseDomain property value. Primary enterprise domain
         * @param value Value to set for the enterpriseDomain property.
         */
        set: function (value) {
            this._enterpriseDomain = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseInternalProxyServers", {
        /**
         * Gets the enterpriseInternalProxyServers property value. This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
         * @returns a windowsInformationProtectionResourceCollection
         */
        get: function () {
            return this._enterpriseInternalProxyServers;
        },
        /**
         * Sets the enterpriseInternalProxyServers property value. This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
         * @param value Value to set for the enterpriseInternalProxyServers property.
         */
        set: function (value) {
            this._enterpriseInternalProxyServers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseIPRanges", {
        /**
         * Gets the enterpriseIPRanges property value. Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to
         * @returns a windowsInformationProtectionIPRangeCollection
         */
        get: function () {
            return this._enterpriseIPRanges;
        },
        /**
         * Sets the enterpriseIPRanges property value. Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to
         * @param value Value to set for the enterpriseIPRanges property.
         */
        set: function (value) {
            this._enterpriseIPRanges = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseIPRangesAreAuthoritative", {
        /**
         * Gets the enterpriseIPRangesAreAuthoritative property value. Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false
         * @returns a boolean
         */
        get: function () {
            return this._enterpriseIPRangesAreAuthoritative;
        },
        /**
         * Sets the enterpriseIPRangesAreAuthoritative property value. Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false
         * @param value Value to set for the enterpriseIPRangesAreAuthoritative property.
         */
        set: function (value) {
            this._enterpriseIPRangesAreAuthoritative = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseNetworkDomainNames", {
        /**
         * Gets the enterpriseNetworkDomainNames property value. This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to
         * @returns a windowsInformationProtectionResourceCollection
         */
        get: function () {
            return this._enterpriseNetworkDomainNames;
        },
        /**
         * Sets the enterpriseNetworkDomainNames property value. This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to
         * @param value Value to set for the enterpriseNetworkDomainNames property.
         */
        set: function (value) {
            this._enterpriseNetworkDomainNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseProtectedDomainNames", {
        /**
         * Gets the enterpriseProtectedDomainNames property value. List of enterprise domains to be protected
         * @returns a windowsInformationProtectionResourceCollection
         */
        get: function () {
            return this._enterpriseProtectedDomainNames;
        },
        /**
         * Sets the enterpriseProtectedDomainNames property value. List of enterprise domains to be protected
         * @param value Value to set for the enterpriseProtectedDomainNames property.
         */
        set: function (value) {
            this._enterpriseProtectedDomainNames = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseProxiedDomains", {
        /**
         * Gets the enterpriseProxiedDomains property value. Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy
         * @returns a windowsInformationProtectionProxiedDomainCollection
         */
        get: function () {
            return this._enterpriseProxiedDomains;
        },
        /**
         * Sets the enterpriseProxiedDomains property value. Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy
         * @param value Value to set for the enterpriseProxiedDomains property.
         */
        set: function (value) {
            this._enterpriseProxiedDomains = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseProxyServers", {
        /**
         * Gets the enterpriseProxyServers property value. This is a list of proxy servers. Any server not on this list is considered non-enterprise
         * @returns a windowsInformationProtectionResourceCollection
         */
        get: function () {
            return this._enterpriseProxyServers;
        },
        /**
         * Sets the enterpriseProxyServers property value. This is a list of proxy servers. Any server not on this list is considered non-enterprise
         * @param value Value to set for the enterpriseProxyServers property.
         */
        set: function (value) {
            this._enterpriseProxyServers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "enterpriseProxyServersAreAuthoritative", {
        /**
         * Gets the enterpriseProxyServersAreAuthoritative property value. Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false
         * @returns a boolean
         */
        get: function () {
            return this._enterpriseProxyServersAreAuthoritative;
        },
        /**
         * Sets the enterpriseProxyServersAreAuthoritative property value. Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false
         * @param value Value to set for the enterpriseProxyServersAreAuthoritative property.
         */
        set: function (value) {
            this._enterpriseProxyServersAreAuthoritative = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "exemptAppLockerFiles", {
        /**
         * Gets the exemptAppLockerFiles property value. Another way to input exempt apps through xml files
         * @returns a windowsInformationProtectionAppLockerFile
         */
        get: function () {
            return this._exemptAppLockerFiles;
        },
        /**
         * Sets the exemptAppLockerFiles property value. Another way to input exempt apps through xml files
         * @param value Value to set for the exemptAppLockerFiles property.
         */
        set: function (value) {
            this._exemptAppLockerFiles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "exemptApps", {
        /**
         * Gets the exemptApps property value. Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.
         * @returns a windowsInformationProtectionApp
         */
        get: function () {
            return this._exemptApps;
        },
        /**
         * Sets the exemptApps property value. Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.
         * @param value Value to set for the exemptApps property.
         */
        set: function (value) {
            this._exemptApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "iconsVisible", {
        /**
         * Gets the iconsVisible property value. Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app
         * @returns a boolean
         */
        get: function () {
            return this._iconsVisible;
        },
        /**
         * Sets the iconsVisible property value. Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app
         * @param value Value to set for the iconsVisible property.
         */
        set: function (value) {
            this._iconsVisible = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "indexingEncryptedStoresOrItemsBlocked", {
        /**
         * Gets the indexingEncryptedStoresOrItemsBlocked property value. This switch is for the Windows Search Indexer, to allow or disallow indexing of items
         * @returns a boolean
         */
        get: function () {
            return this._indexingEncryptedStoresOrItemsBlocked;
        },
        /**
         * Sets the indexingEncryptedStoresOrItemsBlocked property value. This switch is for the Windows Search Indexer, to allow or disallow indexing of items
         * @param value Value to set for the indexingEncryptedStoresOrItemsBlocked property.
         */
        set: function (value) {
            this._indexingEncryptedStoresOrItemsBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "isAssigned", {
        /**
         * Gets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
         * @returns a boolean
         */
        get: function () {
            return this._isAssigned;
        },
        /**
         * Sets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
         * @param value Value to set for the isAssigned property.
         */
        set: function (value) {
            this._isAssigned = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "neutralDomainResources", {
        /**
         * Gets the neutralDomainResources property value. List of domain names that can used for work or personal resource
         * @returns a windowsInformationProtectionResourceCollection
         */
        get: function () {
            return this._neutralDomainResources;
        },
        /**
         * Sets the neutralDomainResources property value. List of domain names that can used for work or personal resource
         * @param value Value to set for the neutralDomainResources property.
         */
        set: function (value) {
            this._neutralDomainResources = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "protectedAppLockerFiles", {
        /**
         * Gets the protectedAppLockerFiles property value. Another way to input protected apps through xml files
         * @returns a windowsInformationProtectionAppLockerFile
         */
        get: function () {
            return this._protectedAppLockerFiles;
        },
        /**
         * Sets the protectedAppLockerFiles property value. Another way to input protected apps through xml files
         * @param value Value to set for the protectedAppLockerFiles property.
         */
        set: function (value) {
            this._protectedAppLockerFiles = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "protectedApps", {
        /**
         * Gets the protectedApps property value. Protected applications can access enterprise data and the data handled by those applications are protected with encryption
         * @returns a windowsInformationProtectionApp
         */
        get: function () {
            return this._protectedApps;
        },
        /**
         * Sets the protectedApps property value. Protected applications can access enterprise data and the data handled by those applications are protected with encryption
         * @param value Value to set for the protectedApps property.
         */
        set: function (value) {
            this._protectedApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "protectionUnderLockConfigRequired", {
        /**
         * Gets the protectionUnderLockConfigRequired property value. Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
         * @returns a boolean
         */
        get: function () {
            return this._protectionUnderLockConfigRequired;
        },
        /**
         * Sets the protectionUnderLockConfigRequired property value. Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
         * @param value Value to set for the protectionUnderLockConfigRequired property.
         */
        set: function (value) {
            this._protectionUnderLockConfigRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "revokeOnUnenrollDisabled", {
        /**
         * Gets the revokeOnUnenrollDisabled property value. This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
         * @returns a boolean
         */
        get: function () {
            return this._revokeOnUnenrollDisabled;
        },
        /**
         * Sets the revokeOnUnenrollDisabled property value. This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
         * @param value Value to set for the revokeOnUnenrollDisabled property.
         */
        set: function (value) {
            this._revokeOnUnenrollDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "rightsManagementServicesTemplateId", {
        /**
         * Gets the rightsManagementServicesTemplateId property value. TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access
         * @returns a string
         */
        get: function () {
            return this._rightsManagementServicesTemplateId;
        },
        /**
         * Sets the rightsManagementServicesTemplateId property value. TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access
         * @param value Value to set for the rightsManagementServicesTemplateId property.
         */
        set: function (value) {
            this._rightsManagementServicesTemplateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtection.prototype, "smbAutoEncryptedFileExtensions", {
        /**
         * Gets the smbAutoEncryptedFileExtensions property value. Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary
         * @returns a windowsInformationProtectionResourceCollection
         */
        get: function () {
            return this._smbAutoEncryptedFileExtensions;
        },
        /**
         * Sets the smbAutoEncryptedFileExtensions property value. Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary
         * @param value Value to set for the smbAutoEncryptedFileExtensions property.
         */
        set: function (value) {
            this._smbAutoEncryptedFileExtensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WindowsInformationProtection.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(targetedManagedAppPolicyAssignment_1.TargetedManagedAppPolicyAssignment); }],
            ["azureRightsManagementServicesAllowed", function (o, n) { o.azureRightsManagementServicesAllowed = n.getBooleanValue(); }],
            ["dataRecoveryCertificate", function (o, n) { o.dataRecoveryCertificate = n.getObjectValue(WindowsInformationProtectionDataRecoveryCertificate); }],
            ["enforcementLevel", function (o, n) { o.enforcementLevel = n.getObjectValue(WindowsInformationProtectionEnforcementLevel); }],
            ["enterpriseDomain", function (o, n) { o.enterpriseDomain = n.getStringValue(); }],
            ["enterpriseInternalProxyServers", function (o, n) { o.enterpriseInternalProxyServers = n.getCollectionOfPrimitiveValues(); }],
            ["enterpriseIPRanges", function (o, n) { o.enterpriseIPRanges = n.getCollectionOfPrimitiveValues(); }],
            ["enterpriseIPRangesAreAuthoritative", function (o, n) { o.enterpriseIPRangesAreAuthoritative = n.getBooleanValue(); }],
            ["enterpriseNetworkDomainNames", function (o, n) { o.enterpriseNetworkDomainNames = n.getCollectionOfPrimitiveValues(); }],
            ["enterpriseProtectedDomainNames", function (o, n) { o.enterpriseProtectedDomainNames = n.getCollectionOfPrimitiveValues(); }],
            ["enterpriseProxiedDomains", function (o, n) { o.enterpriseProxiedDomains = n.getCollectionOfPrimitiveValues(); }],
            ["enterpriseProxyServers", function (o, n) { o.enterpriseProxyServers = n.getCollectionOfPrimitiveValues(); }],
            ["enterpriseProxyServersAreAuthoritative", function (o, n) { o.enterpriseProxyServersAreAuthoritative = n.getBooleanValue(); }],
            ["exemptAppLockerFiles", function (o, n) { o.exemptAppLockerFiles = n.getCollectionOfObjectValues(windowsInformationProtectionAppLockerFile_1.WindowsInformationProtectionAppLockerFile); }],
            ["exemptApps", function (o, n) { o.exemptApps = n.getCollectionOfPrimitiveValues(); }],
            ["iconsVisible", function (o, n) { o.iconsVisible = n.getBooleanValue(); }],
            ["indexingEncryptedStoresOrItemsBlocked", function (o, n) { o.indexingEncryptedStoresOrItemsBlocked = n.getBooleanValue(); }],
            ["isAssigned", function (o, n) { o.isAssigned = n.getBooleanValue(); }],
            ["neutralDomainResources", function (o, n) { o.neutralDomainResources = n.getCollectionOfPrimitiveValues(); }],
            ["protectedAppLockerFiles", function (o, n) { o.protectedAppLockerFiles = n.getCollectionOfObjectValues(windowsInformationProtectionAppLockerFile_1.WindowsInformationProtectionAppLockerFile); }],
            ["protectedApps", function (o, n) { o.protectedApps = n.getCollectionOfPrimitiveValues(); }],
            ["protectionUnderLockConfigRequired", function (o, n) { o.protectionUnderLockConfigRequired = n.getBooleanValue(); }],
            ["revokeOnUnenrollDisabled", function (o, n) { o.revokeOnUnenrollDisabled = n.getBooleanValue(); }],
            ["rightsManagementServicesTemplateId", function (o, n) { o.rightsManagementServicesTemplateId = n.getStringValue(); }],
            ["smbAutoEncryptedFileExtensions", function (o, n) { o.smbAutoEncryptedFileExtensions = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WindowsInformationProtection.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeBooleanValue("azureRightsManagementServicesAllowed", this.azureRightsManagementServicesAllowed);
        writer.writeObjectValue("dataRecoveryCertificate", this.dataRecoveryCertificate);
        writer.writeObjectValue("enforcementLevel", this.enforcementLevel);
        writer.writeStringValue("enterpriseDomain", this.enterpriseDomain);
        writer.writeCollectionOfPrimitiveValues("enterpriseInternalProxyServers", this.enterpriseInternalProxyServers);
        writer.writeCollectionOfPrimitiveValues("enterpriseIPRanges", this.enterpriseIPRanges);
        writer.writeBooleanValue("enterpriseIPRangesAreAuthoritative", this.enterpriseIPRangesAreAuthoritative);
        writer.writeCollectionOfPrimitiveValues("enterpriseNetworkDomainNames", this.enterpriseNetworkDomainNames);
        writer.writeCollectionOfPrimitiveValues("enterpriseProtectedDomainNames", this.enterpriseProtectedDomainNames);
        writer.writeCollectionOfPrimitiveValues("enterpriseProxiedDomains", this.enterpriseProxiedDomains);
        writer.writeCollectionOfPrimitiveValues("enterpriseProxyServers", this.enterpriseProxyServers);
        writer.writeBooleanValue("enterpriseProxyServersAreAuthoritative", this.enterpriseProxyServersAreAuthoritative);
        writer.writeCollectionOfObjectValues("exemptAppLockerFiles", this.exemptAppLockerFiles);
        writer.writeCollectionOfPrimitiveValues("exemptApps", this.exemptApps);
        writer.writeBooleanValue("iconsVisible", this.iconsVisible);
        writer.writeBooleanValue("indexingEncryptedStoresOrItemsBlocked", this.indexingEncryptedStoresOrItemsBlocked);
        writer.writeBooleanValue("isAssigned", this.isAssigned);
        writer.writeCollectionOfPrimitiveValues("neutralDomainResources", this.neutralDomainResources);
        writer.writeCollectionOfObjectValues("protectedAppLockerFiles", this.protectedAppLockerFiles);
        writer.writeCollectionOfPrimitiveValues("protectedApps", this.protectedApps);
        writer.writeBooleanValue("protectionUnderLockConfigRequired", this.protectionUnderLockConfigRequired);
        writer.writeBooleanValue("revokeOnUnenrollDisabled", this.revokeOnUnenrollDisabled);
        writer.writeStringValue("rightsManagementServicesTemplateId", this.rightsManagementServicesTemplateId);
        writer.writeCollectionOfPrimitiveValues("smbAutoEncryptedFileExtensions", this.smbAutoEncryptedFileExtensions);
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
    return WindowsInformationProtection;
}(managedAppPolicy_1.ManagedAppPolicy));
exports.WindowsInformationProtection = WindowsInformationProtection;
