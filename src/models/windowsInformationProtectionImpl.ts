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

/** Policy for Windows information protection to configure detailed management settings */
export class WindowsInformationProtectionImpl extends ManagedAppPolicyImpl implements Parsable, WindowsInformationProtection {
    /** Navigation property to list of security groups targeted for policy. */
    public assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Specifies whether to allow Azure RMS encryption for WIP */
    public azureRightsManagementServicesAllowed?: boolean | undefined;
    /** Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS) */
    public dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate | undefined;
    /** WIP enforcement level.See the Enum definition for supported values. Possible values are: noProtection, encryptAndAuditOnly, encryptAuditAndPrompt, encryptAuditAndBlock. */
    public enforcementLevel?: WindowsInformationProtectionEnforcementLevel | undefined;
    /** Primary enterprise domain */
    public enterpriseDomain?: string | undefined;
    /** This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies */
    public enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to */
    public enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[] | undefined;
    /** Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false */
    public enterpriseIPRangesAreAuthoritative?: boolean | undefined;
    /** This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to */
    public enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** List of enterprise domains to be protected */
    public enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy */
    public enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[] | undefined;
    /** This is a list of proxy servers. Any server not on this list is considered non-enterprise */
    public enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false */
    public enterpriseProxyServersAreAuthoritative?: boolean | undefined;
    /** Another way to input exempt apps through xml files */
    public exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /** Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data. */
    public exemptApps?: WindowsInformationProtectionApp[] | undefined;
    /** Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app */
    public iconsVisible?: boolean | undefined;
    /** This switch is for the Windows Search Indexer, to allow or disallow indexing of items */
    public indexingEncryptedStoresOrItemsBlocked?: boolean | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    public isAssigned?: boolean | undefined;
    /** List of domain names that can used for work or personal resource */
    public neutralDomainResources?: WindowsInformationProtectionResourceCollection[] | undefined;
    /** Another way to input protected apps through xml files */
    public protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /** Protected applications can access enterprise data and the data handled by those applications are protected with encryption */
    public protectedApps?: WindowsInformationProtectionApp[] | undefined;
    /** Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured */
    public protectionUnderLockConfigRequired?: boolean | undefined;
    /** This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently. */
    public revokeOnUnenrollDisabled?: boolean | undefined;
    /** TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access */
    public rightsManagementServicesTemplateId?: string | undefined;
    /** Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary */
    public smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * Instantiates a new windowsInformationProtection and sets the default values.
     * @param windowsInformationProtectionParameterValue 
     */
    public constructor(windowsInformationProtectionParameterValue?: WindowsInformationProtection | undefined) {
        super();
        this.assignments = windowsInformationProtectionParameterValue?.assignments ;
        this.azureRightsManagementServicesAllowed = windowsInformationProtectionParameterValue?.azureRightsManagementServicesAllowed ;
        this.dataRecoveryCertificate = windowsInformationProtectionParameterValue?.dataRecoveryCertificate ;
        this.enforcementLevel = windowsInformationProtectionParameterValue?.enforcementLevel ;
        this.enterpriseDomain = windowsInformationProtectionParameterValue?.enterpriseDomain ;
        this.enterpriseInternalProxyServers = windowsInformationProtectionParameterValue?.enterpriseInternalProxyServers ;
        this.enterpriseIPRanges = windowsInformationProtectionParameterValue?.enterpriseIPRanges ;
        this.enterpriseIPRangesAreAuthoritative = windowsInformationProtectionParameterValue?.enterpriseIPRangesAreAuthoritative ;
        this.enterpriseNetworkDomainNames = windowsInformationProtectionParameterValue?.enterpriseNetworkDomainNames ;
        this.enterpriseProtectedDomainNames = windowsInformationProtectionParameterValue?.enterpriseProtectedDomainNames ;
        this.enterpriseProxiedDomains = windowsInformationProtectionParameterValue?.enterpriseProxiedDomains ;
        this.enterpriseProxyServers = windowsInformationProtectionParameterValue?.enterpriseProxyServers ;
        this.enterpriseProxyServersAreAuthoritative = windowsInformationProtectionParameterValue?.enterpriseProxyServersAreAuthoritative ;
        this.exemptAppLockerFiles = windowsInformationProtectionParameterValue?.exemptAppLockerFiles ;
        this.exemptApps = windowsInformationProtectionParameterValue?.exemptApps ;
        this.iconsVisible = windowsInformationProtectionParameterValue?.iconsVisible ;
        this.indexingEncryptedStoresOrItemsBlocked = windowsInformationProtectionParameterValue?.indexingEncryptedStoresOrItemsBlocked ;
        this.isAssigned = windowsInformationProtectionParameterValue?.isAssigned ;
        this.neutralDomainResources = windowsInformationProtectionParameterValue?.neutralDomainResources ;
        this.protectedAppLockerFiles = windowsInformationProtectionParameterValue?.protectedAppLockerFiles ;
        this.protectedApps = windowsInformationProtectionParameterValue?.protectedApps ;
        this.protectionUnderLockConfigRequired = windowsInformationProtectionParameterValue?.protectionUnderLockConfigRequired ;
        this.revokeOnUnenrollDisabled = windowsInformationProtectionParameterValue?.revokeOnUnenrollDisabled ;
        this.rightsManagementServicesTemplateId = windowsInformationProtectionParameterValue?.rightsManagementServicesTemplateId ;
        this.smbAutoEncryptedFileExtensions = windowsInformationProtectionParameterValue?.smbAutoEncryptedFileExtensions ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new TargetedManagedAppPolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.azureRightsManagementServicesAllowed){
        writer.writeBooleanValue("azureRightsManagementServicesAllowed", this.azureRightsManagementServicesAllowed);
        }
        if(this.dataRecoveryCertificate){
        writer.writeObjectValue<WindowsInformationProtectionDataRecoveryCertificateImpl>("dataRecoveryCertificate", new WindowsInformationProtectionDataRecoveryCertificateImpl(this.dataRecoveryCertificate));
        }
        if(this.enforcementLevel){
        writer.writeEnumValue<WindowsInformationProtectionEnforcementLevel>("enforcementLevel", this.enforcementLevel);
        }
        if(this.enterpriseDomain){
        writer.writeStringValue("enterpriseDomain", this.enterpriseDomain);
        }
        if(this.enterpriseInternalProxyServers && this.enterpriseInternalProxyServers.length != 0){        const enterpriseInternalProxyServersArrValue: WindowsInformationProtectionResourceCollectionImpl[] = []; this.enterpriseInternalProxyServers?.forEach(element => {enterpriseInternalProxyServersArrValue.push(new WindowsInformationProtectionResourceCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseInternalProxyServers", enterpriseInternalProxyServersArrValue);
        }
        if(this.enterpriseIPRanges && this.enterpriseIPRanges.length != 0){        const enterpriseIPRangesArrValue: WindowsInformationProtectionIPRangeCollectionImpl[] = []; this.enterpriseIPRanges?.forEach(element => {enterpriseIPRangesArrValue.push(new WindowsInformationProtectionIPRangeCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionIPRangeCollectionImpl>("enterpriseIPRanges", enterpriseIPRangesArrValue);
        }
        if(this.enterpriseIPRangesAreAuthoritative){
        writer.writeBooleanValue("enterpriseIPRangesAreAuthoritative", this.enterpriseIPRangesAreAuthoritative);
        }
        if(this.enterpriseNetworkDomainNames && this.enterpriseNetworkDomainNames.length != 0){        const enterpriseNetworkDomainNamesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = []; this.enterpriseNetworkDomainNames?.forEach(element => {enterpriseNetworkDomainNamesArrValue.push(new WindowsInformationProtectionResourceCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseNetworkDomainNames", enterpriseNetworkDomainNamesArrValue);
        }
        if(this.enterpriseProtectedDomainNames && this.enterpriseProtectedDomainNames.length != 0){        const enterpriseProtectedDomainNamesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = []; this.enterpriseProtectedDomainNames?.forEach(element => {enterpriseProtectedDomainNamesArrValue.push(new WindowsInformationProtectionResourceCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseProtectedDomainNames", enterpriseProtectedDomainNamesArrValue);
        }
        if(this.enterpriseProxiedDomains && this.enterpriseProxiedDomains.length != 0){        const enterpriseProxiedDomainsArrValue: WindowsInformationProtectionProxiedDomainCollectionImpl[] = []; this.enterpriseProxiedDomains?.forEach(element => {enterpriseProxiedDomainsArrValue.push(new WindowsInformationProtectionProxiedDomainCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionProxiedDomainCollectionImpl>("enterpriseProxiedDomains", enterpriseProxiedDomainsArrValue);
        }
        if(this.enterpriseProxyServers && this.enterpriseProxyServers.length != 0){        const enterpriseProxyServersArrValue: WindowsInformationProtectionResourceCollectionImpl[] = []; this.enterpriseProxyServers?.forEach(element => {enterpriseProxyServersArrValue.push(new WindowsInformationProtectionResourceCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("enterpriseProxyServers", enterpriseProxyServersArrValue);
        }
        if(this.enterpriseProxyServersAreAuthoritative){
        writer.writeBooleanValue("enterpriseProxyServersAreAuthoritative", this.enterpriseProxyServersAreAuthoritative);
        }
        if(this.exemptAppLockerFiles && this.exemptAppLockerFiles.length != 0){        const exemptAppLockerFilesArrValue: WindowsInformationProtectionAppLockerFileImpl[] = []; this.exemptAppLockerFiles?.forEach(element => {exemptAppLockerFilesArrValue.push(new WindowsInformationProtectionAppLockerFileImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFileImpl>("exemptAppLockerFiles", exemptAppLockerFilesArrValue);
        }
        if(this.exemptApps && this.exemptApps.length != 0){        const exemptAppsArrValue: WindowsInformationProtectionAppImpl[] = []; this.exemptApps?.forEach(element => {exemptAppsArrValue.push(new WindowsInformationProtectionAppImpl(element));});
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
        if(this.neutralDomainResources && this.neutralDomainResources.length != 0){        const neutralDomainResourcesArrValue: WindowsInformationProtectionResourceCollectionImpl[] = []; this.neutralDomainResources?.forEach(element => {neutralDomainResourcesArrValue.push(new WindowsInformationProtectionResourceCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("neutralDomainResources", neutralDomainResourcesArrValue);
        }
        if(this.protectedAppLockerFiles && this.protectedAppLockerFiles.length != 0){        const protectedAppLockerFilesArrValue: WindowsInformationProtectionAppLockerFileImpl[] = []; this.protectedAppLockerFiles?.forEach(element => {protectedAppLockerFilesArrValue.push(new WindowsInformationProtectionAppLockerFileImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFileImpl>("protectedAppLockerFiles", protectedAppLockerFilesArrValue);
        }
        if(this.protectedApps && this.protectedApps.length != 0){        const protectedAppsArrValue: WindowsInformationProtectionAppImpl[] = []; this.protectedApps?.forEach(element => {protectedAppsArrValue.push(new WindowsInformationProtectionAppImpl(element));});
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
        if(this.smbAutoEncryptedFileExtensions && this.smbAutoEncryptedFileExtensions.length != 0){        const smbAutoEncryptedFileExtensionsArrValue: WindowsInformationProtectionResourceCollectionImpl[] = []; this.smbAutoEncryptedFileExtensions?.forEach(element => {smbAutoEncryptedFileExtensionsArrValue.push(new WindowsInformationProtectionResourceCollectionImpl(element));});
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionResourceCollectionImpl>("smbAutoEncryptedFileExtensions", smbAutoEncryptedFileExtensionsArrValue);
        }
    };
}
