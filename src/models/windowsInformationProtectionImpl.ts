import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {createWindowsInformationProtectionAppFromDiscriminatorValue} from './createWindowsInformationProtectionAppFromDiscriminatorValue';
import {createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue} from './createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue';
import {createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue} from './createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue';
import {createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue} from './createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue';
import {createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue} from './createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue';
import {createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue} from './createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue';
import {ManagedAppPolicyImpl, TargetedManagedAppPolicyAssignmentImpl, WindowsInformationProtectionAppImpl, WindowsInformationProtectionAppLockerFileImpl, WindowsInformationProtectionDataRecoveryCertificateImpl, WindowsInformationProtectionIPRangeCollectionImpl, WindowsInformationProtectionProxiedDomainCollectionImpl, WindowsInformationProtectionResourceCollectionImpl} from './index';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {WindowsInformationProtection} from './windowsInformationProtection';
import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionDataRecoveryCertificate} from './windowsInformationProtectionDataRecoveryCertificate';
import {WindowsInformationProtectionEnforcementLevel} from './windowsInformationProtectionEnforcementLevel';
import {WindowsInformationProtectionIPRangeCollection} from './windowsInformationProtectionIPRangeCollection';
import {WindowsInformationProtectionProxiedDomainCollection} from './windowsInformationProtectionProxiedDomainCollection';
import {WindowsInformationProtectionResourceCollection} from './windowsInformationProtectionResourceCollection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsInformationProtectionImpl extends ManagedAppPolicyImpl implements WindowsInformationProtection {
    /** Navigation property to list of security groups targeted for policy. */
    private _assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Specifies whether to allow Azure RMS encryption for WIP */
    private _azureRightsManagementServicesAllowed?: boolean | undefined;
    /** Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS) */
    private _dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate | undefined;
    /** WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock. */
    private _enforcementLevel?: WindowsInformationProtectionEnforcementLevel | undefined;
    /** Primary enterprise domain */
    private _enterpriseDomain?: string | undefined;
    /** This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies */
    private _enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to */
    private _enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[] | undefined;
    /** Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false */
    private _enterpriseIPRangesAreAuthoritative?: boolean | undefined;
    /** This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to */
    private _enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** List of enterprise domains to be protected */
    private _enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy */
    private _enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[] | undefined;
    /** This is a list of proxy servers. Any server not on this list is considered non-enterprise */
    private _enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false */
    private _enterpriseProxyServersAreAuthoritative?: boolean | undefined;
    /** Another way to input exempt apps through xml files */
    private _exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /** Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data. */
    private _exemptApps?: WindowsInformationProtectionApp[] | undefined;
    /** Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app */
    private _iconsVisible?: boolean | undefined;
    /** This switch is for the Windows Search Indexer, to allow or disallow indexing of items */
    private _indexingEncryptedStoresOrItemsBlocked?: boolean | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    private _isAssigned?: boolean | undefined;
    /** List of domain names that can used for work or personal resource */
    private _neutralDomainResources?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Another way to input protected apps through xml files */
    private _protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /** Protected applications can access enterprise data and the data handled by those applications are protected with encryption */
    private _protectedApps?: WindowsInformationProtectionApp[] | undefined;
    /** Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured */
    private _protectionUnderLockConfigRequired?: boolean | undefined;
    /** This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently. */
    private _revokeOnUnenrollDisabled?: boolean | undefined;
    /** TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access */
    private _rightsManagementServicesTemplateId?: string | undefined;
    /** Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary */
    private _smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * Gets the assignments property value. Navigation property to list of security groups targeted for policy.
     * @returns a TargetedManagedAppPolicyAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. Navigation property to list of security groups targeted for policy.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TargetedManagedAppPolicyAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof TargetedManagedAppPolicyAssignmentImpl? element as TargetedManagedAppPolicyAssignmentImpl:new TargetedManagedAppPolicyAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Gets the azureRightsManagementServicesAllowed property value. Specifies whether to allow Azure RMS encryption for WIP
     * @returns a boolean
     */
    public get azureRightsManagementServicesAllowed() {
        return this._azureRightsManagementServicesAllowed;
    };
    /**
     * Sets the azureRightsManagementServicesAllowed property value. Specifies whether to allow Azure RMS encryption for WIP
     * @param value Value to set for the azureRightsManagementServicesAllowed property.
     */
    public set azureRightsManagementServicesAllowed(value: boolean | undefined) {
        if(value) {
            this._azureRightsManagementServicesAllowed = value;
        }
    };
    /**
     * Instantiates a new WindowsInformationProtection and sets the default values.
     * @param windowsInformationProtectionParameterValue 
     */
    public constructor(windowsInformationProtectionParameterValue?: WindowsInformationProtection | undefined) {
        super(windowsInformationProtectionParameterValue);
        this._assignments = windowsInformationProtectionParameterValue?.assignments;
        this._azureRightsManagementServicesAllowed = windowsInformationProtectionParameterValue?.azureRightsManagementServicesAllowed;
        this._dataRecoveryCertificate = windowsInformationProtectionParameterValue?.dataRecoveryCertificate;
        this._enforcementLevel = windowsInformationProtectionParameterValue?.enforcementLevel;
        this._enterpriseDomain = windowsInformationProtectionParameterValue?.enterpriseDomain;
        this._enterpriseInternalProxyServers = windowsInformationProtectionParameterValue?.enterpriseInternalProxyServers;
        this._enterpriseIPRanges = windowsInformationProtectionParameterValue?.enterpriseIPRanges;
        this._enterpriseIPRangesAreAuthoritative = windowsInformationProtectionParameterValue?.enterpriseIPRangesAreAuthoritative;
        this._enterpriseNetworkDomainNames = windowsInformationProtectionParameterValue?.enterpriseNetworkDomainNames;
        this._enterpriseProtectedDomainNames = windowsInformationProtectionParameterValue?.enterpriseProtectedDomainNames;
        this._enterpriseProxiedDomains = windowsInformationProtectionParameterValue?.enterpriseProxiedDomains;
        this._enterpriseProxyServers = windowsInformationProtectionParameterValue?.enterpriseProxyServers;
        this._enterpriseProxyServersAreAuthoritative = windowsInformationProtectionParameterValue?.enterpriseProxyServersAreAuthoritative;
        this._exemptAppLockerFiles = windowsInformationProtectionParameterValue?.exemptAppLockerFiles;
        this._exemptApps = windowsInformationProtectionParameterValue?.exemptApps;
        this._iconsVisible = windowsInformationProtectionParameterValue?.iconsVisible;
        this._indexingEncryptedStoresOrItemsBlocked = windowsInformationProtectionParameterValue?.indexingEncryptedStoresOrItemsBlocked;
        this._isAssigned = windowsInformationProtectionParameterValue?.isAssigned;
        this._neutralDomainResources = windowsInformationProtectionParameterValue?.neutralDomainResources;
        this._protectedAppLockerFiles = windowsInformationProtectionParameterValue?.protectedAppLockerFiles;
        this._protectedApps = windowsInformationProtectionParameterValue?.protectedApps;
        this._protectionUnderLockConfigRequired = windowsInformationProtectionParameterValue?.protectionUnderLockConfigRequired;
        this._revokeOnUnenrollDisabled = windowsInformationProtectionParameterValue?.revokeOnUnenrollDisabled;
        this._rightsManagementServicesTemplateId = windowsInformationProtectionParameterValue?.rightsManagementServicesTemplateId;
        this._smbAutoEncryptedFileExtensions = windowsInformationProtectionParameterValue?.smbAutoEncryptedFileExtensions;
    };
    /**
     * Gets the dataRecoveryCertificate property value. Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)
     * @returns a WindowsInformationProtectionDataRecoveryCertificateInterface
     */
    public get dataRecoveryCertificate() {
        return this._dataRecoveryCertificate;
    };
    /**
     * Sets the dataRecoveryCertificate property value. Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)
     * @param value Value to set for the dataRecoveryCertificate property.
     */
    public set dataRecoveryCertificate(value: WindowsInformationProtectionDataRecoveryCertificate | undefined) {
        if(value) {
            this._dataRecoveryCertificate = value instanceof WindowsInformationProtectionDataRecoveryCertificateImpl? value as WindowsInformationProtectionDataRecoveryCertificateImpl: new WindowsInformationProtectionDataRecoveryCertificateImpl(value);
        }
    };
    /**
     * Gets the enforcementLevel property value. WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
     * @returns a windowsInformationProtectionEnforcementLevel
     */
    public get enforcementLevel() {
        return this._enforcementLevel;
    };
    /**
     * Sets the enforcementLevel property value. WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock.
     * @param value Value to set for the enforcementLevel property.
     */
    public set enforcementLevel(value: WindowsInformationProtectionEnforcementLevel | undefined) {
        if(value) {
            this._enforcementLevel = value;
        }
    };
    /**
     * Gets the enterpriseDomain property value. Primary enterprise domain
     * @returns a string
     */
    public get enterpriseDomain() {
        return this._enterpriseDomain;
    };
    /**
     * Sets the enterpriseDomain property value. Primary enterprise domain
     * @param value Value to set for the enterpriseDomain property.
     */
    public set enterpriseDomain(value: string | undefined) {
        if(value) {
            this._enterpriseDomain = value;
        }
    };
    /**
     * Gets the enterpriseInternalProxyServers property value. This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
     * @returns a WindowsInformationProtectionResourceCollectionInterface
     */
    public get enterpriseInternalProxyServers() {
        return this._enterpriseInternalProxyServers;
    };
    /**
     * Sets the enterpriseInternalProxyServers property value. This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
     * @param value Value to set for the enterpriseInternalProxyServers property.
     */
    public set enterpriseInternalProxyServers(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        if(value) {
            const enterpriseInternalProxyServersArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
            this.enterpriseInternalProxyServers?.forEach(element => {
                enterpriseInternalProxyServersArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
            });
            this._enterpriseInternalProxyServers = enterpriseInternalProxyServersArrValue;
        }
    };
    /**
     * Gets the enterpriseIPRanges property value. Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to
     * @returns a WindowsInformationProtectionIPRangeCollectionInterface
     */
    public get enterpriseIPRanges() {
        return this._enterpriseIPRanges;
    };
    /**
     * Sets the enterpriseIPRanges property value. Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to
     * @param value Value to set for the enterpriseIPRanges property.
     */
    public set enterpriseIPRanges(value: WindowsInformationProtectionIPRangeCollection[] | undefined) {
        if(value) {
            const enterpriseIPRangesArrValue: WindowsInformationProtectionIPRangeCollectionImpl[] = [];
            this.enterpriseIPRanges?.forEach(element => {
                enterpriseIPRangesArrValue.push((element instanceof WindowsInformationProtectionIPRangeCollectionImpl? element as WindowsInformationProtectionIPRangeCollectionImpl:new WindowsInformationProtectionIPRangeCollectionImpl(element)));
            });
            this._enterpriseIPRanges = enterpriseIPRangesArrValue;
        }
    };
    /**
     * Gets the enterpriseIPRangesAreAuthoritative property value. Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false
     * @returns a boolean
     */
    public get enterpriseIPRangesAreAuthoritative() {
        return this._enterpriseIPRangesAreAuthoritative;
    };
    /**
     * Sets the enterpriseIPRangesAreAuthoritative property value. Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false
     * @param value Value to set for the enterpriseIPRangesAreAuthoritative property.
     */
    public set enterpriseIPRangesAreAuthoritative(value: boolean | undefined) {
        if(value) {
            this._enterpriseIPRangesAreAuthoritative = value;
        }
    };
    /**
     * Gets the enterpriseNetworkDomainNames property value. This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to
     * @returns a WindowsInformationProtectionResourceCollectionInterface
     */
    public get enterpriseNetworkDomainNames() {
        return this._enterpriseNetworkDomainNames;
    };
    /**
     * Sets the enterpriseNetworkDomainNames property value. This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to
     * @param value Value to set for the enterpriseNetworkDomainNames property.
     */
    public set enterpriseNetworkDomainNames(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        if(value) {
            const enterpriseNetworkDomainNamesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
            this.enterpriseNetworkDomainNames?.forEach(element => {
                enterpriseNetworkDomainNamesArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
            });
            this._enterpriseNetworkDomainNames = enterpriseNetworkDomainNamesArrValue;
        }
    };
    /**
     * Gets the enterpriseProtectedDomainNames property value. List of enterprise domains to be protected
     * @returns a WindowsInformationProtectionResourceCollectionInterface
     */
    public get enterpriseProtectedDomainNames() {
        return this._enterpriseProtectedDomainNames;
    };
    /**
     * Sets the enterpriseProtectedDomainNames property value. List of enterprise domains to be protected
     * @param value Value to set for the enterpriseProtectedDomainNames property.
     */
    public set enterpriseProtectedDomainNames(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        if(value) {
            const enterpriseProtectedDomainNamesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
            this.enterpriseProtectedDomainNames?.forEach(element => {
                enterpriseProtectedDomainNamesArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
            });
            this._enterpriseProtectedDomainNames = enterpriseProtectedDomainNamesArrValue;
        }
    };
    /**
     * Gets the enterpriseProxiedDomains property value. Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy
     * @returns a WindowsInformationProtectionProxiedDomainCollectionInterface
     */
    public get enterpriseProxiedDomains() {
        return this._enterpriseProxiedDomains;
    };
    /**
     * Sets the enterpriseProxiedDomains property value. Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy
     * @param value Value to set for the enterpriseProxiedDomains property.
     */
    public set enterpriseProxiedDomains(value: WindowsInformationProtectionProxiedDomainCollection[] | undefined) {
        if(value) {
            const enterpriseProxiedDomainsArrValue: WindowsInformationProtectionProxiedDomainCollectionImpl[] = [];
            this.enterpriseProxiedDomains?.forEach(element => {
                enterpriseProxiedDomainsArrValue.push((element instanceof WindowsInformationProtectionProxiedDomainCollectionImpl? element as WindowsInformationProtectionProxiedDomainCollectionImpl:new WindowsInformationProtectionProxiedDomainCollectionImpl(element)));
            });
            this._enterpriseProxiedDomains = enterpriseProxiedDomainsArrValue;
        }
    };
    /**
     * Gets the enterpriseProxyServers property value. This is a list of proxy servers. Any server not on this list is considered non-enterprise
     * @returns a WindowsInformationProtectionResourceCollectionInterface
     */
    public get enterpriseProxyServers() {
        return this._enterpriseProxyServers;
    };
    /**
     * Sets the enterpriseProxyServers property value. This is a list of proxy servers. Any server not on this list is considered non-enterprise
     * @param value Value to set for the enterpriseProxyServers property.
     */
    public set enterpriseProxyServers(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        if(value) {
            const enterpriseProxyServersArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
            this.enterpriseProxyServers?.forEach(element => {
                enterpriseProxyServersArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
            });
            this._enterpriseProxyServers = enterpriseProxyServersArrValue;
        }
    };
    /**
     * Gets the enterpriseProxyServersAreAuthoritative property value. Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false
     * @returns a boolean
     */
    public get enterpriseProxyServersAreAuthoritative() {
        return this._enterpriseProxyServersAreAuthoritative;
    };
    /**
     * Sets the enterpriseProxyServersAreAuthoritative property value. Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false
     * @param value Value to set for the enterpriseProxyServersAreAuthoritative property.
     */
    public set enterpriseProxyServersAreAuthoritative(value: boolean | undefined) {
        if(value) {
            this._enterpriseProxyServersAreAuthoritative = value;
        }
    };
    /**
     * Gets the exemptAppLockerFiles property value. Another way to input exempt apps through xml files
     * @returns a WindowsInformationProtectionAppLockerFileInterface
     */
    public get exemptAppLockerFiles() {
        return this._exemptAppLockerFiles;
    };
    /**
     * Sets the exemptAppLockerFiles property value. Another way to input exempt apps through xml files
     * @param value Value to set for the exemptAppLockerFiles property.
     */
    public set exemptAppLockerFiles(value: WindowsInformationProtectionAppLockerFile[] | undefined) {
        if(value) {
            const exemptAppLockerFilesArrValue: WindowsInformationProtectionAppLockerFileImpl[] = [];
            this.exemptAppLockerFiles?.forEach(element => {
                exemptAppLockerFilesArrValue.push((element instanceof WindowsInformationProtectionAppLockerFileImpl? element as WindowsInformationProtectionAppLockerFileImpl:new WindowsInformationProtectionAppLockerFileImpl(element)));
            });
            this._exemptAppLockerFiles = exemptAppLockerFilesArrValue;
        }
    };
    /**
     * Gets the exemptApps property value. Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.
     * @returns a WindowsInformationProtectionAppInterface
     */
    public get exemptApps() {
        return this._exemptApps;
    };
    /**
     * Sets the exemptApps property value. Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.
     * @param value Value to set for the exemptApps property.
     */
    public set exemptApps(value: WindowsInformationProtectionApp[] | undefined) {
        if(value) {
            const exemptAppsArrValue: WindowsInformationProtectionAppImpl[] = [];
            this.exemptApps?.forEach(element => {
                exemptAppsArrValue.push((element instanceof WindowsInformationProtectionAppImpl? element as WindowsInformationProtectionAppImpl:new WindowsInformationProtectionAppImpl(element)));
            });
            this._exemptApps = exemptAppsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
            "azureRightsManagementServicesAllowed": n => { this.azureRightsManagementServicesAllowed = n.getBooleanValue(); },
            "dataRecoveryCertificate": n => { this.dataRecoveryCertificate = n.getObjectValue<WindowsInformationProtectionDataRecoveryCertificateImpl>(createWindowsInformationProtectionDataRecoveryCertificateFromDiscriminatorValue); },
            "enforcementLevel": n => { this.enforcementLevel = n.getEnumValue<WindowsInformationProtectionEnforcementLevel>(WindowsInformationProtectionEnforcementLevel); },
            "enterpriseDomain": n => { this.enterpriseDomain = n.getStringValue(); },
            "enterpriseInternalProxyServers": n => { this.enterpriseInternalProxyServers = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
            "enterpriseIPRanges": n => { this.enterpriseIPRanges = n.getCollectionOfObjectValues<WindowsInformationProtectionIPRangeCollectionImpl>(createWindowsInformationProtectionIPRangeCollectionFromDiscriminatorValue); },
            "enterpriseIPRangesAreAuthoritative": n => { this.enterpriseIPRangesAreAuthoritative = n.getBooleanValue(); },
            "enterpriseNetworkDomainNames": n => { this.enterpriseNetworkDomainNames = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
            "enterpriseProtectedDomainNames": n => { this.enterpriseProtectedDomainNames = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
            "enterpriseProxiedDomains": n => { this.enterpriseProxiedDomains = n.getCollectionOfObjectValues<WindowsInformationProtectionProxiedDomainCollectionImpl>(createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue); },
            "enterpriseProxyServers": n => { this.enterpriseProxyServers = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
            "enterpriseProxyServersAreAuthoritative": n => { this.enterpriseProxyServersAreAuthoritative = n.getBooleanValue(); },
            "exemptAppLockerFiles": n => { this.exemptAppLockerFiles = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFileImpl>(createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue); },
            "exemptApps": n => { this.exemptApps = n.getCollectionOfObjectValues<WindowsInformationProtectionAppImpl>(createWindowsInformationProtectionAppFromDiscriminatorValue); },
            "iconsVisible": n => { this.iconsVisible = n.getBooleanValue(); },
            "indexingEncryptedStoresOrItemsBlocked": n => { this.indexingEncryptedStoresOrItemsBlocked = n.getBooleanValue(); },
            "isAssigned": n => { this.isAssigned = n.getBooleanValue(); },
            "neutralDomainResources": n => { this.neutralDomainResources = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
            "protectedAppLockerFiles": n => { this.protectedAppLockerFiles = n.getCollectionOfObjectValues<WindowsInformationProtectionAppLockerFileImpl>(createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue); },
            "protectedApps": n => { this.protectedApps = n.getCollectionOfObjectValues<WindowsInformationProtectionAppImpl>(createWindowsInformationProtectionAppFromDiscriminatorValue); },
            "protectionUnderLockConfigRequired": n => { this.protectionUnderLockConfigRequired = n.getBooleanValue(); },
            "revokeOnUnenrollDisabled": n => { this.revokeOnUnenrollDisabled = n.getBooleanValue(); },
            "rightsManagementServicesTemplateId": n => { this.rightsManagementServicesTemplateId = n.getStringValue(); },
            "smbAutoEncryptedFileExtensions": n => { this.smbAutoEncryptedFileExtensions = n.getCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>(createWindowsInformationProtectionResourceCollectionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the iconsVisible property value. Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app
     * @returns a boolean
     */
    public get iconsVisible() {
        return this._iconsVisible;
    };
    /**
     * Sets the iconsVisible property value. Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app
     * @param value Value to set for the iconsVisible property.
     */
    public set iconsVisible(value: boolean | undefined) {
        if(value) {
            this._iconsVisible = value;
        }
    };
    /**
     * Gets the indexingEncryptedStoresOrItemsBlocked property value. This switch is for the Windows Search Indexer, to allow or disallow indexing of items
     * @returns a boolean
     */
    public get indexingEncryptedStoresOrItemsBlocked() {
        return this._indexingEncryptedStoresOrItemsBlocked;
    };
    /**
     * Sets the indexingEncryptedStoresOrItemsBlocked property value. This switch is for the Windows Search Indexer, to allow or disallow indexing of items
     * @param value Value to set for the indexingEncryptedStoresOrItemsBlocked property.
     */
    public set indexingEncryptedStoresOrItemsBlocked(value: boolean | undefined) {
        if(value) {
            this._indexingEncryptedStoresOrItemsBlocked = value;
        }
    };
    /**
     * Gets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @returns a boolean
     */
    public get isAssigned() {
        return this._isAssigned;
    };
    /**
     * Sets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @param value Value to set for the isAssigned property.
     */
    public set isAssigned(value: boolean | undefined) {
        if(value) {
            this._isAssigned = value;
        }
    };
    /**
     * Gets the neutralDomainResources property value. List of domain names that can used for work or personal resource
     * @returns a WindowsInformationProtectionResourceCollectionInterface
     */
    public get neutralDomainResources() {
        return this._neutralDomainResources;
    };
    /**
     * Sets the neutralDomainResources property value. List of domain names that can used for work or personal resource
     * @param value Value to set for the neutralDomainResources property.
     */
    public set neutralDomainResources(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        if(value) {
            const neutralDomainResourcesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
            this.neutralDomainResources?.forEach(element => {
                neutralDomainResourcesArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
            });
            this._neutralDomainResources = neutralDomainResourcesArrValue;
        }
    };
    /**
     * Gets the protectedAppLockerFiles property value. Another way to input protected apps through xml files
     * @returns a WindowsInformationProtectionAppLockerFileInterface
     */
    public get protectedAppLockerFiles() {
        return this._protectedAppLockerFiles;
    };
    /**
     * Sets the protectedAppLockerFiles property value. Another way to input protected apps through xml files
     * @param value Value to set for the protectedAppLockerFiles property.
     */
    public set protectedAppLockerFiles(value: WindowsInformationProtectionAppLockerFile[] | undefined) {
        if(value) {
            const protectedAppLockerFilesArrValue: WindowsInformationProtectionAppLockerFileImpl[] = [];
            this.protectedAppLockerFiles?.forEach(element => {
                protectedAppLockerFilesArrValue.push((element instanceof WindowsInformationProtectionAppLockerFileImpl? element as WindowsInformationProtectionAppLockerFileImpl:new WindowsInformationProtectionAppLockerFileImpl(element)));
            });
            this._protectedAppLockerFiles = protectedAppLockerFilesArrValue;
        }
    };
    /**
     * Gets the protectedApps property value. Protected applications can access enterprise data and the data handled by those applications are protected with encryption
     * @returns a WindowsInformationProtectionAppInterface
     */
    public get protectedApps() {
        return this._protectedApps;
    };
    /**
     * Sets the protectedApps property value. Protected applications can access enterprise data and the data handled by those applications are protected with encryption
     * @param value Value to set for the protectedApps property.
     */
    public set protectedApps(value: WindowsInformationProtectionApp[] | undefined) {
        if(value) {
            const protectedAppsArrValue: WindowsInformationProtectionAppImpl[] = [];
            this.protectedApps?.forEach(element => {
                protectedAppsArrValue.push((element instanceof WindowsInformationProtectionAppImpl? element as WindowsInformationProtectionAppImpl:new WindowsInformationProtectionAppImpl(element)));
            });
            this._protectedApps = protectedAppsArrValue;
        }
    };
    /**
     * Gets the protectionUnderLockConfigRequired property value. Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
     * @returns a boolean
     */
    public get protectionUnderLockConfigRequired() {
        return this._protectionUnderLockConfigRequired;
    };
    /**
     * Sets the protectionUnderLockConfigRequired property value. Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
     * @param value Value to set for the protectionUnderLockConfigRequired property.
     */
    public set protectionUnderLockConfigRequired(value: boolean | undefined) {
        if(value) {
            this._protectionUnderLockConfigRequired = value;
        }
    };
    /**
     * Gets the revokeOnUnenrollDisabled property value. This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
     * @returns a boolean
     */
    public get revokeOnUnenrollDisabled() {
        return this._revokeOnUnenrollDisabled;
    };
    /**
     * Sets the revokeOnUnenrollDisabled property value. This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
     * @param value Value to set for the revokeOnUnenrollDisabled property.
     */
    public set revokeOnUnenrollDisabled(value: boolean | undefined) {
        if(value) {
            this._revokeOnUnenrollDisabled = value;
        }
    };
    /**
     * Gets the rightsManagementServicesTemplateId property value. TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access
     * @returns a string
     */
    public get rightsManagementServicesTemplateId() {
        return this._rightsManagementServicesTemplateId;
    };
    /**
     * Sets the rightsManagementServicesTemplateId property value. TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access
     * @param value Value to set for the rightsManagementServicesTemplateId property.
     */
    public set rightsManagementServicesTemplateId(value: string | undefined) {
        if(value) {
            this._rightsManagementServicesTemplateId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof TargetedManagedAppPolicyAssignmentImpl? element as TargetedManagedAppPolicyAssignmentImpl:new TargetedManagedAppPolicyAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.azureRightsManagementServicesAllowed){
            writer.writeBooleanValue("azureRightsManagementServicesAllowed", this.azureRightsManagementServicesAllowed);
        }
        if(this.dataRecoveryCertificate){
            writer.writeObjectValue<WindowsInformationProtectionDataRecoveryCertificateImpl>("dataRecoveryCertificate", (this.dataRecoveryCertificate instanceof WindowsInformationProtectionDataRecoveryCertificateImpl? this.dataRecoveryCertificate as WindowsInformationProtectionDataRecoveryCertificateImpl: new WindowsInformationProtectionDataRecoveryCertificateImpl(this.dataRecoveryCertificate)));
        }
        if(this.enforcementLevel){
            writer.writeEnumValue<WindowsInformationProtectionEnforcementLevel>("enforcementLevel", this.enforcementLevel);
        }
        if(this.enterpriseDomain){
            writer.writeStringValue("enterpriseDomain", this.enterpriseDomain);
        }
        if(this.enterpriseInternalProxyServers && this.enterpriseInternalProxyServers.length != 0){        const enterpriseInternalProxyServersArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
        this.enterpriseInternalProxyServers?.forEach(element => {
            enterpriseInternalProxyServersArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseInternalProxyServers", enterpriseInternalProxyServersArrValue);
        }
        if(this.enterpriseIPRanges && this.enterpriseIPRanges.length != 0){        const enterpriseIPRangesArrValue: WindowsInformationProtectionIPRangeCollectionImpl[] = [];
        this.enterpriseIPRanges?.forEach(element => {
            enterpriseIPRangesArrValue.push((element instanceof WindowsInformationProtectionIPRangeCollectionImpl? element as WindowsInformationProtectionIPRangeCollectionImpl:new WindowsInformationProtectionIPRangeCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionIPRangeCollectionImpl>("enterpriseIPRanges", enterpriseIPRangesArrValue);
        }
        if(this.enterpriseIPRangesAreAuthoritative){
            writer.writeBooleanValue("enterpriseIPRangesAreAuthoritative", this.enterpriseIPRangesAreAuthoritative);
        }
        if(this.enterpriseNetworkDomainNames && this.enterpriseNetworkDomainNames.length != 0){        const enterpriseNetworkDomainNamesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
        this.enterpriseNetworkDomainNames?.forEach(element => {
            enterpriseNetworkDomainNamesArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseNetworkDomainNames", enterpriseNetworkDomainNamesArrValue);
        }
        if(this.enterpriseProtectedDomainNames && this.enterpriseProtectedDomainNames.length != 0){        const enterpriseProtectedDomainNamesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
        this.enterpriseProtectedDomainNames?.forEach(element => {
            enterpriseProtectedDomainNamesArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseProtectedDomainNames", enterpriseProtectedDomainNamesArrValue);
        }
        if(this.enterpriseProxiedDomains && this.enterpriseProxiedDomains.length != 0){        const enterpriseProxiedDomainsArrValue: WindowsInformationProtectionProxiedDomainCollectionImpl[] = [];
        this.enterpriseProxiedDomains?.forEach(element => {
            enterpriseProxiedDomainsArrValue.push((element instanceof WindowsInformationProtectionProxiedDomainCollectionImpl? element as WindowsInformationProtectionProxiedDomainCollectionImpl:new WindowsInformationProtectionProxiedDomainCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionProxiedDomainCollectionImpl>("enterpriseProxiedDomains", enterpriseProxiedDomainsArrValue);
        }
        if(this.enterpriseProxyServers && this.enterpriseProxyServers.length != 0){        const enterpriseProxyServersArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
        this.enterpriseProxyServers?.forEach(element => {
            enterpriseProxyServersArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseProxyServers", enterpriseProxyServersArrValue);
        }
        if(this.enterpriseProxyServersAreAuthoritative){
            writer.writeBooleanValue("enterpriseProxyServersAreAuthoritative", this.enterpriseProxyServersAreAuthoritative);
        }
        if(this.exemptAppLockerFiles && this.exemptAppLockerFiles.length != 0){        const exemptAppLockerFilesArrValue: WindowsInformationProtectionAppLockerFileImpl[] = [];
        this.exemptAppLockerFiles?.forEach(element => {
            exemptAppLockerFilesArrValue.push((element instanceof WindowsInformationProtectionAppLockerFileImpl? element as WindowsInformationProtectionAppLockerFileImpl:new WindowsInformationProtectionAppLockerFileImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFileImpl>("exemptAppLockerFiles", exemptAppLockerFilesArrValue);
        }
        if(this.exemptApps && this.exemptApps.length != 0){        const exemptAppsArrValue: WindowsInformationProtectionAppImpl[] = [];
        this.exemptApps?.forEach(element => {
            exemptAppsArrValue.push((element instanceof WindowsInformationProtectionAppImpl? element as WindowsInformationProtectionAppImpl:new WindowsInformationProtectionAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppImpl>("exemptApps", exemptAppsArrValue);
        }
        if(this.iconsVisible){
            writer.writeBooleanValue("iconsVisible", this.iconsVisible);
        }
        if(this.indexingEncryptedStoresOrItemsBlocked){
            writer.writeBooleanValue("indexingEncryptedStoresOrItemsBlocked", this.indexingEncryptedStoresOrItemsBlocked);
        }
        if(this.isAssigned){
            writer.writeBooleanValue("isAssigned", this.isAssigned);
        }
        if(this.neutralDomainResources && this.neutralDomainResources.length != 0){        const neutralDomainResourcesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
        this.neutralDomainResources?.forEach(element => {
            neutralDomainResourcesArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("neutralDomainResources", neutralDomainResourcesArrValue);
        }
        if(this.protectedAppLockerFiles && this.protectedAppLockerFiles.length != 0){        const protectedAppLockerFilesArrValue: WindowsInformationProtectionAppLockerFileImpl[] = [];
        this.protectedAppLockerFiles?.forEach(element => {
            protectedAppLockerFilesArrValue.push((element instanceof WindowsInformationProtectionAppLockerFileImpl? element as WindowsInformationProtectionAppLockerFileImpl:new WindowsInformationProtectionAppLockerFileImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFileImpl>("protectedAppLockerFiles", protectedAppLockerFilesArrValue);
        }
        if(this.protectedApps && this.protectedApps.length != 0){        const protectedAppsArrValue: WindowsInformationProtectionAppImpl[] = [];
        this.protectedApps?.forEach(element => {
            protectedAppsArrValue.push((element instanceof WindowsInformationProtectionAppImpl? element as WindowsInformationProtectionAppImpl:new WindowsInformationProtectionAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppImpl>("protectedApps", protectedAppsArrValue);
        }
        if(this.protectionUnderLockConfigRequired){
            writer.writeBooleanValue("protectionUnderLockConfigRequired", this.protectionUnderLockConfigRequired);
        }
        if(this.revokeOnUnenrollDisabled){
            writer.writeBooleanValue("revokeOnUnenrollDisabled", this.revokeOnUnenrollDisabled);
        }
        if(this.rightsManagementServicesTemplateId){
            writer.writeStringValue("rightsManagementServicesTemplateId", this.rightsManagementServicesTemplateId);
        }
        if(this.smbAutoEncryptedFileExtensions && this.smbAutoEncryptedFileExtensions.length != 0){        const smbAutoEncryptedFileExtensionsArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
        this.smbAutoEncryptedFileExtensions?.forEach(element => {
            smbAutoEncryptedFileExtensionsArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("smbAutoEncryptedFileExtensions", smbAutoEncryptedFileExtensionsArrValue);
        }
    };
    /**
     * Gets the smbAutoEncryptedFileExtensions property value. Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary
     * @returns a WindowsInformationProtectionResourceCollectionInterface
     */
    public get smbAutoEncryptedFileExtensions() {
        return this._smbAutoEncryptedFileExtensions;
    };
    /**
     * Sets the smbAutoEncryptedFileExtensions property value. Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary
     * @param value Value to set for the smbAutoEncryptedFileExtensions property.
     */
    public set smbAutoEncryptedFileExtensions(value: WindowsInformationProtectionResourceCollection[] | undefined) {
        if(value) {
            const smbAutoEncryptedFileExtensionsArrValue: WindowsInformationProtectionResourceCollectionImpl[] = [];
            this.smbAutoEncryptedFileExtensions?.forEach(element => {
                smbAutoEncryptedFileExtensionsArrValue.push((element instanceof WindowsInformationProtectionResourceCollectionImpl? element as WindowsInformationProtectionResourceCollectionImpl:new WindowsInformationProtectionResourceCollectionImpl(element)));
            });
            this._smbAutoEncryptedFileExtensions = smbAutoEncryptedFileExtensionsArrValue;
        }
    };
}
