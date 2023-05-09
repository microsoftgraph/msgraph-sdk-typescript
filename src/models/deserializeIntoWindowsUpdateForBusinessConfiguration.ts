import {AutomaticUpdateMode} from './automaticUpdateMode';
import {AutoRestartNotificationDismissalMethod} from './autoRestartNotificationDismissalMethod';
import {createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue} from './createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Enablement} from './enablement';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {serializeWindowsUpdateInstallScheduleType} from './serializeWindowsUpdateInstallScheduleType';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateForBusinessConfiguration} from './windowsUpdateForBusinessConfiguration';
import {WindowsUpdateForBusinessUpdateWeeks} from './windowsUpdateForBusinessUpdateWeeks';
import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {WindowsUpdateNotificationDisplayOption} from './windowsUpdateNotificationDisplayOption';
import {WindowsUpdateType} from './windowsUpdateType';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateForBusinessConfiguration(windowsUpdateForBusinessConfiguration: WindowsUpdateForBusinessConfiguration | undefined = {} as WindowsUpdateForBusinessConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsUpdateForBusinessConfiguration),
        "allowWindows11Upgrade": n => { windowsUpdateForBusinessConfiguration.allowWindows11Upgrade = n.getBooleanValue(); },
        "automaticUpdateMode": n => { windowsUpdateForBusinessConfiguration.automaticUpdateMode = n.getEnumValue<AutomaticUpdateMode>(AutomaticUpdateMode); },
        "autoRestartNotificationDismissal": n => { windowsUpdateForBusinessConfiguration.autoRestartNotificationDismissal = n.getEnumValue<AutoRestartNotificationDismissalMethod>(AutoRestartNotificationDismissalMethod); },
        "businessReadyUpdatesOnly": n => { windowsUpdateForBusinessConfiguration.businessReadyUpdatesOnly = n.getEnumValue<WindowsUpdateType>(WindowsUpdateType); },
        "deadlineForFeatureUpdatesInDays": n => { windowsUpdateForBusinessConfiguration.deadlineForFeatureUpdatesInDays = n.getNumberValue(); },
        "deadlineForQualityUpdatesInDays": n => { windowsUpdateForBusinessConfiguration.deadlineForQualityUpdatesInDays = n.getNumberValue(); },
        "deadlineGracePeriodInDays": n => { windowsUpdateForBusinessConfiguration.deadlineGracePeriodInDays = n.getNumberValue(); },
        "deliveryOptimizationMode": n => { windowsUpdateForBusinessConfiguration.deliveryOptimizationMode = n.getEnumValue<WindowsDeliveryOptimizationMode>(WindowsDeliveryOptimizationMode); },
        "driversExcluded": n => { windowsUpdateForBusinessConfiguration.driversExcluded = n.getBooleanValue(); },
        "engagedRestartDeadlineInDays": n => { windowsUpdateForBusinessConfiguration.engagedRestartDeadlineInDays = n.getNumberValue(); },
        "engagedRestartSnoozeScheduleInDays": n => { windowsUpdateForBusinessConfiguration.engagedRestartSnoozeScheduleInDays = n.getNumberValue(); },
        "engagedRestartTransitionScheduleInDays": n => { windowsUpdateForBusinessConfiguration.engagedRestartTransitionScheduleInDays = n.getNumberValue(); },
        "featureUpdatesDeferralPeriodInDays": n => { windowsUpdateForBusinessConfiguration.featureUpdatesDeferralPeriodInDays = n.getNumberValue(); },
        "featureUpdatesPaused": n => { windowsUpdateForBusinessConfiguration.featureUpdatesPaused = n.getBooleanValue(); },
        "featureUpdatesPauseExpiryDateTime": n => { windowsUpdateForBusinessConfiguration.featureUpdatesPauseExpiryDateTime = n.getDateValue(); },
        "featureUpdatesPauseStartDate": n => { windowsUpdateForBusinessConfiguration.featureUpdatesPauseStartDate = n.getDateOnlyValue(); },
        "featureUpdatesRollbackStartDateTime": n => { windowsUpdateForBusinessConfiguration.featureUpdatesRollbackStartDateTime = n.getDateValue(); },
        "featureUpdatesRollbackWindowInDays": n => { windowsUpdateForBusinessConfiguration.featureUpdatesRollbackWindowInDays = n.getNumberValue(); },
        "featureUpdatesWillBeRolledBack": n => { windowsUpdateForBusinessConfiguration.featureUpdatesWillBeRolledBack = n.getBooleanValue(); },
        "installationSchedule": n => { windowsUpdateForBusinessConfiguration.installationSchedule = n.getObjectValue<WindowsUpdateInstallScheduleType>(createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue); },
        "microsoftUpdateServiceAllowed": n => { windowsUpdateForBusinessConfiguration.microsoftUpdateServiceAllowed = n.getBooleanValue(); },
        "postponeRebootUntilAfterDeadline": n => { windowsUpdateForBusinessConfiguration.postponeRebootUntilAfterDeadline = n.getBooleanValue(); },
        "prereleaseFeatures": n => { windowsUpdateForBusinessConfiguration.prereleaseFeatures = n.getEnumValue<PrereleaseFeatures>(PrereleaseFeatures); },
        "qualityUpdatesDeferralPeriodInDays": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesDeferralPeriodInDays = n.getNumberValue(); },
        "qualityUpdatesPaused": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesPaused = n.getBooleanValue(); },
        "qualityUpdatesPauseExpiryDateTime": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesPauseExpiryDateTime = n.getDateValue(); },
        "qualityUpdatesPauseStartDate": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesPauseStartDate = n.getDateOnlyValue(); },
        "qualityUpdatesRollbackStartDateTime": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesRollbackStartDateTime = n.getDateValue(); },
        "qualityUpdatesWillBeRolledBack": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesWillBeRolledBack = n.getBooleanValue(); },
        "scheduleImminentRestartWarningInMinutes": n => { windowsUpdateForBusinessConfiguration.scheduleImminentRestartWarningInMinutes = n.getNumberValue(); },
        "scheduleRestartWarningInHours": n => { windowsUpdateForBusinessConfiguration.scheduleRestartWarningInHours = n.getNumberValue(); },
        "skipChecksBeforeRestart": n => { windowsUpdateForBusinessConfiguration.skipChecksBeforeRestart = n.getBooleanValue(); },
        "updateNotificationLevel": n => { windowsUpdateForBusinessConfiguration.updateNotificationLevel = n.getEnumValue<WindowsUpdateNotificationDisplayOption>(WindowsUpdateNotificationDisplayOption); },
        "updateWeeks": n => { windowsUpdateForBusinessConfiguration.updateWeeks = n.getEnumValue<WindowsUpdateForBusinessUpdateWeeks>(WindowsUpdateForBusinessUpdateWeeks); },
        "userPauseAccess": n => { windowsUpdateForBusinessConfiguration.userPauseAccess = n.getEnumValue<Enablement>(Enablement); },
        "userWindowsUpdateScanAccess": n => { windowsUpdateForBusinessConfiguration.userWindowsUpdateScanAccess = n.getEnumValue<Enablement>(Enablement); },
    }
}
