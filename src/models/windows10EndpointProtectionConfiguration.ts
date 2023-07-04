import {ApplicationGuardBlockClipboardSharingType} from './applicationGuardBlockClipboardSharingType';
import {ApplicationGuardBlockFileTransferType} from './applicationGuardBlockFileTransferType';
import {AppLockerApplicationControlType} from './appLockerApplicationControlType';
import {BitLockerRemovableDrivePolicy} from './bitLockerRemovableDrivePolicy';
import {DeviceConfiguration} from './deviceConfiguration';
import {FirewallCertificateRevocationListCheckMethodType} from './firewallCertificateRevocationListCheckMethodType';
import {FirewallPacketQueueingMethodType} from './firewallPacketQueueingMethodType';
import {FirewallPreSharedKeyEncodingMethodType} from './firewallPreSharedKeyEncodingMethodType';
import {WindowsFirewallNetworkProfile} from './windowsFirewallNetworkProfile';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10EndpointProtectionConfiguration extends DeviceConfiguration, Parsable {
    /**
     * Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.)
     */
    applicationGuardAllowPersistence?: boolean | undefined;
    /**
     * Allow printing to Local Printers from Container
     */
    applicationGuardAllowPrintToLocalPrinters?: boolean | undefined;
    /**
     * Allow printing to Network Printers from Container
     */
    applicationGuardAllowPrintToNetworkPrinters?: boolean | undefined;
    /**
     * Allow printing to PDF from Container
     */
    applicationGuardAllowPrintToPDF?: boolean | undefined;
    /**
     * Allow printing to XPS from Container
     */
    applicationGuardAllowPrintToXPS?: boolean | undefined;
    /**
     * Possible values for applicationGuardBlockClipboardSharingType
     */
    applicationGuardBlockClipboardSharing?: ApplicationGuardBlockClipboardSharingType | undefined;
    /**
     * Possible values for applicationGuardBlockFileTransfer
     */
    applicationGuardBlockFileTransfer?: ApplicationGuardBlockFileTransferType | undefined;
    /**
     * Block enterprise sites to load non-enterprise content, such as third party plug-ins
     */
    applicationGuardBlockNonEnterpriseContent?: boolean | undefined;
    /**
     * Enable Windows Defender Application Guard
     */
    applicationGuardEnabled?: boolean | undefined;
    /**
     * Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user login-logoff, use of privilege rights, software installation, system changes, etc.)
     */
    applicationGuardForceAuditing?: boolean | undefined;
    /**
     * Possible values of AppLocker Application Control Types
     */
    appLockerApplicationControl?: AppLockerApplicationControlType | undefined;
    /**
     * Allows the Admin to disable the warning prompt for other disk encryption on the user machines.
     */
    bitLockerDisableWarningForOtherDiskEncryption?: boolean | undefined;
    /**
     * Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU.
     */
    bitLockerEnableStorageCardEncryptionOnMobile?: boolean | undefined;
    /**
     * Allows the admin to require encryption to be turned on using BitLocker.
     */
    bitLockerEncryptDevice?: boolean | undefined;
    /**
     * BitLocker Removable Drive Policy.
     */
    bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicy | undefined;
    /**
     * List of folder paths to be added to the list of protected folders
     */
    defenderAdditionalGuardedFolders?: string[] | undefined;
    /**
     * List of exe files and folders to be excluded from attack surface reduction rules
     */
    defenderAttackSurfaceReductionExcludedPaths?: string[] | undefined;
    /**
     * Xml content containing information regarding exploit protection details.
     */
    defenderExploitProtectionXml?: string | undefined;
    /**
     * Name of the file from which DefenderExploitProtectionXml was obtained.
     */
    defenderExploitProtectionXmlFileName?: string | undefined;
    /**
     * List of paths to exe that are allowed to access protected folders
     */
    defenderGuardedFoldersAllowedAppPaths?: string[] | undefined;
    /**
     * Indicates whether or not to block user from overriding Exploit Protection settings.
     */
    defenderSecurityCenterBlockExploitProtectionOverride?: boolean | undefined;
    /**
     * Blocks stateful FTP connections to the device
     */
    firewallBlockStatefulFTP?: boolean | undefined;
    /**
     * Possible values for firewallCertificateRevocationListCheckMethod
     */
    firewallCertificateRevocationListCheckMethod?: FirewallCertificateRevocationListCheckMethodType | undefined;
    /**
     * Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after which security associations will expire and be deleted. Valid values 300 to 3600
     */
    firewallIdleTimeoutForSecurityAssociationInSeconds?: number | undefined;
    /**
     * Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic
     */
    firewallIPSecExemptionsAllowDHCP?: boolean | undefined;
    /**
     * Configures IPSec exemptions to allow ICMP
     */
    firewallIPSecExemptionsAllowICMP?: boolean | undefined;
    /**
     * Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes
     */
    firewallIPSecExemptionsAllowNeighborDiscovery?: boolean | undefined;
    /**
     * Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes
     */
    firewallIPSecExemptionsAllowRouterDiscovery?: boolean | undefined;
    /**
     * If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported authentication suites rather than the entire set
     */
    firewallMergeKeyingModuleSettings?: boolean | undefined;
    /**
     * Possible values for firewallPacketQueueingMethod
     */
    firewallPacketQueueingMethod?: FirewallPacketQueueingMethodType | undefined;
    /**
     * Possible values for firewallPreSharedKeyEncodingMethod
     */
    firewallPreSharedKeyEncodingMethod?: FirewallPreSharedKeyEncodingMethodType | undefined;
    /**
     * Configures the firewall profile settings for domain networks
     */
    firewallProfileDomain?: WindowsFirewallNetworkProfile | undefined;
    /**
     * Configures the firewall profile settings for private networks
     */
    firewallProfilePrivate?: WindowsFirewallNetworkProfile | undefined;
    /**
     * Configures the firewall profile settings for public networks
     */
    firewallProfilePublic?: WindowsFirewallNetworkProfile | undefined;
    /**
     * Allows IT Admins to control whether users can can ignore SmartScreen warnings and run malicious files.
     */
    smartScreenBlockOverrideForFiles?: boolean | undefined;
    /**
     * Allows IT Admins to configure SmartScreen for Windows.
     */
    smartScreenEnableInShell?: boolean | undefined;
}
