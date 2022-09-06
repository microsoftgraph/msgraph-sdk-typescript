import {AndroidCustomConfiguration, AndroidGeneralDeviceConfiguration, AndroidWorkProfileCustomConfiguration, AndroidWorkProfileGeneralDeviceConfiguration, AppleDeviceFeaturesConfigurationBase, DeviceConfiguration, EditionUpgradeConfiguration, IosCertificateProfile, IosCustomConfiguration, IosDeviceFeaturesConfiguration, IosGeneralDeviceConfiguration, IosUpdateConfiguration, MacOSCustomConfiguration, MacOSDeviceFeaturesConfiguration, MacOSGeneralDeviceConfiguration, SharedPCConfiguration, Windows10CustomConfiguration, Windows10EndpointProtectionConfiguration, Windows10EnterpriseModernAppManagementConfiguration, Windows10GeneralConfiguration, Windows10SecureAssessmentConfiguration, Windows10TeamGeneralConfiguration, Windows81GeneralConfiguration, WindowsDefenderAdvancedThreatProtectionConfiguration, WindowsPhone81CustomConfiguration, WindowsPhone81GeneralConfiguration, WindowsUpdateForBusinessConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidCustomConfiguration":
                    return new AndroidCustomConfiguration();
                case "#microsoft.graph.androidGeneralDeviceConfiguration":
                    return new AndroidGeneralDeviceConfiguration();
                case "#microsoft.graph.androidWorkProfileCustomConfiguration":
                    return new AndroidWorkProfileCustomConfiguration();
                case "#microsoft.graph.androidWorkProfileGeneralDeviceConfiguration":
                    return new AndroidWorkProfileGeneralDeviceConfiguration();
                case "#microsoft.graph.appleDeviceFeaturesConfigurationBase":
                    return new AppleDeviceFeaturesConfigurationBase();
                case "#microsoft.graph.editionUpgradeConfiguration":
                    return new EditionUpgradeConfiguration();
                case "#microsoft.graph.iosCertificateProfile":
                    return new IosCertificateProfile();
                case "#microsoft.graph.iosCustomConfiguration":
                    return new IosCustomConfiguration();
                case "#microsoft.graph.iosDeviceFeaturesConfiguration":
                    return new IosDeviceFeaturesConfiguration();
                case "#microsoft.graph.iosGeneralDeviceConfiguration":
                    return new IosGeneralDeviceConfiguration();
                case "#microsoft.graph.iosUpdateConfiguration":
                    return new IosUpdateConfiguration();
                case "#microsoft.graph.macOSCustomConfiguration":
                    return new MacOSCustomConfiguration();
                case "#microsoft.graph.macOSDeviceFeaturesConfiguration":
                    return new MacOSDeviceFeaturesConfiguration();
                case "#microsoft.graph.macOSGeneralDeviceConfiguration":
                    return new MacOSGeneralDeviceConfiguration();
                case "#microsoft.graph.sharedPCConfiguration":
                    return new SharedPCConfiguration();
                case "#microsoft.graph.windows10CustomConfiguration":
                    return new Windows10CustomConfiguration();
                case "#microsoft.graph.windows10EndpointProtectionConfiguration":
                    return new Windows10EndpointProtectionConfiguration();
                case "#microsoft.graph.windows10EnterpriseModernAppManagementConfiguration":
                    return new Windows10EnterpriseModernAppManagementConfiguration();
                case "#microsoft.graph.windows10GeneralConfiguration":
                    return new Windows10GeneralConfiguration();
                case "#microsoft.graph.windows10SecureAssessmentConfiguration":
                    return new Windows10SecureAssessmentConfiguration();
                case "#microsoft.graph.windows10TeamGeneralConfiguration":
                    return new Windows10TeamGeneralConfiguration();
                case "#microsoft.graph.windows81GeneralConfiguration":
                    return new Windows81GeneralConfiguration();
                case "#microsoft.graph.windowsDefenderAdvancedThreatProtectionConfiguration":
                    return new WindowsDefenderAdvancedThreatProtectionConfiguration();
                case "#microsoft.graph.windowsPhone81CustomConfiguration":
                    return new WindowsPhone81CustomConfiguration();
                case "#microsoft.graph.windowsPhone81GeneralConfiguration":
                    return new WindowsPhone81GeneralConfiguration();
                case "#microsoft.graph.windowsUpdateForBusinessConfiguration":
                    return new WindowsUpdateForBusinessConfiguration();
            }
        }
    }
    return new DeviceConfiguration();
}
