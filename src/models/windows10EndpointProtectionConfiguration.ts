import {ApplicationGuardBlockClipboardSharingType} from './applicationGuardBlockClipboardSharingType';
import {ApplicationGuardBlockFileTransferType} from './applicationGuardBlockFileTransferType';
import {AppLockerApplicationControlType} from './appLockerApplicationControlType';
import {createBitLockerRemovableDrivePolicyFromDiscriminatorValue} from './createBitLockerRemovableDrivePolicyFromDiscriminatorValue';
import {createWindowsFirewallNetworkProfileFromDiscriminatorValue} from './createWindowsFirewallNetworkProfileFromDiscriminatorValue';
import {FirewallCertificateRevocationListCheckMethodType} from './firewallCertificateRevocationListCheckMethodType';
import {FirewallPacketQueueingMethodType} from './firewallPacketQueueingMethodType';
import {FirewallPreSharedKeyEncodingMethodType} from './firewallPreSharedKeyEncodingMethodType';
import {BitLockerRemovableDrivePolicy, DeviceConfiguration, WindowsFirewallNetworkProfile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10EndpointProtectionConfiguration extends DeviceConfiguration implements Parsable {
    /** Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.) */
    private _applicationGuardAllowPersistence?: boolean | undefined;
    /** Allow printing to Local Printers from Container */
    private _applicationGuardAllowPrintToLocalPrinters?: boolean | undefined;
    /** Allow printing to Network Printers from Container */
    private _applicationGuardAllowPrintToNetworkPrinters?: boolean | undefined;
    /** Allow printing to PDF from Container */
    private _applicationGuardAllowPrintToPDF?: boolean | undefined;
    /** Allow printing to XPS from Container */
    private _applicationGuardAllowPrintToXPS?: boolean | undefined;
    /** Block clipboard to share data from Host to Container, or from Container to Host, or both ways, or neither ways. Possible values are: notConfigured, blockBoth, blockHostToContainer, blockContainerToHost, blockNone. */
    private _applicationGuardBlockClipboardSharing?: ApplicationGuardBlockClipboardSharingType | undefined;
    /** Block clipboard to transfer image file, text file or neither of them. Possible values are: notConfigured, blockImageAndTextFile, blockImageFile, blockNone, blockTextFile. */
    private _applicationGuardBlockFileTransfer?: ApplicationGuardBlockFileTransferType | undefined;
    /** Block enterprise sites to load non-enterprise content, such as third party plug-ins */
    private _applicationGuardBlockNonEnterpriseContent?: boolean | undefined;
    /** Enable Windows Defender Application Guard */
    private _applicationGuardEnabled?: boolean | undefined;
    /** Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user login-logoff, use of privilege rights, software installation, system changes, etc.) */
    private _applicationGuardForceAuditing?: boolean | undefined;
    /** Enables the Admin to choose what types of app to allow on devices. Possible values are: notConfigured, enforceComponentsAndStoreApps, auditComponentsAndStoreApps, enforceComponentsStoreAppsAndSmartlocker, auditComponentsStoreAppsAndSmartlocker. */
    private _appLockerApplicationControl?: AppLockerApplicationControlType | undefined;
    /** Allows the Admin to disable the warning prompt for other disk encryption on the user machines. */
    private _bitLockerDisableWarningForOtherDiskEncryption?: boolean | undefined;
    /** Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU. */
    private _bitLockerEnableStorageCardEncryptionOnMobile?: boolean | undefined;
    /** Allows the admin to require encryption to be turned on using BitLocker. */
    private _bitLockerEncryptDevice?: boolean | undefined;
    /** BitLocker Removable Drive Policy. */
    private _bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicy | undefined;
    /** List of folder paths to be added to the list of protected folders */
    private _defenderAdditionalGuardedFolders?: string[] | undefined;
    /** List of exe files and folders to be excluded from attack surface reduction rules */
    private _defenderAttackSurfaceReductionExcludedPaths?: string[] | undefined;
    /** Xml content containing information regarding exploit protection details. */
    private _defenderExploitProtectionXml?: string | undefined;
    /** Name of the file from which DefenderExploitProtectionXml was obtained. */
    private _defenderExploitProtectionXmlFileName?: string | undefined;
    /** List of paths to exe that are allowed to access protected folders */
    private _defenderGuardedFoldersAllowedAppPaths?: string[] | undefined;
    /** Indicates whether or not to block user from overriding Exploit Protection settings. */
    private _defenderSecurityCenterBlockExploitProtectionOverride?: boolean | undefined;
    /** Blocks stateful FTP connections to the device */
    private _firewallBlockStatefulFTP?: boolean | undefined;
    /** Specify how the certificate revocation list is to be enforced. Possible values are: deviceDefault, none, attempt, require. */
    private _firewallCertificateRevocationListCheckMethod?: FirewallCertificateRevocationListCheckMethodType | undefined;
    /** Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after which security associations will expire and be deleted. Valid values 300 to 3600 */
    private _firewallIdleTimeoutForSecurityAssociationInSeconds?: number | undefined;
    /** Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic */
    private _firewallIPSecExemptionsAllowDHCP?: boolean | undefined;
    /** Configures IPSec exemptions to allow ICMP */
    private _firewallIPSecExemptionsAllowICMP?: boolean | undefined;
    /** Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes */
    private _firewallIPSecExemptionsAllowNeighborDiscovery?: boolean | undefined;
    /** Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes */
    private _firewallIPSecExemptionsAllowRouterDiscovery?: boolean | undefined;
    /** If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported authentication suites rather than the entire set */
    private _firewallMergeKeyingModuleSettings?: boolean | undefined;
    /** Configures how packet queueing should be applied in the tunnel gateway scenario. Possible values are: deviceDefault, disabled, queueInbound, queueOutbound, queueBoth. */
    private _firewallPacketQueueingMethod?: FirewallPacketQueueingMethodType | undefined;
    /** Select the preshared key encoding to be used. Possible values are: deviceDefault, none, utF8. */
    private _firewallPreSharedKeyEncodingMethod?: FirewallPreSharedKeyEncodingMethodType | undefined;
    /** Configures the firewall profile settings for domain networks */
    private _firewallProfileDomain?: WindowsFirewallNetworkProfile | undefined;
    /** Configures the firewall profile settings for private networks */
    private _firewallProfilePrivate?: WindowsFirewallNetworkProfile | undefined;
    /** Configures the firewall profile settings for public networks */
    private _firewallProfilePublic?: WindowsFirewallNetworkProfile | undefined;
    /** Allows IT Admins to control whether users can can ignore SmartScreen warnings and run malicious files. */
    private _smartScreenBlockOverrideForFiles?: boolean | undefined;
    /** Allows IT Admins to configure SmartScreen for Windows. */
    private _smartScreenEnableInShell?: boolean | undefined;
    /**
     * Gets the applicationGuardAllowPersistence property value. Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.)
     * @returns a boolean
     */
    public get applicationGuardAllowPersistence() {
        return this._applicationGuardAllowPersistence;
    };
    /**
     * Sets the applicationGuardAllowPersistence property value. Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.)
     * @param value Value to set for the applicationGuardAllowPersistence property.
     */
    public set applicationGuardAllowPersistence(value: boolean | undefined) {
        this._applicationGuardAllowPersistence = value;
    };
    /**
     * Gets the applicationGuardAllowPrintToLocalPrinters property value. Allow printing to Local Printers from Container
     * @returns a boolean
     */
    public get applicationGuardAllowPrintToLocalPrinters() {
        return this._applicationGuardAllowPrintToLocalPrinters;
    };
    /**
     * Sets the applicationGuardAllowPrintToLocalPrinters property value. Allow printing to Local Printers from Container
     * @param value Value to set for the applicationGuardAllowPrintToLocalPrinters property.
     */
    public set applicationGuardAllowPrintToLocalPrinters(value: boolean | undefined) {
        this._applicationGuardAllowPrintToLocalPrinters = value;
    };
    /**
     * Gets the applicationGuardAllowPrintToNetworkPrinters property value. Allow printing to Network Printers from Container
     * @returns a boolean
     */
    public get applicationGuardAllowPrintToNetworkPrinters() {
        return this._applicationGuardAllowPrintToNetworkPrinters;
    };
    /**
     * Sets the applicationGuardAllowPrintToNetworkPrinters property value. Allow printing to Network Printers from Container
     * @param value Value to set for the applicationGuardAllowPrintToNetworkPrinters property.
     */
    public set applicationGuardAllowPrintToNetworkPrinters(value: boolean | undefined) {
        this._applicationGuardAllowPrintToNetworkPrinters = value;
    };
    /**
     * Gets the applicationGuardAllowPrintToPDF property value. Allow printing to PDF from Container
     * @returns a boolean
     */
    public get applicationGuardAllowPrintToPDF() {
        return this._applicationGuardAllowPrintToPDF;
    };
    /**
     * Sets the applicationGuardAllowPrintToPDF property value. Allow printing to PDF from Container
     * @param value Value to set for the applicationGuardAllowPrintToPDF property.
     */
    public set applicationGuardAllowPrintToPDF(value: boolean | undefined) {
        this._applicationGuardAllowPrintToPDF = value;
    };
    /**
     * Gets the applicationGuardAllowPrintToXPS property value. Allow printing to XPS from Container
     * @returns a boolean
     */
    public get applicationGuardAllowPrintToXPS() {
        return this._applicationGuardAllowPrintToXPS;
    };
    /**
     * Sets the applicationGuardAllowPrintToXPS property value. Allow printing to XPS from Container
     * @param value Value to set for the applicationGuardAllowPrintToXPS property.
     */
    public set applicationGuardAllowPrintToXPS(value: boolean | undefined) {
        this._applicationGuardAllowPrintToXPS = value;
    };
    /**
     * Gets the applicationGuardBlockClipboardSharing property value. Block clipboard to share data from Host to Container, or from Container to Host, or both ways, or neither ways. Possible values are: notConfigured, blockBoth, blockHostToContainer, blockContainerToHost, blockNone.
     * @returns a applicationGuardBlockClipboardSharingType
     */
    public get applicationGuardBlockClipboardSharing() {
        return this._applicationGuardBlockClipboardSharing;
    };
    /**
     * Sets the applicationGuardBlockClipboardSharing property value. Block clipboard to share data from Host to Container, or from Container to Host, or both ways, or neither ways. Possible values are: notConfigured, blockBoth, blockHostToContainer, blockContainerToHost, blockNone.
     * @param value Value to set for the applicationGuardBlockClipboardSharing property.
     */
    public set applicationGuardBlockClipboardSharing(value: ApplicationGuardBlockClipboardSharingType | undefined) {
        this._applicationGuardBlockClipboardSharing = value;
    };
    /**
     * Gets the applicationGuardBlockFileTransfer property value. Block clipboard to transfer image file, text file or neither of them. Possible values are: notConfigured, blockImageAndTextFile, blockImageFile, blockNone, blockTextFile.
     * @returns a applicationGuardBlockFileTransferType
     */
    public get applicationGuardBlockFileTransfer() {
        return this._applicationGuardBlockFileTransfer;
    };
    /**
     * Sets the applicationGuardBlockFileTransfer property value. Block clipboard to transfer image file, text file or neither of them. Possible values are: notConfigured, blockImageAndTextFile, blockImageFile, blockNone, blockTextFile.
     * @param value Value to set for the applicationGuardBlockFileTransfer property.
     */
    public set applicationGuardBlockFileTransfer(value: ApplicationGuardBlockFileTransferType | undefined) {
        this._applicationGuardBlockFileTransfer = value;
    };
    /**
     * Gets the applicationGuardBlockNonEnterpriseContent property value. Block enterprise sites to load non-enterprise content, such as third party plug-ins
     * @returns a boolean
     */
    public get applicationGuardBlockNonEnterpriseContent() {
        return this._applicationGuardBlockNonEnterpriseContent;
    };
    /**
     * Sets the applicationGuardBlockNonEnterpriseContent property value. Block enterprise sites to load non-enterprise content, such as third party plug-ins
     * @param value Value to set for the applicationGuardBlockNonEnterpriseContent property.
     */
    public set applicationGuardBlockNonEnterpriseContent(value: boolean | undefined) {
        this._applicationGuardBlockNonEnterpriseContent = value;
    };
    /**
     * Gets the applicationGuardEnabled property value. Enable Windows Defender Application Guard
     * @returns a boolean
     */
    public get applicationGuardEnabled() {
        return this._applicationGuardEnabled;
    };
    /**
     * Sets the applicationGuardEnabled property value. Enable Windows Defender Application Guard
     * @param value Value to set for the applicationGuardEnabled property.
     */
    public set applicationGuardEnabled(value: boolean | undefined) {
        this._applicationGuardEnabled = value;
    };
    /**
     * Gets the applicationGuardForceAuditing property value. Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user login-logoff, use of privilege rights, software installation, system changes, etc.)
     * @returns a boolean
     */
    public get applicationGuardForceAuditing() {
        return this._applicationGuardForceAuditing;
    };
    /**
     * Sets the applicationGuardForceAuditing property value. Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user login-logoff, use of privilege rights, software installation, system changes, etc.)
     * @param value Value to set for the applicationGuardForceAuditing property.
     */
    public set applicationGuardForceAuditing(value: boolean | undefined) {
        this._applicationGuardForceAuditing = value;
    };
    /**
     * Gets the appLockerApplicationControl property value. Enables the Admin to choose what types of app to allow on devices. Possible values are: notConfigured, enforceComponentsAndStoreApps, auditComponentsAndStoreApps, enforceComponentsStoreAppsAndSmartlocker, auditComponentsStoreAppsAndSmartlocker.
     * @returns a appLockerApplicationControlType
     */
    public get appLockerApplicationControl() {
        return this._appLockerApplicationControl;
    };
    /**
     * Sets the appLockerApplicationControl property value. Enables the Admin to choose what types of app to allow on devices. Possible values are: notConfigured, enforceComponentsAndStoreApps, auditComponentsAndStoreApps, enforceComponentsStoreAppsAndSmartlocker, auditComponentsStoreAppsAndSmartlocker.
     * @param value Value to set for the appLockerApplicationControl property.
     */
    public set appLockerApplicationControl(value: AppLockerApplicationControlType | undefined) {
        this._appLockerApplicationControl = value;
    };
    /**
     * Gets the bitLockerDisableWarningForOtherDiskEncryption property value. Allows the Admin to disable the warning prompt for other disk encryption on the user machines.
     * @returns a boolean
     */
    public get bitLockerDisableWarningForOtherDiskEncryption() {
        return this._bitLockerDisableWarningForOtherDiskEncryption;
    };
    /**
     * Sets the bitLockerDisableWarningForOtherDiskEncryption property value. Allows the Admin to disable the warning prompt for other disk encryption on the user machines.
     * @param value Value to set for the bitLockerDisableWarningForOtherDiskEncryption property.
     */
    public set bitLockerDisableWarningForOtherDiskEncryption(value: boolean | undefined) {
        this._bitLockerDisableWarningForOtherDiskEncryption = value;
    };
    /**
     * Gets the bitLockerEnableStorageCardEncryptionOnMobile property value. Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU.
     * @returns a boolean
     */
    public get bitLockerEnableStorageCardEncryptionOnMobile() {
        return this._bitLockerEnableStorageCardEncryptionOnMobile;
    };
    /**
     * Sets the bitLockerEnableStorageCardEncryptionOnMobile property value. Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU.
     * @param value Value to set for the bitLockerEnableStorageCardEncryptionOnMobile property.
     */
    public set bitLockerEnableStorageCardEncryptionOnMobile(value: boolean | undefined) {
        this._bitLockerEnableStorageCardEncryptionOnMobile = value;
    };
    /**
     * Gets the bitLockerEncryptDevice property value. Allows the admin to require encryption to be turned on using BitLocker.
     * @returns a boolean
     */
    public get bitLockerEncryptDevice() {
        return this._bitLockerEncryptDevice;
    };
    /**
     * Sets the bitLockerEncryptDevice property value. Allows the admin to require encryption to be turned on using BitLocker.
     * @param value Value to set for the bitLockerEncryptDevice property.
     */
    public set bitLockerEncryptDevice(value: boolean | undefined) {
        this._bitLockerEncryptDevice = value;
    };
    /**
     * Gets the bitLockerRemovableDrivePolicy property value. BitLocker Removable Drive Policy.
     * @returns a bitLockerRemovableDrivePolicy
     */
    public get bitLockerRemovableDrivePolicy() {
        return this._bitLockerRemovableDrivePolicy;
    };
    /**
     * Sets the bitLockerRemovableDrivePolicy property value. BitLocker Removable Drive Policy.
     * @param value Value to set for the bitLockerRemovableDrivePolicy property.
     */
    public set bitLockerRemovableDrivePolicy(value: BitLockerRemovableDrivePolicy | undefined) {
        this._bitLockerRemovableDrivePolicy = value;
    };
    /**
     * Instantiates a new Windows10EndpointProtectionConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defenderAdditionalGuardedFolders property value. List of folder paths to be added to the list of protected folders
     * @returns a string
     */
    public get defenderAdditionalGuardedFolders() {
        return this._defenderAdditionalGuardedFolders;
    };
    /**
     * Sets the defenderAdditionalGuardedFolders property value. List of folder paths to be added to the list of protected folders
     * @param value Value to set for the defenderAdditionalGuardedFolders property.
     */
    public set defenderAdditionalGuardedFolders(value: string[] | undefined) {
        this._defenderAdditionalGuardedFolders = value;
    };
    /**
     * Gets the defenderAttackSurfaceReductionExcludedPaths property value. List of exe files and folders to be excluded from attack surface reduction rules
     * @returns a string
     */
    public get defenderAttackSurfaceReductionExcludedPaths() {
        return this._defenderAttackSurfaceReductionExcludedPaths;
    };
    /**
     * Sets the defenderAttackSurfaceReductionExcludedPaths property value. List of exe files and folders to be excluded from attack surface reduction rules
     * @param value Value to set for the defenderAttackSurfaceReductionExcludedPaths property.
     */
    public set defenderAttackSurfaceReductionExcludedPaths(value: string[] | undefined) {
        this._defenderAttackSurfaceReductionExcludedPaths = value;
    };
    /**
     * Gets the defenderExploitProtectionXml property value. Xml content containing information regarding exploit protection details.
     * @returns a binary
     */
    public get defenderExploitProtectionXml() {
        return this._defenderExploitProtectionXml;
    };
    /**
     * Sets the defenderExploitProtectionXml property value. Xml content containing information regarding exploit protection details.
     * @param value Value to set for the defenderExploitProtectionXml property.
     */
    public set defenderExploitProtectionXml(value: string | undefined) {
        this._defenderExploitProtectionXml = value;
    };
    /**
     * Gets the defenderExploitProtectionXmlFileName property value. Name of the file from which DefenderExploitProtectionXml was obtained.
     * @returns a string
     */
    public get defenderExploitProtectionXmlFileName() {
        return this._defenderExploitProtectionXmlFileName;
    };
    /**
     * Sets the defenderExploitProtectionXmlFileName property value. Name of the file from which DefenderExploitProtectionXml was obtained.
     * @param value Value to set for the defenderExploitProtectionXmlFileName property.
     */
    public set defenderExploitProtectionXmlFileName(value: string | undefined) {
        this._defenderExploitProtectionXmlFileName = value;
    };
    /**
     * Gets the defenderGuardedFoldersAllowedAppPaths property value. List of paths to exe that are allowed to access protected folders
     * @returns a string
     */
    public get defenderGuardedFoldersAllowedAppPaths() {
        return this._defenderGuardedFoldersAllowedAppPaths;
    };
    /**
     * Sets the defenderGuardedFoldersAllowedAppPaths property value. List of paths to exe that are allowed to access protected folders
     * @param value Value to set for the defenderGuardedFoldersAllowedAppPaths property.
     */
    public set defenderGuardedFoldersAllowedAppPaths(value: string[] | undefined) {
        this._defenderGuardedFoldersAllowedAppPaths = value;
    };
    /**
     * Gets the defenderSecurityCenterBlockExploitProtectionOverride property value. Indicates whether or not to block user from overriding Exploit Protection settings.
     * @returns a boolean
     */
    public get defenderSecurityCenterBlockExploitProtectionOverride() {
        return this._defenderSecurityCenterBlockExploitProtectionOverride;
    };
    /**
     * Sets the defenderSecurityCenterBlockExploitProtectionOverride property value. Indicates whether or not to block user from overriding Exploit Protection settings.
     * @param value Value to set for the defenderSecurityCenterBlockExploitProtectionOverride property.
     */
    public set defenderSecurityCenterBlockExploitProtectionOverride(value: boolean | undefined) {
        this._defenderSecurityCenterBlockExploitProtectionOverride = value;
    };
    /**
     * Gets the firewallBlockStatefulFTP property value. Blocks stateful FTP connections to the device
     * @returns a boolean
     */
    public get firewallBlockStatefulFTP() {
        return this._firewallBlockStatefulFTP;
    };
    /**
     * Sets the firewallBlockStatefulFTP property value. Blocks stateful FTP connections to the device
     * @param value Value to set for the firewallBlockStatefulFTP property.
     */
    public set firewallBlockStatefulFTP(value: boolean | undefined) {
        this._firewallBlockStatefulFTP = value;
    };
    /**
     * Gets the firewallCertificateRevocationListCheckMethod property value. Specify how the certificate revocation list is to be enforced. Possible values are: deviceDefault, none, attempt, require.
     * @returns a firewallCertificateRevocationListCheckMethodType
     */
    public get firewallCertificateRevocationListCheckMethod() {
        return this._firewallCertificateRevocationListCheckMethod;
    };
    /**
     * Sets the firewallCertificateRevocationListCheckMethod property value. Specify how the certificate revocation list is to be enforced. Possible values are: deviceDefault, none, attempt, require.
     * @param value Value to set for the firewallCertificateRevocationListCheckMethod property.
     */
    public set firewallCertificateRevocationListCheckMethod(value: FirewallCertificateRevocationListCheckMethodType | undefined) {
        this._firewallCertificateRevocationListCheckMethod = value;
    };
    /**
     * Gets the firewallIdleTimeoutForSecurityAssociationInSeconds property value. Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after which security associations will expire and be deleted. Valid values 300 to 3600
     * @returns a integer
     */
    public get firewallIdleTimeoutForSecurityAssociationInSeconds() {
        return this._firewallIdleTimeoutForSecurityAssociationInSeconds;
    };
    /**
     * Sets the firewallIdleTimeoutForSecurityAssociationInSeconds property value. Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after which security associations will expire and be deleted. Valid values 300 to 3600
     * @param value Value to set for the firewallIdleTimeoutForSecurityAssociationInSeconds property.
     */
    public set firewallIdleTimeoutForSecurityAssociationInSeconds(value: number | undefined) {
        this._firewallIdleTimeoutForSecurityAssociationInSeconds = value;
    };
    /**
     * Gets the firewallIPSecExemptionsAllowDHCP property value. Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic
     * @returns a boolean
     */
    public get firewallIPSecExemptionsAllowDHCP() {
        return this._firewallIPSecExemptionsAllowDHCP;
    };
    /**
     * Sets the firewallIPSecExemptionsAllowDHCP property value. Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic
     * @param value Value to set for the firewallIPSecExemptionsAllowDHCP property.
     */
    public set firewallIPSecExemptionsAllowDHCP(value: boolean | undefined) {
        this._firewallIPSecExemptionsAllowDHCP = value;
    };
    /**
     * Gets the firewallIPSecExemptionsAllowICMP property value. Configures IPSec exemptions to allow ICMP
     * @returns a boolean
     */
    public get firewallIPSecExemptionsAllowICMP() {
        return this._firewallIPSecExemptionsAllowICMP;
    };
    /**
     * Sets the firewallIPSecExemptionsAllowICMP property value. Configures IPSec exemptions to allow ICMP
     * @param value Value to set for the firewallIPSecExemptionsAllowICMP property.
     */
    public set firewallIPSecExemptionsAllowICMP(value: boolean | undefined) {
        this._firewallIPSecExemptionsAllowICMP = value;
    };
    /**
     * Gets the firewallIPSecExemptionsAllowNeighborDiscovery property value. Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes
     * @returns a boolean
     */
    public get firewallIPSecExemptionsAllowNeighborDiscovery() {
        return this._firewallIPSecExemptionsAllowNeighborDiscovery;
    };
    /**
     * Sets the firewallIPSecExemptionsAllowNeighborDiscovery property value. Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes
     * @param value Value to set for the firewallIPSecExemptionsAllowNeighborDiscovery property.
     */
    public set firewallIPSecExemptionsAllowNeighborDiscovery(value: boolean | undefined) {
        this._firewallIPSecExemptionsAllowNeighborDiscovery = value;
    };
    /**
     * Gets the firewallIPSecExemptionsAllowRouterDiscovery property value. Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes
     * @returns a boolean
     */
    public get firewallIPSecExemptionsAllowRouterDiscovery() {
        return this._firewallIPSecExemptionsAllowRouterDiscovery;
    };
    /**
     * Sets the firewallIPSecExemptionsAllowRouterDiscovery property value. Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes
     * @param value Value to set for the firewallIPSecExemptionsAllowRouterDiscovery property.
     */
    public set firewallIPSecExemptionsAllowRouterDiscovery(value: boolean | undefined) {
        this._firewallIPSecExemptionsAllowRouterDiscovery = value;
    };
    /**
     * Gets the firewallMergeKeyingModuleSettings property value. If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported authentication suites rather than the entire set
     * @returns a boolean
     */
    public get firewallMergeKeyingModuleSettings() {
        return this._firewallMergeKeyingModuleSettings;
    };
    /**
     * Sets the firewallMergeKeyingModuleSettings property value. If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported authentication suites rather than the entire set
     * @param value Value to set for the firewallMergeKeyingModuleSettings property.
     */
    public set firewallMergeKeyingModuleSettings(value: boolean | undefined) {
        this._firewallMergeKeyingModuleSettings = value;
    };
    /**
     * Gets the firewallPacketQueueingMethod property value. Configures how packet queueing should be applied in the tunnel gateway scenario. Possible values are: deviceDefault, disabled, queueInbound, queueOutbound, queueBoth.
     * @returns a firewallPacketQueueingMethodType
     */
    public get firewallPacketQueueingMethod() {
        return this._firewallPacketQueueingMethod;
    };
    /**
     * Sets the firewallPacketQueueingMethod property value. Configures how packet queueing should be applied in the tunnel gateway scenario. Possible values are: deviceDefault, disabled, queueInbound, queueOutbound, queueBoth.
     * @param value Value to set for the firewallPacketQueueingMethod property.
     */
    public set firewallPacketQueueingMethod(value: FirewallPacketQueueingMethodType | undefined) {
        this._firewallPacketQueueingMethod = value;
    };
    /**
     * Gets the firewallPreSharedKeyEncodingMethod property value. Select the preshared key encoding to be used. Possible values are: deviceDefault, none, utF8.
     * @returns a firewallPreSharedKeyEncodingMethodType
     */
    public get firewallPreSharedKeyEncodingMethod() {
        return this._firewallPreSharedKeyEncodingMethod;
    };
    /**
     * Sets the firewallPreSharedKeyEncodingMethod property value. Select the preshared key encoding to be used. Possible values are: deviceDefault, none, utF8.
     * @param value Value to set for the firewallPreSharedKeyEncodingMethod property.
     */
    public set firewallPreSharedKeyEncodingMethod(value: FirewallPreSharedKeyEncodingMethodType | undefined) {
        this._firewallPreSharedKeyEncodingMethod = value;
    };
    /**
     * Gets the firewallProfileDomain property value. Configures the firewall profile settings for domain networks
     * @returns a windowsFirewallNetworkProfile
     */
    public get firewallProfileDomain() {
        return this._firewallProfileDomain;
    };
    /**
     * Sets the firewallProfileDomain property value. Configures the firewall profile settings for domain networks
     * @param value Value to set for the firewallProfileDomain property.
     */
    public set firewallProfileDomain(value: WindowsFirewallNetworkProfile | undefined) {
        this._firewallProfileDomain = value;
    };
    /**
     * Gets the firewallProfilePrivate property value. Configures the firewall profile settings for private networks
     * @returns a windowsFirewallNetworkProfile
     */
    public get firewallProfilePrivate() {
        return this._firewallProfilePrivate;
    };
    /**
     * Sets the firewallProfilePrivate property value. Configures the firewall profile settings for private networks
     * @param value Value to set for the firewallProfilePrivate property.
     */
    public set firewallProfilePrivate(value: WindowsFirewallNetworkProfile | undefined) {
        this._firewallProfilePrivate = value;
    };
    /**
     * Gets the firewallProfilePublic property value. Configures the firewall profile settings for public networks
     * @returns a windowsFirewallNetworkProfile
     */
    public get firewallProfilePublic() {
        return this._firewallProfilePublic;
    };
    /**
     * Sets the firewallProfilePublic property value. Configures the firewall profile settings for public networks
     * @param value Value to set for the firewallProfilePublic property.
     */
    public set firewallProfilePublic(value: WindowsFirewallNetworkProfile | undefined) {
        this._firewallProfilePublic = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicationGuardAllowPersistence": n => { this.applicationGuardAllowPersistence = n.getBooleanValue(); },
            "applicationGuardAllowPrintToLocalPrinters": n => { this.applicationGuardAllowPrintToLocalPrinters = n.getBooleanValue(); },
            "applicationGuardAllowPrintToNetworkPrinters": n => { this.applicationGuardAllowPrintToNetworkPrinters = n.getBooleanValue(); },
            "applicationGuardAllowPrintToPDF": n => { this.applicationGuardAllowPrintToPDF = n.getBooleanValue(); },
            "applicationGuardAllowPrintToXPS": n => { this.applicationGuardAllowPrintToXPS = n.getBooleanValue(); },
            "applicationGuardBlockClipboardSharing": n => { this.applicationGuardBlockClipboardSharing = n.getEnumValue<ApplicationGuardBlockClipboardSharingType>(ApplicationGuardBlockClipboardSharingType); },
            "applicationGuardBlockFileTransfer": n => { this.applicationGuardBlockFileTransfer = n.getEnumValue<ApplicationGuardBlockFileTransferType>(ApplicationGuardBlockFileTransferType); },
            "applicationGuardBlockNonEnterpriseContent": n => { this.applicationGuardBlockNonEnterpriseContent = n.getBooleanValue(); },
            "applicationGuardEnabled": n => { this.applicationGuardEnabled = n.getBooleanValue(); },
            "applicationGuardForceAuditing": n => { this.applicationGuardForceAuditing = n.getBooleanValue(); },
            "appLockerApplicationControl": n => { this.appLockerApplicationControl = n.getEnumValue<AppLockerApplicationControlType>(AppLockerApplicationControlType); },
            "bitLockerDisableWarningForOtherDiskEncryption": n => { this.bitLockerDisableWarningForOtherDiskEncryption = n.getBooleanValue(); },
            "bitLockerEnableStorageCardEncryptionOnMobile": n => { this.bitLockerEnableStorageCardEncryptionOnMobile = n.getBooleanValue(); },
            "bitLockerEncryptDevice": n => { this.bitLockerEncryptDevice = n.getBooleanValue(); },
            "bitLockerRemovableDrivePolicy": n => { this.bitLockerRemovableDrivePolicy = n.getObjectValue<BitLockerRemovableDrivePolicy>(createBitLockerRemovableDrivePolicyFromDiscriminatorValue); },
            "defenderAdditionalGuardedFolders": n => { this.defenderAdditionalGuardedFolders = n.getCollectionOfPrimitiveValues<string>(); },
            "defenderAttackSurfaceReductionExcludedPaths": n => { this.defenderAttackSurfaceReductionExcludedPaths = n.getCollectionOfPrimitiveValues<string>(); },
            "defenderExploitProtectionXml": n => { this.defenderExploitProtectionXml = n.getStringValue(); },
            "defenderExploitProtectionXmlFileName": n => { this.defenderExploitProtectionXmlFileName = n.getStringValue(); },
            "defenderGuardedFoldersAllowedAppPaths": n => { this.defenderGuardedFoldersAllowedAppPaths = n.getCollectionOfPrimitiveValues<string>(); },
            "defenderSecurityCenterBlockExploitProtectionOverride": n => { this.defenderSecurityCenterBlockExploitProtectionOverride = n.getBooleanValue(); },
            "firewallBlockStatefulFTP": n => { this.firewallBlockStatefulFTP = n.getBooleanValue(); },
            "firewallCertificateRevocationListCheckMethod": n => { this.firewallCertificateRevocationListCheckMethod = n.getEnumValue<FirewallCertificateRevocationListCheckMethodType>(FirewallCertificateRevocationListCheckMethodType); },
            "firewallIdleTimeoutForSecurityAssociationInSeconds": n => { this.firewallIdleTimeoutForSecurityAssociationInSeconds = n.getNumberValue(); },
            "firewallIPSecExemptionsAllowDHCP": n => { this.firewallIPSecExemptionsAllowDHCP = n.getBooleanValue(); },
            "firewallIPSecExemptionsAllowICMP": n => { this.firewallIPSecExemptionsAllowICMP = n.getBooleanValue(); },
            "firewallIPSecExemptionsAllowNeighborDiscovery": n => { this.firewallIPSecExemptionsAllowNeighborDiscovery = n.getBooleanValue(); },
            "firewallIPSecExemptionsAllowRouterDiscovery": n => { this.firewallIPSecExemptionsAllowRouterDiscovery = n.getBooleanValue(); },
            "firewallMergeKeyingModuleSettings": n => { this.firewallMergeKeyingModuleSettings = n.getBooleanValue(); },
            "firewallPacketQueueingMethod": n => { this.firewallPacketQueueingMethod = n.getEnumValue<FirewallPacketQueueingMethodType>(FirewallPacketQueueingMethodType); },
            "firewallPreSharedKeyEncodingMethod": n => { this.firewallPreSharedKeyEncodingMethod = n.getEnumValue<FirewallPreSharedKeyEncodingMethodType>(FirewallPreSharedKeyEncodingMethodType); },
            "firewallProfileDomain": n => { this.firewallProfileDomain = n.getObjectValue<WindowsFirewallNetworkProfile>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
            "firewallProfilePrivate": n => { this.firewallProfilePrivate = n.getObjectValue<WindowsFirewallNetworkProfile>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
            "firewallProfilePublic": n => { this.firewallProfilePublic = n.getObjectValue<WindowsFirewallNetworkProfile>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
            "smartScreenBlockOverrideForFiles": n => { this.smartScreenBlockOverrideForFiles = n.getBooleanValue(); },
            "smartScreenEnableInShell": n => { this.smartScreenEnableInShell = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("applicationGuardAllowPersistence", this.applicationGuardAllowPersistence);
        writer.writeBooleanValue("applicationGuardAllowPrintToLocalPrinters", this.applicationGuardAllowPrintToLocalPrinters);
        writer.writeBooleanValue("applicationGuardAllowPrintToNetworkPrinters", this.applicationGuardAllowPrintToNetworkPrinters);
        writer.writeBooleanValue("applicationGuardAllowPrintToPDF", this.applicationGuardAllowPrintToPDF);
        writer.writeBooleanValue("applicationGuardAllowPrintToXPS", this.applicationGuardAllowPrintToXPS);
        writer.writeEnumValue<ApplicationGuardBlockClipboardSharingType>("applicationGuardBlockClipboardSharing", this.applicationGuardBlockClipboardSharing);
        writer.writeEnumValue<ApplicationGuardBlockFileTransferType>("applicationGuardBlockFileTransfer", this.applicationGuardBlockFileTransfer);
        writer.writeBooleanValue("applicationGuardBlockNonEnterpriseContent", this.applicationGuardBlockNonEnterpriseContent);
        writer.writeBooleanValue("applicationGuardEnabled", this.applicationGuardEnabled);
        writer.writeBooleanValue("applicationGuardForceAuditing", this.applicationGuardForceAuditing);
        writer.writeEnumValue<AppLockerApplicationControlType>("appLockerApplicationControl", this.appLockerApplicationControl);
        writer.writeBooleanValue("bitLockerDisableWarningForOtherDiskEncryption", this.bitLockerDisableWarningForOtherDiskEncryption);
        writer.writeBooleanValue("bitLockerEnableStorageCardEncryptionOnMobile", this.bitLockerEnableStorageCardEncryptionOnMobile);
        writer.writeBooleanValue("bitLockerEncryptDevice", this.bitLockerEncryptDevice);
        writer.writeObjectValue<BitLockerRemovableDrivePolicy>("bitLockerRemovableDrivePolicy", this.bitLockerRemovableDrivePolicy);
        writer.writeCollectionOfPrimitiveValues<string>("defenderAdditionalGuardedFolders", this.defenderAdditionalGuardedFolders);
        writer.writeCollectionOfPrimitiveValues<string>("defenderAttackSurfaceReductionExcludedPaths", this.defenderAttackSurfaceReductionExcludedPaths);
        writer.writeStringValue("defenderExploitProtectionXml", this.defenderExploitProtectionXml);
        writer.writeStringValue("defenderExploitProtectionXmlFileName", this.defenderExploitProtectionXmlFileName);
        writer.writeCollectionOfPrimitiveValues<string>("defenderGuardedFoldersAllowedAppPaths", this.defenderGuardedFoldersAllowedAppPaths);
        writer.writeBooleanValue("defenderSecurityCenterBlockExploitProtectionOverride", this.defenderSecurityCenterBlockExploitProtectionOverride);
        writer.writeBooleanValue("firewallBlockStatefulFTP", this.firewallBlockStatefulFTP);
        writer.writeEnumValue<FirewallCertificateRevocationListCheckMethodType>("firewallCertificateRevocationListCheckMethod", this.firewallCertificateRevocationListCheckMethod);
        writer.writeNumberValue("firewallIdleTimeoutForSecurityAssociationInSeconds", this.firewallIdleTimeoutForSecurityAssociationInSeconds);
        writer.writeBooleanValue("firewallIPSecExemptionsAllowDHCP", this.firewallIPSecExemptionsAllowDHCP);
        writer.writeBooleanValue("firewallIPSecExemptionsAllowICMP", this.firewallIPSecExemptionsAllowICMP);
        writer.writeBooleanValue("firewallIPSecExemptionsAllowNeighborDiscovery", this.firewallIPSecExemptionsAllowNeighborDiscovery);
        writer.writeBooleanValue("firewallIPSecExemptionsAllowRouterDiscovery", this.firewallIPSecExemptionsAllowRouterDiscovery);
        writer.writeBooleanValue("firewallMergeKeyingModuleSettings", this.firewallMergeKeyingModuleSettings);
        writer.writeEnumValue<FirewallPacketQueueingMethodType>("firewallPacketQueueingMethod", this.firewallPacketQueueingMethod);
        writer.writeEnumValue<FirewallPreSharedKeyEncodingMethodType>("firewallPreSharedKeyEncodingMethod", this.firewallPreSharedKeyEncodingMethod);
        writer.writeObjectValue<WindowsFirewallNetworkProfile>("firewallProfileDomain", this.firewallProfileDomain);
        writer.writeObjectValue<WindowsFirewallNetworkProfile>("firewallProfilePrivate", this.firewallProfilePrivate);
        writer.writeObjectValue<WindowsFirewallNetworkProfile>("firewallProfilePublic", this.firewallProfilePublic);
        writer.writeBooleanValue("smartScreenBlockOverrideForFiles", this.smartScreenBlockOverrideForFiles);
        writer.writeBooleanValue("smartScreenEnableInShell", this.smartScreenEnableInShell);
    };
    /**
     * Gets the smartScreenBlockOverrideForFiles property value. Allows IT Admins to control whether users can can ignore SmartScreen warnings and run malicious files.
     * @returns a boolean
     */
    public get smartScreenBlockOverrideForFiles() {
        return this._smartScreenBlockOverrideForFiles;
    };
    /**
     * Sets the smartScreenBlockOverrideForFiles property value. Allows IT Admins to control whether users can can ignore SmartScreen warnings and run malicious files.
     * @param value Value to set for the smartScreenBlockOverrideForFiles property.
     */
    public set smartScreenBlockOverrideForFiles(value: boolean | undefined) {
        this._smartScreenBlockOverrideForFiles = value;
    };
    /**
     * Gets the smartScreenEnableInShell property value. Allows IT Admins to configure SmartScreen for Windows.
     * @returns a boolean
     */
    public get smartScreenEnableInShell() {
        return this._smartScreenEnableInShell;
    };
    /**
     * Sets the smartScreenEnableInShell property value. Allows IT Admins to configure SmartScreen for Windows.
     * @param value Value to set for the smartScreenEnableInShell property.
     */
    public set smartScreenEnableInShell(value: boolean | undefined) {
        this._smartScreenEnableInShell = value;
    };
}
