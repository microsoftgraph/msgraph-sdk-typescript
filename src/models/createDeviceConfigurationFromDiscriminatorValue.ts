import {AndroidCustomConfigurationImpl, AndroidGeneralDeviceConfigurationImpl, AndroidWorkProfileCustomConfigurationImpl, AndroidWorkProfileGeneralDeviceConfigurationImpl, AppleDeviceFeaturesConfigurationBaseImpl, DeviceConfigurationImpl, EditionUpgradeConfigurationImpl, IosCertificateProfileImpl, IosCustomConfigurationImpl, IosGeneralDeviceConfigurationImpl, IosUpdateConfigurationImpl, MacOSCustomConfigurationImpl, MacOSGeneralDeviceConfigurationImpl, SharedPCConfigurationImpl, Windows10CustomConfigurationImpl, Windows10EndpointProtectionConfigurationImpl, Windows10EnterpriseModernAppManagementConfigurationImpl, Windows10GeneralConfigurationImpl, Windows10SecureAssessmentConfigurationImpl, Windows10TeamGeneralConfigurationImpl, Windows81GeneralConfigurationImpl, WindowsDefenderAdvancedThreatProtectionConfigurationImpl, WindowsPhone81CustomConfigurationImpl, WindowsPhone81GeneralConfigurationImpl, WindowsUpdateForBusinessConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.androidCustomConfiguration":
                    return new AndroidCustomConfigurationImpl();
                case "#microsoft.graph.androidGeneralDeviceConfiguration":
                    return new AndroidGeneralDeviceConfigurationImpl();
                case "#microsoft.graph.androidWorkProfileCustomConfiguration":
                    return new AndroidWorkProfileCustomConfigurationImpl();
                case "#microsoft.graph.androidWorkProfileGeneralDeviceConfiguration":
                    return new AndroidWorkProfileGeneralDeviceConfigurationImpl();
                case "#microsoft.graph.appleDeviceFeaturesConfigurationBase":
                    return new AppleDeviceFeaturesConfigurationBaseImpl();
                case "#microsoft.graph.editionUpgradeConfiguration":
                    return new EditionUpgradeConfigurationImpl();
                case "#microsoft.graph.iosCertificateProfile":
                    return new IosCertificateProfileImpl();
                case "#microsoft.graph.iosCustomConfiguration":
                    return new IosCustomConfigurationImpl();
                case "#microsoft.graph.iosGeneralDeviceConfiguration":
                    return new IosGeneralDeviceConfigurationImpl();
                case "#microsoft.graph.iosUpdateConfiguration":
                    return new IosUpdateConfigurationImpl();
                case "#microsoft.graph.macOSCustomConfiguration":
                    return new MacOSCustomConfigurationImpl();
                case "#microsoft.graph.macOSGeneralDeviceConfiguration":
                    return new MacOSGeneralDeviceConfigurationImpl();
                case "#microsoft.graph.sharedPCConfiguration":
                    return new SharedPCConfigurationImpl();
                case "#microsoft.graph.windows10CustomConfiguration":
                    return new Windows10CustomConfigurationImpl();
                case "#microsoft.graph.windows10EndpointProtectionConfiguration":
                    return new Windows10EndpointProtectionConfigurationImpl();
                case "#microsoft.graph.windows10EnterpriseModernAppManagementConfiguration":
                    return new Windows10EnterpriseModernAppManagementConfigurationImpl();
                case "#microsoft.graph.windows10GeneralConfiguration":
                    return new Windows10GeneralConfigurationImpl();
                case "#microsoft.graph.windows10SecureAssessmentConfiguration":
                    return new Windows10SecureAssessmentConfigurationImpl();
                case "#microsoft.graph.windows10TeamGeneralConfiguration":
                    return new Windows10TeamGeneralConfigurationImpl();
                case "#microsoft.graph.windows81GeneralConfiguration":
                    return new Windows81GeneralConfigurationImpl();
                case "#microsoft.graph.windowsDefenderAdvancedThreatProtectionConfiguration":
                    return new WindowsDefenderAdvancedThreatProtectionConfigurationImpl();
                case "#microsoft.graph.windowsPhone81CustomConfiguration":
                    return new WindowsPhone81CustomConfigurationImpl();
                case "#microsoft.graph.windowsPhone81GeneralConfiguration":
                    return new WindowsPhone81GeneralConfigurationImpl();
                case "#microsoft.graph.windowsUpdateForBusinessConfiguration":
                    return new WindowsUpdateForBusinessConfigurationImpl();
            }
        }
    }
    return new DeviceConfigurationImpl();
}
