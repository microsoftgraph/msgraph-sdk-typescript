import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {MiracastChannel} from './miracastChannel';
import {WelcomeScreenMeetingInformation} from './welcomeScreenMeetingInformation';
import {Windows10TeamGeneralConfiguration} from './windows10TeamGeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10TeamGeneralConfiguration(windows10TeamGeneralConfiguration: Windows10TeamGeneralConfiguration | undefined = {} as Windows10TeamGeneralConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10TeamGeneralConfiguration),
        "azureOperationalInsightsBlockTelemetry": n => { windows10TeamGeneralConfiguration.azureOperationalInsightsBlockTelemetry = n.getBooleanValue(); },
        "azureOperationalInsightsWorkspaceId": n => { windows10TeamGeneralConfiguration.azureOperationalInsightsWorkspaceId = n.getStringValue(); },
        "azureOperationalInsightsWorkspaceKey": n => { windows10TeamGeneralConfiguration.azureOperationalInsightsWorkspaceKey = n.getStringValue(); },
        "connectAppBlockAutoLaunch": n => { windows10TeamGeneralConfiguration.connectAppBlockAutoLaunch = n.getBooleanValue(); },
        "maintenanceWindowBlocked": n => { windows10TeamGeneralConfiguration.maintenanceWindowBlocked = n.getBooleanValue(); },
        "maintenanceWindowDurationInHours": n => { windows10TeamGeneralConfiguration.maintenanceWindowDurationInHours = n.getNumberValue(); },
        "maintenanceWindowStartTime": n => { windows10TeamGeneralConfiguration.maintenanceWindowStartTime = n.getTimeOnlyValue(); },
        "miracastBlocked": n => { windows10TeamGeneralConfiguration.miracastBlocked = n.getBooleanValue(); },
        "miracastChannel": n => { windows10TeamGeneralConfiguration.miracastChannel = n.getEnumValue<MiracastChannel>(MiracastChannel); },
        "miracastRequirePin": n => { windows10TeamGeneralConfiguration.miracastRequirePin = n.getBooleanValue(); },
        "settingsBlockMyMeetingsAndFiles": n => { windows10TeamGeneralConfiguration.settingsBlockMyMeetingsAndFiles = n.getBooleanValue(); },
        "settingsBlockSessionResume": n => { windows10TeamGeneralConfiguration.settingsBlockSessionResume = n.getBooleanValue(); },
        "settingsBlockSigninSuggestions": n => { windows10TeamGeneralConfiguration.settingsBlockSigninSuggestions = n.getBooleanValue(); },
        "settingsDefaultVolume": n => { windows10TeamGeneralConfiguration.settingsDefaultVolume = n.getNumberValue(); },
        "settingsScreenTimeoutInMinutes": n => { windows10TeamGeneralConfiguration.settingsScreenTimeoutInMinutes = n.getNumberValue(); },
        "settingsSessionTimeoutInMinutes": n => { windows10TeamGeneralConfiguration.settingsSessionTimeoutInMinutes = n.getNumberValue(); },
        "settingsSleepTimeoutInMinutes": n => { windows10TeamGeneralConfiguration.settingsSleepTimeoutInMinutes = n.getNumberValue(); },
        "welcomeScreenBackgroundImageUrl": n => { windows10TeamGeneralConfiguration.welcomeScreenBackgroundImageUrl = n.getStringValue(); },
        "welcomeScreenBlockAutomaticWakeUp": n => { windows10TeamGeneralConfiguration.welcomeScreenBlockAutomaticWakeUp = n.getBooleanValue(); },
        "welcomeScreenMeetingInformation": n => { windows10TeamGeneralConfiguration.welcomeScreenMeetingInformation = n.getEnumValue<WelcomeScreenMeetingInformation>(WelcomeScreenMeetingInformation); },
    }
}
