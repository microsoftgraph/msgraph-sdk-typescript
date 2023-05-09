import {ApplicationGuardBlockClipboardSharingType} from './applicationGuardBlockClipboardSharingType';
import {ApplicationGuardBlockFileTransferType} from './applicationGuardBlockFileTransferType';
import {AppLockerApplicationControlType} from './appLockerApplicationControlType';
import {BitLockerRemovableDrivePolicy} from './bitLockerRemovableDrivePolicy';
import {createBitLockerRemovableDrivePolicyFromDiscriminatorValue} from './createBitLockerRemovableDrivePolicyFromDiscriminatorValue';
import {createWindowsFirewallNetworkProfileFromDiscriminatorValue} from './createWindowsFirewallNetworkProfileFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {FirewallCertificateRevocationListCheckMethodType} from './firewallCertificateRevocationListCheckMethodType';
import {FirewallPacketQueueingMethodType} from './firewallPacketQueueingMethodType';
import {FirewallPreSharedKeyEncodingMethodType} from './firewallPreSharedKeyEncodingMethodType';
import {serializeBitLockerRemovableDrivePolicy} from './serializeBitLockerRemovableDrivePolicy';
import {serializeWindowsFirewallNetworkProfile} from './serializeWindowsFirewallNetworkProfile';
import {Windows10EndpointProtectionConfiguration} from './windows10EndpointProtectionConfiguration';
import {WindowsFirewallNetworkProfile} from './windowsFirewallNetworkProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10EndpointProtectionConfiguration(windows10EndpointProtectionConfiguration: Windows10EndpointProtectionConfiguration | undefined = {} as Windows10EndpointProtectionConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10EndpointProtectionConfiguration),
        "applicationGuardAllowPersistence": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPersistence = n.getBooleanValue(); },
        "applicationGuardAllowPrintToLocalPrinters": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToLocalPrinters = n.getBooleanValue(); },
        "applicationGuardAllowPrintToNetworkPrinters": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToNetworkPrinters = n.getBooleanValue(); },
        "applicationGuardAllowPrintToPDF": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToPDF = n.getBooleanValue(); },
        "applicationGuardAllowPrintToXPS": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToXPS = n.getBooleanValue(); },
        "applicationGuardBlockClipboardSharing": n => { windows10EndpointProtectionConfiguration.applicationGuardBlockClipboardSharing = n.getEnumValue<ApplicationGuardBlockClipboardSharingType>(ApplicationGuardBlockClipboardSharingType); },
        "applicationGuardBlockFileTransfer": n => { windows10EndpointProtectionConfiguration.applicationGuardBlockFileTransfer = n.getEnumValue<ApplicationGuardBlockFileTransferType>(ApplicationGuardBlockFileTransferType); },
        "applicationGuardBlockNonEnterpriseContent": n => { windows10EndpointProtectionConfiguration.applicationGuardBlockNonEnterpriseContent = n.getBooleanValue(); },
        "applicationGuardEnabled": n => { windows10EndpointProtectionConfiguration.applicationGuardEnabled = n.getBooleanValue(); },
        "applicationGuardForceAuditing": n => { windows10EndpointProtectionConfiguration.applicationGuardForceAuditing = n.getBooleanValue(); },
        "appLockerApplicationControl": n => { windows10EndpointProtectionConfiguration.appLockerApplicationControl = n.getEnumValue<AppLockerApplicationControlType>(AppLockerApplicationControlType); },
        "bitLockerDisableWarningForOtherDiskEncryption": n => { windows10EndpointProtectionConfiguration.bitLockerDisableWarningForOtherDiskEncryption = n.getBooleanValue(); },
        "bitLockerEnableStorageCardEncryptionOnMobile": n => { windows10EndpointProtectionConfiguration.bitLockerEnableStorageCardEncryptionOnMobile = n.getBooleanValue(); },
        "bitLockerEncryptDevice": n => { windows10EndpointProtectionConfiguration.bitLockerEncryptDevice = n.getBooleanValue(); },
        "bitLockerRemovableDrivePolicy": n => { windows10EndpointProtectionConfiguration.bitLockerRemovableDrivePolicy = n.getObjectValue<BitLockerRemovableDrivePolicy>(createBitLockerRemovableDrivePolicyFromDiscriminatorValue); },
        "defenderAdditionalGuardedFolders": n => { windows10EndpointProtectionConfiguration.defenderAdditionalGuardedFolders = n.getCollectionOfPrimitiveValues<string>(); },
        "defenderAttackSurfaceReductionExcludedPaths": n => { windows10EndpointProtectionConfiguration.defenderAttackSurfaceReductionExcludedPaths = n.getCollectionOfPrimitiveValues<string>(); },
        "defenderExploitProtectionXml": n => { windows10EndpointProtectionConfiguration.defenderExploitProtectionXml = n.getStringValue(); },
        "defenderExploitProtectionXmlFileName": n => { windows10EndpointProtectionConfiguration.defenderExploitProtectionXmlFileName = n.getStringValue(); },
        "defenderGuardedFoldersAllowedAppPaths": n => { windows10EndpointProtectionConfiguration.defenderGuardedFoldersAllowedAppPaths = n.getCollectionOfPrimitiveValues<string>(); },
        "defenderSecurityCenterBlockExploitProtectionOverride": n => { windows10EndpointProtectionConfiguration.defenderSecurityCenterBlockExploitProtectionOverride = n.getBooleanValue(); },
        "firewallBlockStatefulFTP": n => { windows10EndpointProtectionConfiguration.firewallBlockStatefulFTP = n.getBooleanValue(); },
        "firewallCertificateRevocationListCheckMethod": n => { windows10EndpointProtectionConfiguration.firewallCertificateRevocationListCheckMethod = n.getEnumValue<FirewallCertificateRevocationListCheckMethodType>(FirewallCertificateRevocationListCheckMethodType); },
        "firewallIdleTimeoutForSecurityAssociationInSeconds": n => { windows10EndpointProtectionConfiguration.firewallIdleTimeoutForSecurityAssociationInSeconds = n.getNumberValue(); },
        "firewallIPSecExemptionsAllowDHCP": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowDHCP = n.getBooleanValue(); },
        "firewallIPSecExemptionsAllowICMP": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowICMP = n.getBooleanValue(); },
        "firewallIPSecExemptionsAllowNeighborDiscovery": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowNeighborDiscovery = n.getBooleanValue(); },
        "firewallIPSecExemptionsAllowRouterDiscovery": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowRouterDiscovery = n.getBooleanValue(); },
        "firewallMergeKeyingModuleSettings": n => { windows10EndpointProtectionConfiguration.firewallMergeKeyingModuleSettings = n.getBooleanValue(); },
        "firewallPacketQueueingMethod": n => { windows10EndpointProtectionConfiguration.firewallPacketQueueingMethod = n.getEnumValue<FirewallPacketQueueingMethodType>(FirewallPacketQueueingMethodType); },
        "firewallPreSharedKeyEncodingMethod": n => { windows10EndpointProtectionConfiguration.firewallPreSharedKeyEncodingMethod = n.getEnumValue<FirewallPreSharedKeyEncodingMethodType>(FirewallPreSharedKeyEncodingMethodType); },
        "firewallProfileDomain": n => { windows10EndpointProtectionConfiguration.firewallProfileDomain = n.getObjectValue<WindowsFirewallNetworkProfile>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
        "firewallProfilePrivate": n => { windows10EndpointProtectionConfiguration.firewallProfilePrivate = n.getObjectValue<WindowsFirewallNetworkProfile>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
        "firewallProfilePublic": n => { windows10EndpointProtectionConfiguration.firewallProfilePublic = n.getObjectValue<WindowsFirewallNetworkProfile>(createWindowsFirewallNetworkProfileFromDiscriminatorValue); },
        "smartScreenBlockOverrideForFiles": n => { windows10EndpointProtectionConfiguration.smartScreenBlockOverrideForFiles = n.getBooleanValue(); },
        "smartScreenEnableInShell": n => { windows10EndpointProtectionConfiguration.smartScreenEnableInShell = n.getBooleanValue(); },
    }
}
