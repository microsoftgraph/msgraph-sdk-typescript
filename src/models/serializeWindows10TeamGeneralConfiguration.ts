import {MiracastChannel} from './miracastChannel';
import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import {WelcomeScreenMeetingInformation} from './welcomeScreenMeetingInformation';
import {Windows10TeamGeneralConfiguration} from './windows10TeamGeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function serializeWindows10TeamGeneralConfiguration(writer: SerializationWriter, windows10TeamGeneralConfiguration: Windows10TeamGeneralConfiguration | undefined = {} as Windows10TeamGeneralConfiguration) : void {
        serializeDeviceConfiguration(writer, windows10TeamGeneralConfiguration)
        writer.writeBooleanValue("azureOperationalInsightsBlockTelemetry", windows10TeamGeneralConfiguration.azureOperationalInsightsBlockTelemetry);
        writer.writeStringValue("azureOperationalInsightsWorkspaceId", windows10TeamGeneralConfiguration.azureOperationalInsightsWorkspaceId);
        writer.writeStringValue("azureOperationalInsightsWorkspaceKey", windows10TeamGeneralConfiguration.azureOperationalInsightsWorkspaceKey);
        writer.writeBooleanValue("connectAppBlockAutoLaunch", windows10TeamGeneralConfiguration.connectAppBlockAutoLaunch);
        writer.writeBooleanValue("maintenanceWindowBlocked", windows10TeamGeneralConfiguration.maintenanceWindowBlocked);
        writer.writeNumberValue("maintenanceWindowDurationInHours", windows10TeamGeneralConfiguration.maintenanceWindowDurationInHours);
        writer.writeTimeOnlyValue("maintenanceWindowStartTime", windows10TeamGeneralConfiguration.maintenanceWindowStartTime);
        writer.writeBooleanValue("miracastBlocked", windows10TeamGeneralConfiguration.miracastBlocked);
        writer.writeEnumValue<MiracastChannel>("miracastChannel", windows10TeamGeneralConfiguration.miracastChannel);
        writer.writeBooleanValue("miracastRequirePin", windows10TeamGeneralConfiguration.miracastRequirePin);
        writer.writeBooleanValue("settingsBlockMyMeetingsAndFiles", windows10TeamGeneralConfiguration.settingsBlockMyMeetingsAndFiles);
        writer.writeBooleanValue("settingsBlockSessionResume", windows10TeamGeneralConfiguration.settingsBlockSessionResume);
        writer.writeBooleanValue("settingsBlockSigninSuggestions", windows10TeamGeneralConfiguration.settingsBlockSigninSuggestions);
        writer.writeNumberValue("settingsDefaultVolume", windows10TeamGeneralConfiguration.settingsDefaultVolume);
        writer.writeNumberValue("settingsScreenTimeoutInMinutes", windows10TeamGeneralConfiguration.settingsScreenTimeoutInMinutes);
        writer.writeNumberValue("settingsSessionTimeoutInMinutes", windows10TeamGeneralConfiguration.settingsSessionTimeoutInMinutes);
        writer.writeNumberValue("settingsSleepTimeoutInMinutes", windows10TeamGeneralConfiguration.settingsSleepTimeoutInMinutes);
        writer.writeStringValue("welcomeScreenBackgroundImageUrl", windows10TeamGeneralConfiguration.welcomeScreenBackgroundImageUrl);
        writer.writeBooleanValue("welcomeScreenBlockAutomaticWakeUp", windows10TeamGeneralConfiguration.welcomeScreenBlockAutomaticWakeUp);
        writer.writeEnumValue<WelcomeScreenMeetingInformation>("welcomeScreenMeetingInformation", windows10TeamGeneralConfiguration.welcomeScreenMeetingInformation);
}
