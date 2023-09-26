import { deserializeIntoAndroidCustomConfiguration } from './androidCustomConfiguration';
import { deserializeIntoAndroidGeneralDeviceConfiguration } from './androidGeneralDeviceConfiguration';
import { deserializeIntoAndroidWorkProfileCustomConfiguration } from './androidWorkProfileCustomConfiguration';
import { deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration } from './androidWorkProfileGeneralDeviceConfiguration';
import { deserializeIntoAppleDeviceFeaturesConfigurationBase } from './appleDeviceFeaturesConfigurationBase';
import { createDeviceConfigurationAssignmentFromDiscriminatorValue, serializeDeviceConfigurationAssignment, type DeviceConfigurationAssignment } from './deviceConfigurationAssignment';
import { createDeviceConfigurationDeviceOverviewFromDiscriminatorValue, serializeDeviceConfigurationDeviceOverview, type DeviceConfigurationDeviceOverview } from './deviceConfigurationDeviceOverview';
import { createDeviceConfigurationDeviceStatusFromDiscriminatorValue, serializeDeviceConfigurationDeviceStatus, type DeviceConfigurationDeviceStatus } from './deviceConfigurationDeviceStatus';
import { createDeviceConfigurationUserOverviewFromDiscriminatorValue, serializeDeviceConfigurationUserOverview, type DeviceConfigurationUserOverview } from './deviceConfigurationUserOverview';
import { createDeviceConfigurationUserStatusFromDiscriminatorValue, serializeDeviceConfigurationUserStatus, type DeviceConfigurationUserStatus } from './deviceConfigurationUserStatus';
import { deserializeIntoEditionUpgradeConfiguration } from './editionUpgradeConfiguration';
import { deserializeIntoEntity, serializeEntity, type Entity } from './entity';
import { type AndroidCustomConfiguration, type AndroidGeneralDeviceConfiguration, type AndroidWorkProfileCustomConfiguration, type AndroidWorkProfileGeneralDeviceConfiguration, type AppleDeviceFeaturesConfigurationBase, type EditionUpgradeConfiguration, type IosCertificateProfile, type IosCustomConfiguration, type IosDeviceFeaturesConfiguration, type IosGeneralDeviceConfiguration, type IosUpdateConfiguration, type MacOSCustomConfiguration, type MacOSDeviceFeaturesConfiguration, type MacOSGeneralDeviceConfiguration, type SharedPCConfiguration, type Windows10CustomConfiguration, type Windows10EndpointProtectionConfiguration, type Windows10EnterpriseModernAppManagementConfiguration, type Windows10GeneralConfiguration, type Windows10SecureAssessmentConfiguration, type Windows10TeamGeneralConfiguration, type Windows81GeneralConfiguration, type WindowsDefenderAdvancedThreatProtectionConfiguration, type WindowsPhone81CustomConfiguration, type WindowsPhone81GeneralConfiguration, type WindowsUpdateForBusinessConfiguration } from './index';
import { deserializeIntoIosCertificateProfile } from './iosCertificateProfile';
import { deserializeIntoIosCustomConfiguration } from './iosCustomConfiguration';
import { deserializeIntoIosDeviceFeaturesConfiguration } from './iosDeviceFeaturesConfiguration';
import { deserializeIntoIosGeneralDeviceConfiguration } from './iosGeneralDeviceConfiguration';
import { deserializeIntoIosUpdateConfiguration } from './iosUpdateConfiguration';
import { deserializeIntoMacOSCustomConfiguration } from './macOSCustomConfiguration';
import { deserializeIntoMacOSDeviceFeaturesConfiguration } from './macOSDeviceFeaturesConfiguration';
import { deserializeIntoMacOSGeneralDeviceConfiguration } from './macOSGeneralDeviceConfiguration';
import { createSettingStateDeviceSummaryFromDiscriminatorValue, serializeSettingStateDeviceSummary, type SettingStateDeviceSummary } from './settingStateDeviceSummary';
import { deserializeIntoSharedPCConfiguration } from './sharedPCConfiguration';
import { deserializeIntoWindows10CustomConfiguration } from './windows10CustomConfiguration';
import { deserializeIntoWindows10EndpointProtectionConfiguration } from './windows10EndpointProtectionConfiguration';
import { deserializeIntoWindows10EnterpriseModernAppManagementConfiguration } from './windows10EnterpriseModernAppManagementConfiguration';
import { deserializeIntoWindows10GeneralConfiguration } from './windows10GeneralConfiguration';
import { deserializeIntoWindows10SecureAssessmentConfiguration } from './windows10SecureAssessmentConfiguration';
import { deserializeIntoWindows10TeamGeneralConfiguration } from './windows10TeamGeneralConfiguration';
import { deserializeIntoWindows81GeneralConfiguration } from './windows81GeneralConfiguration';
import { deserializeIntoWindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsDefenderAdvancedThreatProtectionConfiguration';
import { deserializeIntoWindowsPhone81CustomConfiguration } from './windowsPhone81CustomConfiguration';
import { deserializeIntoWindowsPhone81GeneralConfiguration } from './windowsPhone81GeneralConfiguration';
import { deserializeIntoWindowsUpdateForBusinessConfiguration } from './windowsUpdateForBusinessConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
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
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function deserializeIntoDeviceConfiguration(deviceConfiguration: DeviceConfiguration | undefined = {} as DeviceConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceConfiguration),
        "assignments": n => { deviceConfiguration.assignments = n.getCollectionOfObjectValues<DeviceConfigurationAssignment>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
        "createdDateTime": n => { deviceConfiguration.createdDateTime = n.getDateValue(); },
        "description": n => { deviceConfiguration.description = n.getStringValue(); },
        "deviceSettingStateSummaries": n => { deviceConfiguration.deviceSettingStateSummaries = n.getCollectionOfObjectValues<SettingStateDeviceSummary>(createSettingStateDeviceSummaryFromDiscriminatorValue); },
        "deviceStatuses": n => { deviceConfiguration.deviceStatuses = n.getCollectionOfObjectValues<DeviceConfigurationDeviceStatus>(createDeviceConfigurationDeviceStatusFromDiscriminatorValue); },
        "deviceStatusOverview": n => { deviceConfiguration.deviceStatusOverview = n.getObjectValue<DeviceConfigurationDeviceOverview>(createDeviceConfigurationDeviceOverviewFromDiscriminatorValue); },
        "displayName": n => { deviceConfiguration.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { deviceConfiguration.lastModifiedDateTime = n.getDateValue(); },
        "userStatuses": n => { deviceConfiguration.userStatuses = n.getCollectionOfObjectValues<DeviceConfigurationUserStatus>(createDeviceConfigurationUserStatusFromDiscriminatorValue); },
        "userStatusOverview": n => { deviceConfiguration.userStatusOverview = n.getObjectValue<DeviceConfigurationUserOverview>(createDeviceConfigurationUserOverviewFromDiscriminatorValue); },
        "version": n => { deviceConfiguration.version = n.getNumberValue(); },
    }
}
export interface DeviceConfiguration extends Entity, Parsable {
    /**
     * The list of assignments for the device configuration profile.
     */
    assignments?: DeviceConfigurationAssignment[];
    /**
     * DateTime the object was created.
     */
    createdDateTime?: Date;
    /**
     * Admin provided description of the Device Configuration.
     */
    description?: string;
    /**
     * Device Configuration Setting State Device Summary
     */
    deviceSettingStateSummaries?: SettingStateDeviceSummary[];
    /**
     * Device configuration installation status by device.
     */
    deviceStatuses?: DeviceConfigurationDeviceStatus[];
    /**
     * Device Configuration devices status overview
     */
    deviceStatusOverview?: DeviceConfigurationDeviceOverview;
    /**
     * Admin provided name of the device configuration.
     */
    displayName?: string;
    /**
     * DateTime the object was last modified.
     */
    lastModifiedDateTime?: Date;
    /**
     * Device configuration installation status by user.
     */
    userStatuses?: DeviceConfigurationUserStatus[];
    /**
     * Device Configuration users status overview
     */
    userStatusOverview?: DeviceConfigurationUserOverview;
    /**
     * Version of the device configuration.
     */
    version?: number;
}
// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
export function serializeDeviceConfiguration(writer: SerializationWriter, deviceConfiguration: DeviceConfiguration | undefined = {} as DeviceConfiguration) : void {
        serializeEntity(writer, deviceConfiguration)
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("assignments", deviceConfiguration.assignments, );
        writer.writeDateValue("createdDateTime", deviceConfiguration.createdDateTime);
        writer.writeStringValue("description", deviceConfiguration.description);
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummary>("deviceSettingStateSummaries", deviceConfiguration.deviceSettingStateSummaries, );
        writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatus>("deviceStatuses", deviceConfiguration.deviceStatuses, );
        writer.writeObjectValue<DeviceConfigurationDeviceOverview>("deviceStatusOverview", deviceConfiguration.deviceStatusOverview, );
        writer.writeStringValue("displayName", deviceConfiguration.displayName);
        writer.writeDateValue("lastModifiedDateTime", deviceConfiguration.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatus>("userStatuses", deviceConfiguration.userStatuses, );
        writer.writeObjectValue<DeviceConfigurationUserOverview>("userStatusOverview", deviceConfiguration.userStatusOverview, );
        writer.writeNumberValue("version", deviceConfiguration.version);
}
