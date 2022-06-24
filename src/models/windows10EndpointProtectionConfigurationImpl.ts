import {ApplicationGuardBlockClipboardSharingType} from './applicationGuardBlockClipboardSharingType';
import {ApplicationGuardBlockFileTransferType} from './applicationGuardBlockFileTransferType';
import {AppLockerApplicationControlType} from './appLockerApplicationControlType';
import {BitLockerRemovableDrivePolicy} from './bitLockerRemovableDrivePolicy';
import {createBitLockerRemovableDrivePolicyFromDiscriminatorValue} from './createBitLockerRemovableDrivePolicyFromDiscriminatorValue';
import {createWindowsFirewallNetworkProfileFromDiscriminatorValue} from './createWindowsFirewallNetworkProfileFromDiscriminatorValue';
import {FirewallCertificateRevocationListCheckMethodType} from './firewallCertificateRevocationListCheckMethodType';
import {FirewallPacketQueueingMethodType} from './firewallPacketQueueingMethodType';
import {FirewallPreSharedKeyEncodingMethodType} from './firewallPreSharedKeyEncodingMethodType';
import {BitLockerRemovableDrivePolicyImpl, DeviceConfigurationImpl, WindowsFirewallNetworkProfileImpl} from './index';
import {Windows10EndpointProtectionConfiguration} from './windows10EndpointProtectionConfiguration';
import {WindowsFirewallNetworkProfile} from './windowsFirewallNetworkProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10EndpointProtectionConfigurationImpl extends DeviceConfigurationImpl implements Windows10EndpointProtectionConfiguration {
    /** Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.) */
    public applicationGuardAllowPersistence?: boolean | undefined;
    /** Allow printing to Local Printers from Container */
    public applicationGuardAllowPrintToLocalPrinters?: boolean | undefined;
    /** Allow printing to Network Printers from Container */
    public applicationGuardAllowPrintToNetworkPrinters?: boolean | undefined;
    /** Allow printing to PDF from Container */
    public applicationGuardAllowPrintToPDF?: boolean | undefined;
    /** Allow printing to XPS from Container */
    public applicationGuardAllowPrintToXPS?: boolean | undefined;
    /** Block clipboard to share data from Host to Container, or from Container to Host, or both ways, or neither ways. Possible values are: notConfigured, blockBoth, blockHostToContainer, blockContainerToHost, blockNone. */
    public applicationGuardBlockClipboardSharing?: ApplicationGuardBlockClipboardSharingType | undefined;
    /** Block clipboard to transfer image file, text file or neither of them. Possible values are: notConfigured, blockImageAndTextFile, blockImageFile, blockNone, blockTextFile. */
    public applicationGuardBlockFileTransfer?: ApplicationGuardBlockFileTransferType | undefined;
    /** Block enterprise sites to load non-enterprise content, such as third party plug-ins */
    public applicationGuardBlockNonEnterpriseContent?: boolean | undefined;
    /** Enable Windows Defender Application Guard */
    public applicationGuardEnabled?: boolean | undefined;
    /** Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user login-logoff, use of privilege rights, software installation, system changes, etc.) */
    public applicationGuardForceAuditing?: boolean | undefined;
    /** Enables the Admin to choose what types of app to allow on devices. Possible values are: notConfigured, enforceComponentsAndStoreApps, auditComponentsAndStoreApps, enforceComponentsStoreAppsAndSmartlocker, auditComponentsStoreAppsAndSmartlocker. */
    public appLockerApplicationControl?: AppLockerApplicationControlType | undefined;
    /** Allows the Admin to disable the warning prompt for other disk encryption on the user machines. */
    public bitLockerDisableWarningForOtherDiskEncryption?: boolean | undefined;
    /** Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU. */
    public bitLockerEnableStorageCardEncryptionOnMobile?: boolean | undefined;
    /** Allows the admin to require encryption to be turned on using BitLocker. */
    public bitLockerEncryptDevice?: boolean | undefined;
    /** BitLocker Removable Drive Policy. */
    public bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicy | undefined;
    /** List of folder paths to be added to the list of protected folders */
    public defenderAdditionalGuardedFolders?: string[] | undefined;
    /** List of exe files and folders to be excluded from attack surface reduction rules */
    public defenderAttackSurfaceReductionExcludedPaths?: string[] | undefined;
    /** Xml content containing information regarding exploit protection details. */
    public defenderExploitProtectionXml?: string | undefined;
    /** Name of the file from which DefenderExploitProtectionXml was obtained. */
    public defenderExploitProtectionXmlFileName?: string | undefined;
    /** List of paths to exe that are allowed to access protected folders */
    public defenderGuardedFoldersAllowedAppPaths?: string[] | undefined;
    /** Indicates whether or not to block user from overriding Exploit Protection settings. */
    public defenderSecurityCenterBlockExploitProtectionOverride?: boolean | undefined;
    /** Blocks stateful FTP connections to the device */
    public firewallBlockStatefulFTP?: boolean | undefined;
    /** Specify how the certificate revocation list is to be enforced. Possible values are: deviceDefault, none, attempt, require. */
    public firewallCertificateRevocationListCheckMethod?: FirewallCertificateRevocationListCheckMethodType | undefined;
    /** Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after which security associations will expire and be deleted. Valid values 300 to 3600 */
    public firewallIdleTimeoutForSecurityAssociationInSeconds?: number | undefined;
    /** Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic */
    public firewallIPSecExemptionsAllowDHCP?: boolean | undefined;
    /** Configures IPSec exemptions to allow ICMP */
    public firewallIPSecExemptionsAllowICMP?: boolean | undefined;
    /** Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes */
    public firewallIPSecExemptionsAllowNeighborDiscovery?: boolean | undefined;
    /** Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes */
    public firewallIPSecExemptionsAllowRouterDiscovery?: boolean | undefined;
    /** If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported authentication suites rather than the entire set */
    public firewallMergeKeyingModuleSettings?: boolean | undefined;
    /** Configures how packet queueing should be applied in the tunnel gateway scenario. Possible values are: deviceDefault, disabled, queueInbound, queueOutbound, queueBoth. */
    public firewallPacketQueueingMethod?: FirewallPacketQueueingMethodType | undefined;
    /** Select the preshared key encoding to be used. Possible values are: deviceDefault, none, utF8. */
    public firewallPreSharedKeyEncodingMethod?: FirewallPreSharedKeyEncodingMethodType | undefined;
    /** Configures the firewall profile settings for domain networks */
    public firewallProfileDomain?: WindowsFirewallNetworkProfile | undefined;
    /** Configures the firewall profile settings for private networks */
    public firewallProfilePrivate?: WindowsFirewallNetworkProfile | undefined;
    /** Configures the firewall profile settings for public networks */
    public firewallProfilePublic?: WindowsFirewallNetworkProfile | undefined;
    /** Allows IT Admins to control whether users can can ignore SmartScreen warnings and run malicious files. */
    public smartScreenBlockOverrideForFiles?: boolean | undefined;
    /** Allows IT Admins to configure SmartScreen for Windows. */
    public smartScreenEnableInShell?: boolean | undefined;
    /**
     * Instantiates a new Windows10EndpointProtectionConfiguration and sets the default values.
     * @param windows10EndpointProtectionConfigurationParameterValue 
     */
    public constructor(windows10EndpointProtectionConfigurationParameterValue?: Windows10EndpointProtectionConfiguration | undefined) {
        super(windows10EndpointProtectionConfigurationParameterValue);
        this.applicationGuardAllowPersistence = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardAllowPersistence;
        this.applicationGuardAllowPrintToLocalPrinters = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardAllowPrintToLocalPrinters;
        this.applicationGuardAllowPrintToNetworkPrinters = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardAllowPrintToNetworkPrinters;
        this.applicationGuardAllowPrintToPDF = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardAllowPrintToPDF;
        this.applicationGuardAllowPrintToXPS = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardAllowPrintToXPS;
        this.applicationGuardBlockClipboardSharing = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardBlockClipboardSharing;
        this.applicationGuardBlockFileTransfer = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardBlockFileTransfer;
        this.applicationGuardBlockNonEnterpriseContent = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardBlockNonEnterpriseContent;
        this.applicationGuardEnabled = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardEnabled;
        this.applicationGuardForceAuditing = windows10EndpointProtectionConfigurationParameterValue?.applicationGuardForceAuditing;
        this.appLockerApplicationControl = windows10EndpointProtectionConfigurationParameterValue?.appLockerApplicationControl;
        this.bitLockerDisableWarningForOtherDiskEncryption = windows10EndpointProtectionConfigurationParameterValue?.bitLockerDisableWarningForOtherDiskEncryption;
        this.bitLockerEnableStorageCardEncryptionOnMobile = windows10EndpointProtectionConfigurationParameterValue?.bitLockerEnableStorageCardEncryptionOnMobile;
        this.bitLockerEncryptDevice = windows10EndpointProtectionConfigurationParameterValue?.bitLockerEncryptDevice;
        this.bitLockerRemovableDrivePolicy = windows10EndpointProtectionConfigurationParameterValue?.bitLockerRemovableDrivePolicy instanceof BitLockerRemovableDrivePolicyImpl? windows10EndpointProtectionConfigurationParameterValue?.bitLockerRemovableDrivePolicy:new BitLockerRemovableDrivePolicyImpl(windows10EndpointProtectionConfigurationParameterValue?.bitLockerRemovableDrivePolicy);
        this.defenderAdditionalGuardedFolders = windows10EndpointProtectionConfigurationParameterValue?.defenderAdditionalGuardedFolders;
        this.defenderAttackSurfaceReductionExcludedPaths = windows10EndpointProtectionConfigurationParameterValue?.defenderAttackSurfaceReductionExcludedPaths;
        this.defenderExploitProtectionXml = windows10EndpointProtectionConfigurationParameterValue?.defenderExploitProtectionXml;
        this.defenderExploitProtectionXmlFileName = windows10EndpointProtectionConfigurationParameterValue?.defenderExploitProtectionXmlFileName;
        this.defenderGuardedFoldersAllowedAppPaths = windows10EndpointProtectionConfigurationParameterValue?.defenderGuardedFoldersAllowedAppPaths;
        this.defenderSecurityCenterBlockExploitProtectionOverride = windows10EndpointProtectionConfigurationParameterValue?.defenderSecurityCenterBlockExploitProtectionOverride;
        this.firewallBlockStatefulFTP = windows10EndpointProtectionConfigurationParameterValue?.firewallBlockStatefulFTP;
        this.firewallCertificateRevocationListCheckMethod = windows10EndpointProtectionConfigurationParameterValue?.firewallCertificateRevocationListCheckMethod;
        this.firewallIdleTimeoutForSecurityAssociationInSeconds = windows10EndpointProtectionConfigurationParameterValue?.firewallIdleTimeoutForSecurityAssociationInSeconds;
        this.firewallIPSecExemptionsAllowDHCP = windows10EndpointProtectionConfigurationParameterValue?.firewallIPSecExemptionsAllowDHCP;
        this.firewallIPSecExemptionsAllowICMP = windows10EndpointProtectionConfigurationParameterValue?.firewallIPSecExemptionsAllowICMP;
        this.firewallIPSecExemptionsAllowNeighborDiscovery = windows10EndpointProtectionConfigurationParameterValue?.firewallIPSecExemptionsAllowNeighborDiscovery;
        this.firewallIPSecExemptionsAllowRouterDiscovery = windows10EndpointProtectionConfigurationParameterValue?.firewallIPSecExemptionsAllowRouterDiscovery;
        this.firewallMergeKeyingModuleSettings = windows10EndpointProtectionConfigurationParameterValue?.firewallMergeKeyingModuleSettings;
        this.firewallPacketQueueingMethod = windows10EndpointProtectionConfigurationParameterValue?.firewallPacketQueueingMethod;
        this.firewallPreSharedKeyEncodingMethod = windows10EndpointProtectionConfigurationParameterValue?.firewallPreSharedKeyEncodingMethod;
        this.firewallProfileDomain = windows10EndpointProtectionConfigurationParameterValue?.firewallProfileDomain instanceof WindowsFirewallNetworkProfileImpl? windows10EndpointProtectionConfigurationParameterValue?.firewallProfileDomain:new WindowsFirewallNetworkProfileImpl(windows10EndpointProtectionConfigurationParameterValue?.firewallProfileDomain);
        this.firewallProfilePrivate = windows10EndpointProtectionConfigurationParameterValue?.firewallProfilePrivate instanceof WindowsFirewallNetworkProfileImpl? windows10EndpointProtectionConfigurationParameterValue?.firewallProfilePrivate:new WindowsFirewallNetworkProfileImpl(windows10EndpointProtectionConfigurationParameterValue?.firewallProfilePrivate);
        this.firewallProfilePublic = windows10EndpointProtectionConfigurationParameterValue?.firewallProfilePublic instanceof WindowsFirewallNetworkProfileImpl? windows10EndpointProtectionConfigurationParameterValue?.firewallProfilePublic:new WindowsFirewallNetworkProfileImpl(windows10EndpointProtectionConfigurationParameterValue?.firewallProfilePublic);
        this.smartScreenBlockOverrideForFiles = windows10EndpointProtectionConfigurationParameterValue?.smartScreenBlockOverrideForFiles;
        this.smartScreenEnableInShell = windows10EndpointProtectionConfigurationParameterValue?.smartScreenEnableInShell;
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
            "bitLockerRemovableDrivePolicy": n => { this.bitLockerRemovableDrivePolicy = n.getObjectValue<BitLockerRemovableDrivePolicyImpl>(createBitLockerRemovableDrivePolicyFromDiscriminatorValue); },
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
            "firewallProfileDomain": n => { this.firewallProfileDomain = n.getObjectValue<WindowsFirewallNetworkProfileImpl>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
            "firewallProfilePrivate": n => { this.firewallProfilePrivate = n.getObjectValue<WindowsFirewallNetworkProfileImpl>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
            "firewallProfilePublic": n => { this.firewallProfilePublic = n.getObjectValue<WindowsFirewallNetworkProfileImpl>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
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
        if(this.applicationGuardAllowPersistence){
            writer.writeBooleanValue("applicationGuardAllowPersistence", this.applicationGuardAllowPersistence);
        }
        if(this.applicationGuardAllowPrintToLocalPrinters){
            writer.writeBooleanValue("applicationGuardAllowPrintToLocalPrinters", this.applicationGuardAllowPrintToLocalPrinters);
        }
        if(this.applicationGuardAllowPrintToNetworkPrinters){
            writer.writeBooleanValue("applicationGuardAllowPrintToNetworkPrinters", this.applicationGuardAllowPrintToNetworkPrinters);
        }
        if(this.applicationGuardAllowPrintToPDF){
            writer.writeBooleanValue("applicationGuardAllowPrintToPDF", this.applicationGuardAllowPrintToPDF);
        }
        if(this.applicationGuardAllowPrintToXPS){
            writer.writeBooleanValue("applicationGuardAllowPrintToXPS", this.applicationGuardAllowPrintToXPS);
        }
        if(this.applicationGuardBlockClipboardSharing){
            writer.writeEnumValue<ApplicationGuardBlockClipboardSharingType>("applicationGuardBlockClipboardSharing", this.applicationGuardBlockClipboardSharing);
        }
        if(this.applicationGuardBlockFileTransfer){
            writer.writeEnumValue<ApplicationGuardBlockFileTransferType>("applicationGuardBlockFileTransfer", this.applicationGuardBlockFileTransfer);
        }
        if(this.applicationGuardBlockNonEnterpriseContent){
            writer.writeBooleanValue("applicationGuardBlockNonEnterpriseContent", this.applicationGuardBlockNonEnterpriseContent);
        }
        if(this.applicationGuardEnabled){
            writer.writeBooleanValue("applicationGuardEnabled", this.applicationGuardEnabled);
        }
        if(this.applicationGuardForceAuditing){
            writer.writeBooleanValue("applicationGuardForceAuditing", this.applicationGuardForceAuditing);
        }
        if(this.appLockerApplicationControl){
            writer.writeEnumValue<AppLockerApplicationControlType>("appLockerApplicationControl", this.appLockerApplicationControl);
        }
        if(this.bitLockerDisableWarningForOtherDiskEncryption){
            writer.writeBooleanValue("bitLockerDisableWarningForOtherDiskEncryption", this.bitLockerDisableWarningForOtherDiskEncryption);
        }
        if(this.bitLockerEnableStorageCardEncryptionOnMobile){
            writer.writeBooleanValue("bitLockerEnableStorageCardEncryptionOnMobile", this.bitLockerEnableStorageCardEncryptionOnMobile);
        }
        if(this.bitLockerEncryptDevice){
            writer.writeBooleanValue("bitLockerEncryptDevice", this.bitLockerEncryptDevice);
        }
        if(this.bitLockerRemovableDrivePolicy){
            writer.writeObjectValue<BitLockerRemovableDrivePolicyImpl>("bitLockerRemovableDrivePolicy", new BitLockerRemovableDrivePolicyImpl(this.bitLockerRemovableDrivePolicy));
        }
        if(this.defenderAdditionalGuardedFolders){
            writer.writeCollectionOfPrimitiveValues<string>("defenderAdditionalGuardedFolders", this.defenderAdditionalGuardedFolders);
        }
        if(this.defenderAttackSurfaceReductionExcludedPaths){
            writer.writeCollectionOfPrimitiveValues<string>("defenderAttackSurfaceReductionExcludedPaths", this.defenderAttackSurfaceReductionExcludedPaths);
        }
        if(this.defenderExploitProtectionXml){
            writer.writeStringValue("defenderExploitProtectionXml", this.defenderExploitProtectionXml);
        }
        if(this.defenderExploitProtectionXmlFileName){
            writer.writeStringValue("defenderExploitProtectionXmlFileName", this.defenderExploitProtectionXmlFileName);
        }
        if(this.defenderGuardedFoldersAllowedAppPaths){
            writer.writeCollectionOfPrimitiveValues<string>("defenderGuardedFoldersAllowedAppPaths", this.defenderGuardedFoldersAllowedAppPaths);
        }
        if(this.defenderSecurityCenterBlockExploitProtectionOverride){
            writer.writeBooleanValue("defenderSecurityCenterBlockExploitProtectionOverride", this.defenderSecurityCenterBlockExploitProtectionOverride);
        }
        if(this.firewallBlockStatefulFTP){
            writer.writeBooleanValue("firewallBlockStatefulFTP", this.firewallBlockStatefulFTP);
        }
        if(this.firewallCertificateRevocationListCheckMethod){
            writer.writeEnumValue<FirewallCertificateRevocationListCheckMethodType>("firewallCertificateRevocationListCheckMethod", this.firewallCertificateRevocationListCheckMethod);
        }
        if(this.firewallIdleTimeoutForSecurityAssociationInSeconds){
            writer.writeNumberValue("firewallIdleTimeoutForSecurityAssociationInSeconds", this.firewallIdleTimeoutForSecurityAssociationInSeconds);
        }
        if(this.firewallIPSecExemptionsAllowDHCP){
            writer.writeBooleanValue("firewallIPSecExemptionsAllowDHCP", this.firewallIPSecExemptionsAllowDHCP);
        }
        if(this.firewallIPSecExemptionsAllowICMP){
            writer.writeBooleanValue("firewallIPSecExemptionsAllowICMP", this.firewallIPSecExemptionsAllowICMP);
        }
        if(this.firewallIPSecExemptionsAllowNeighborDiscovery){
            writer.writeBooleanValue("firewallIPSecExemptionsAllowNeighborDiscovery", this.firewallIPSecExemptionsAllowNeighborDiscovery);
        }
        if(this.firewallIPSecExemptionsAllowRouterDiscovery){
            writer.writeBooleanValue("firewallIPSecExemptionsAllowRouterDiscovery", this.firewallIPSecExemptionsAllowRouterDiscovery);
        }
        if(this.firewallMergeKeyingModuleSettings){
            writer.writeBooleanValue("firewallMergeKeyingModuleSettings", this.firewallMergeKeyingModuleSettings);
        }
        if(this.firewallPacketQueueingMethod){
            writer.writeEnumValue<FirewallPacketQueueingMethodType>("firewallPacketQueueingMethod", this.firewallPacketQueueingMethod);
        }
        if(this.firewallPreSharedKeyEncodingMethod){
            writer.writeEnumValue<FirewallPreSharedKeyEncodingMethodType>("firewallPreSharedKeyEncodingMethod", this.firewallPreSharedKeyEncodingMethod);
        }
        if(this.firewallProfileDomain){
            writer.writeObjectValue<WindowsFirewallNetworkProfileImpl>("firewallProfileDomain", new WindowsFirewallNetworkProfileImpl(this.firewallProfileDomain));
        }
        if(this.firewallProfilePrivate){
            writer.writeObjectValue<WindowsFirewallNetworkProfileImpl>("firewallProfilePrivate", new WindowsFirewallNetworkProfileImpl(this.firewallProfilePrivate));
        }
        if(this.firewallProfilePublic){
            writer.writeObjectValue<WindowsFirewallNetworkProfileImpl>("firewallProfilePublic", new WindowsFirewallNetworkProfileImpl(this.firewallProfilePublic));
        }
        if(this.smartScreenBlockOverrideForFiles){
            writer.writeBooleanValue("smartScreenBlockOverrideForFiles", this.smartScreenBlockOverrideForFiles);
        }
        if(this.smartScreenEnableInShell){
            writer.writeBooleanValue("smartScreenEnableInShell", this.smartScreenEnableInShell);
        }
    };
}
