import {deserializeIntoAndroidCustomConfiguration} from './deserializeIntoAndroidCustomConfiguration';
import {deserializeIntoAndroidGeneralDeviceConfiguration} from './deserializeIntoAndroidGeneralDeviceConfiguration';
import {deserializeIntoAndroidWorkProfileCustomConfiguration} from './deserializeIntoAndroidWorkProfileCustomConfiguration';
import {deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration} from './deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration';
import {deserializeIntoAppleDeviceFeaturesConfigurationBase} from './deserializeIntoAppleDeviceFeaturesConfigurationBase';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoEditionUpgradeConfiguration} from './deserializeIntoEditionUpgradeConfiguration';
import {deserializeIntoIosCertificateProfile} from './deserializeIntoIosCertificateProfile';
import {deserializeIntoIosCustomConfiguration} from './deserializeIntoIosCustomConfiguration';
import {deserializeIntoIosDeviceFeaturesConfiguration} from './deserializeIntoIosDeviceFeaturesConfiguration';
import {deserializeIntoIosGeneralDeviceConfiguration} from './deserializeIntoIosGeneralDeviceConfiguration';
import {deserializeIntoIosUpdateConfiguration} from './deserializeIntoIosUpdateConfiguration';
import {deserializeIntoMacOSCustomConfiguration} from './deserializeIntoMacOSCustomConfiguration';
import {deserializeIntoMacOSDeviceFeaturesConfiguration} from './deserializeIntoMacOSDeviceFeaturesConfiguration';
import {deserializeIntoMacOSGeneralDeviceConfiguration} from './deserializeIntoMacOSGeneralDeviceConfiguration';
import {deserializeIntoSharedPCConfiguration} from './deserializeIntoSharedPCConfiguration';
import {deserializeIntoWindows10CustomConfiguration} from './deserializeIntoWindows10CustomConfiguration';
import {deserializeIntoWindows10EndpointProtectionConfiguration} from './deserializeIntoWindows10EndpointProtectionConfiguration';
import {deserializeIntoWindows10EnterpriseModernAppManagementConfiguration} from './deserializeIntoWindows10EnterpriseModernAppManagementConfiguration';
import {deserializeIntoWindows10GeneralConfiguration} from './deserializeIntoWindows10GeneralConfiguration';
import {deserializeIntoWindows10SecureAssessmentConfiguration} from './deserializeIntoWindows10SecureAssessmentConfiguration';
import {deserializeIntoWindows10TeamGeneralConfiguration} from './deserializeIntoWindows10TeamGeneralConfiguration';
import {deserializeIntoWindows81GeneralConfiguration} from './deserializeIntoWindows81GeneralConfiguration';
import {deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration} from './deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration';
import {deserializeIntoWindowsPhone81CustomConfiguration} from './deserializeIntoWindowsPhone81CustomConfiguration';
import {deserializeIntoWindowsPhone81GeneralConfiguration} from './deserializeIntoWindowsPhone81GeneralConfiguration';
import {deserializeIntoWindowsUpdateForBusinessConfiguration} from './deserializeIntoWindowsUpdateForBusinessConfiguration';
import {AndroidCustomConfiguration, AndroidGeneralDeviceConfiguration, AndroidWorkProfileCustomConfiguration, AndroidWorkProfileGeneralDeviceConfiguration, AppleDeviceFeaturesConfigurationBase, DeviceConfiguration, EditionUpgradeConfiguration, IosCertificateProfile, IosCustomConfiguration, IosDeviceFeaturesConfiguration, IosGeneralDeviceConfiguration, IosUpdateConfiguration, MacOSCustomConfiguration, MacOSDeviceFeaturesConfiguration, MacOSGeneralDeviceConfiguration, SharedPCConfiguration, Windows10CustomConfiguration, Windows10EndpointProtectionConfiguration, Windows10EnterpriseModernAppManagementConfiguration, Windows10GeneralConfiguration, Windows10SecureAssessmentConfiguration, Windows10TeamGeneralConfiguration, Windows81GeneralConfiguration, WindowsDefenderAdvancedThreatProtectionConfiguration, WindowsPhone81CustomConfiguration, WindowsPhone81GeneralConfiguration, WindowsUpdateForBusinessConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidCustomConfiguration":
                    return deserializeIntoAndroidCustomConfiguration;
                case "#microsoft.graph.androidGeneralDeviceConfiguration":
                    return deserializeIntoAndroidGeneralDeviceConfiguration;
                case "#microsoft.graph.androidWorkProfileCustomConfiguration":
                    return deserializeIntoAndroidWorkProfileCustomConfiguration;
                case "#microsoft.graph.androidWorkProfileGeneralDeviceConfiguration":
                    return deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration;
                case "#microsoft.graph.appleDeviceFeaturesConfigurationBase":
                    return deserializeIntoAppleDeviceFeaturesConfigurationBase;
                case "#microsoft.graph.editionUpgradeConfiguration":
                    return deserializeIntoEditionUpgradeConfiguration;
                case "#microsoft.graph.iosCertificateProfile":
                    return deserializeIntoIosCertificateProfile;
                case "#microsoft.graph.iosCustomConfiguration":
                    return deserializeIntoIosCustomConfiguration;
                case "#microsoft.graph.iosDeviceFeaturesConfiguration":
                    return deserializeIntoIosDeviceFeaturesConfiguration;
                case "#microsoft.graph.iosGeneralDeviceConfiguration":
                    return deserializeIntoIosGeneralDeviceConfiguration;
                case "#microsoft.graph.iosUpdateConfiguration":
                    return deserializeIntoIosUpdateConfiguration;
                case "#microsoft.graph.macOSCustomConfiguration":
                    return deserializeIntoMacOSCustomConfiguration;
                case "#microsoft.graph.macOSDeviceFeaturesConfiguration":
                    return deserializeIntoMacOSDeviceFeaturesConfiguration;
                case "#microsoft.graph.macOSGeneralDeviceConfiguration":
                    return deserializeIntoMacOSGeneralDeviceConfiguration;
                case "#microsoft.graph.sharedPCConfiguration":
                    return deserializeIntoSharedPCConfiguration;
                case "#microsoft.graph.windows10CustomConfiguration":
                    return deserializeIntoWindows10CustomConfiguration;
                case "#microsoft.graph.windows10EndpointProtectionConfiguration":
                    return deserializeIntoWindows10EndpointProtectionConfiguration;
                case "#microsoft.graph.windows10EnterpriseModernAppManagementConfiguration":
                    return deserializeIntoWindows10EnterpriseModernAppManagementConfiguration;
                case "#microsoft.graph.windows10GeneralConfiguration":
                    return deserializeIntoWindows10GeneralConfiguration;
                case "#microsoft.graph.windows10SecureAssessmentConfiguration":
                    return deserializeIntoWindows10SecureAssessmentConfiguration;
                case "#microsoft.graph.windows10TeamGeneralConfiguration":
                    return deserializeIntoWindows10TeamGeneralConfiguration;
                case "#microsoft.graph.windows81GeneralConfiguration":
                    return deserializeIntoWindows81GeneralConfiguration;
                case "#microsoft.graph.windowsDefenderAdvancedThreatProtectionConfiguration":
                    return deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration;
                case "#microsoft.graph.windowsPhone81CustomConfiguration":
                    return deserializeIntoWindowsPhone81CustomConfiguration;
                case "#microsoft.graph.windowsPhone81GeneralConfiguration":
                    return deserializeIntoWindowsPhone81GeneralConfiguration;
                case "#microsoft.graph.windowsUpdateForBusinessConfiguration":
                    return deserializeIntoWindowsUpdateForBusinessConfiguration;
            }
        }
    }
    return deserializeIntoDeviceConfiguration;
}
