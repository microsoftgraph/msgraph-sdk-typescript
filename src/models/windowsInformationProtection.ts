import {ManagedAppPolicy} from './managedAppPolicy';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {WindowsInformationProtectionApp} from './windowsInformationProtectionApp';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionDataRecoveryCertificate} from './windowsInformationProtectionDataRecoveryCertificate';
import {WindowsInformationProtectionEnforcementLevel} from './windowsInformationProtectionEnforcementLevel';
import {WindowsInformationProtectionIPRangeCollection} from './windowsInformationProtectionIPRangeCollection';
import {WindowsInformationProtectionProxiedDomainCollection} from './windowsInformationProtectionProxiedDomainCollection';
import {WindowsInformationProtectionResourceCollection} from './windowsInformationProtectionResourceCollection';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface WindowsInformationProtection extends ManagedAppPolicy, Parsable {
    /**
     * Navigation property to list of security groups targeted for policy.
     */
    assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /**
     * Specifies whether to allow Azure RMS encryption for WIP
     */
    azureRightsManagementServicesAllowed?: boolean | undefined;
    /**
     * Specifies a recovery certificate that can be used for data recovery of encrypted files. This is the same as the data recovery agent(DRA) certificate for encrypting file system(EFS)
     */
    dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate | undefined;
    /**
     * Possible values for WIP Protection enforcement levels
     */
    enforcementLevel?: WindowsInformationProtectionEnforcementLevel | undefined;
    /**
     * Primary enterprise domain
     */
    enterpriseDomain?: string | undefined;
    /**
     * This is the comma-separated list of internal proxy servers. For example, '157.54.14.28, 157.54.11.118, 10.202.14.167, 157.53.14.163, 157.69.210.59'. These proxies have been configured by the admin to connect to specific resources on the Internet. They are considered to be enterprise network locations. The proxies are only leveraged in configuring the EnterpriseProxiedDomains policy to force traffic to the matched domains through these proxies
     */
    enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * Sets the enterprise IP ranges that define the computers in the enterprise network. Data that comes from those computers will be considered part of the enterprise and protected. These locations will be considered a safe destination for enterprise data to be shared to
     */
    enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[] | undefined;
    /**
     * Boolean value that tells the client to accept the configured list and not to use heuristics to attempt to find other subnets. Default is false
     */
    enterpriseIPRangesAreAuthoritative?: boolean | undefined;
    /**
     * This is the list of domains that comprise the boundaries of the enterprise. Data from one of these domains that is sent to a device will be considered enterprise data and protected These locations will be considered a safe destination for enterprise data to be shared to
     */
    enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * List of enterprise domains to be protected
     */
    enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * Contains a list of Enterprise resource domains hosted in the cloud that need to be protected. Connections to these resources are considered enterprise data. If a proxy is paired with a cloud resource, traffic to the cloud resource will be routed through the enterprise network via the denoted proxy server (on Port 80). A proxy server used for this purpose must also be configured using the EnterpriseInternalProxyServers policy
     */
    enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[] | undefined;
    /**
     * This is a list of proxy servers. Any server not on this list is considered non-enterprise
     */
    enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * Boolean value that tells the client to accept the configured list of proxies and not try to detect other work proxies. Default is false
     */
    enterpriseProxyServersAreAuthoritative?: boolean | undefined;
    /**
     * Another way to input exempt apps through xml files
     */
    exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /**
     * Exempt applications can also access enterprise data, but the data handled by those applications are not protected. This is because some critical enterprise applications may have compatibility problems with encrypted data.
     */
    exemptApps?: WindowsInformationProtectionApp[] | undefined;
    /**
     * Determines whether overlays are added to icons for WIP protected files in Explorer and enterprise only app tiles in the Start menu. Starting in Windows 10, version 1703 this setting also configures the visibility of the WIP icon in the title bar of a WIP-protected app
     */
    iconsVisible?: boolean | undefined;
    /**
     * This switch is for the Windows Search Indexer, to allow or disallow indexing of items
     */
    indexingEncryptedStoresOrItemsBlocked?: boolean | undefined;
    /**
     * Indicates if the policy is deployed to any inclusion groups or not.
     */
    isAssigned?: boolean | undefined;
    /**
     * List of domain names that can used for work or personal resource
     */
    neutralDomainResources?: WindowsInformationProtectionResourceCollection[] | undefined;
    /**
     * Another way to input protected apps through xml files
     */
    protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[] | undefined;
    /**
     * Protected applications can access enterprise data and the data handled by those applications are protected with encryption
     */
    protectedApps?: WindowsInformationProtectionApp[] | undefined;
    /**
     * Specifies whether the protection under lock feature (also known as encrypt under pin) should be configured
     */
    protectionUnderLockConfigRequired?: boolean | undefined;
    /**
     * This policy controls whether to revoke the WIP keys when a device unenrolls from the management service. If set to 1 (Don't revoke keys), the keys will not be revoked and the user will continue to have access to protected files after unenrollment. If the keys are not revoked, there will be no revoked file cleanup subsequently.
     */
    revokeOnUnenrollDisabled?: boolean | undefined;
    /**
     * TemplateID GUID to use for RMS encryption. The RMS template allows the IT admin to configure the details about who has access to RMS-protected file and how long they have access
     */
    rightsManagementServicesTemplateId?: Guid | undefined;
    /**
     * Specifies a list of file extensions, so that files with these extensions are encrypted when copying from an SMB share within the corporate boundary
     */
    smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[] | undefined;
}
