import {AutomaticUpdateMode} from './automaticUpdateMode';
import {AutoRestartNotificationDismissalMethod} from './autoRestartNotificationDismissalMethod';
import {DeviceConfiguration} from './deviceConfiguration';
import {Enablement} from './enablement';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateForBusinessUpdateWeeks} from './windowsUpdateForBusinessUpdateWeeks';
import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {WindowsUpdateNotificationDisplayOption} from './windowsUpdateNotificationDisplayOption';
import {WindowsUpdateType} from './windowsUpdateType';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUpdateForBusinessConfiguration extends DeviceConfiguration, Parsable {
    /**
     * When TRUE, allows eligible Windows 10 devices to upgrade to Windows 11. When FALSE, implies the device stays on the existing operating system. Returned by default. Query parameters are not supported.
     */
    allowWindows11Upgrade?: boolean | undefined;
    /**
     * Possible values for automatic update mode.
     */
    automaticUpdateMode?: AutomaticUpdateMode | undefined;
    /**
     * Auto restart required notification dismissal method
     */
    autoRestartNotificationDismissal?: AutoRestartNotificationDismissalMethod | undefined;
    /**
     * Which branch devices will receive their updates from
     */
    businessReadyUpdatesOnly?: WindowsUpdateType | undefined;
    /**
     * Number of days before feature updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     */
    deadlineForFeatureUpdatesInDays?: number | undefined;
    /**
     * Number of days before quality updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     */
    deadlineForQualityUpdatesInDays?: number | undefined;
    /**
     * Number of days after deadline until restarts occur automatically with valid range from 0 to 7 days. Returned by default. Query parameters are not supported.
     */
    deadlineGracePeriodInDays?: number | undefined;
    /**
     * Delivery optimization mode for peer distribution
     */
    deliveryOptimizationMode?: WindowsDeliveryOptimizationMode | undefined;
    /**
     * When TRUE, excludes Windows update Drivers. When FALSE, does not exclude Windows update Drivers. Returned by default. Query parameters are not supported.
     */
    driversExcluded?: boolean | undefined;
    /**
     * Deadline in days before automatically scheduling and executing a pending restart outside of active hours, with valid range from 2 to 30 days. Returned by default. Query parameters are not supported.
     */
    engagedRestartDeadlineInDays?: number | undefined;
    /**
     * Number of days a user can snooze Engaged Restart reminder notifications with valid range from 1 to 3 days. Returned by default. Query parameters are not supported.
     */
    engagedRestartSnoozeScheduleInDays?: number | undefined;
    /**
     * Number of days before transitioning from Auto Restarts scheduled outside of active hours to Engaged Restart, which requires the user to schedule, with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     */
    engagedRestartTransitionScheduleInDays?: number | undefined;
    /**
     * Defer Feature Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     */
    featureUpdatesDeferralPeriodInDays?: number | undefined;
    /**
     * When TRUE, assigned devices are paused from receiving feature updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Feature Updates. Returned by default. Query parameters are not supported.s
     */
    featureUpdatesPaused?: boolean | undefined;
    /**
     * The Feature Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported.
     */
    featureUpdatesPauseExpiryDateTime?: Date | undefined;
    /**
     * The Feature Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only.
     */
    featureUpdatesPauseStartDate?: DateOnly | undefined;
    /**
     * The Feature Updates Rollback Start datetime.This value is the time when the admin rolled back the Feature update for the ring.Returned by default.Query parameters are not supported.
     */
    featureUpdatesRollbackStartDateTime?: Date | undefined;
    /**
     * The number of days after a Feature Update for which a rollback is valid with valid range from 2 to 60 days. Returned by default. Query parameters are not supported.
     */
    featureUpdatesRollbackWindowInDays?: number | undefined;
    /**
     * When TRUE, rollback Feature Updates on the next device check in. When FALSE, do not rollback Feature Updates on the next device check in. Returned by default.Query parameters are not supported.
     */
    featureUpdatesWillBeRolledBack?: boolean | undefined;
    /**
     * The Installation Schedule. Possible values are: ActiveHoursStart, ActiveHoursEnd, ScheduledInstallDay, ScheduledInstallTime. Returned by default. Query parameters are not supported.
     */
    installationSchedule?: WindowsUpdateInstallScheduleType | undefined;
    /**
     * When TRUE, allows Microsoft Update Service. When FALSE, does not allow Microsoft Update Service. Returned by default. Query parameters are not supported.
     */
    microsoftUpdateServiceAllowed?: boolean | undefined;
    /**
     * When TRUE the device should wait until deadline for rebooting outside of active hours. When FALSE the device should not wait until deadline for rebooting outside of active hours. Returned by default. Query parameters are not supported.
     */
    postponeRebootUntilAfterDeadline?: boolean | undefined;
    /**
     * Possible values for pre-release features.
     */
    prereleaseFeatures?: PrereleaseFeatures | undefined;
    /**
     * Defer Quality Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     */
    qualityUpdatesDeferralPeriodInDays?: number | undefined;
    /**
     * When TRUE, assigned devices are paused from receiving quality updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Quality Updates. Returned by default. Query parameters are not supported.
     */
    qualityUpdatesPaused?: boolean | undefined;
    /**
     * The Quality Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported.
     */
    qualityUpdatesPauseExpiryDateTime?: Date | undefined;
    /**
     * The Quality Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only.
     */
    qualityUpdatesPauseStartDate?: DateOnly | undefined;
    /**
     * The Quality Updates Rollback Start datetime. This value is the time when the admin rolled back the Quality update for the ring. Returned by default. Query parameters are not supported.
     */
    qualityUpdatesRollbackStartDateTime?: Date | undefined;
    /**
     * When TRUE, rollback Quality Updates on the next device check in. When FALSE, do not rollback Quality Updates on the next device check in. Returned by default. Query parameters are not supported.
     */
    qualityUpdatesWillBeRolledBack?: boolean | undefined;
    /**
     * Specify the period for auto-restart imminent warning notifications. Supported values: 15, 30 or 60 (minutes). Returned by default. Query parameters are not supported.
     */
    scheduleImminentRestartWarningInMinutes?: number | undefined;
    /**
     * Specify the period for auto-restart warning reminder notifications. Supported values: 2, 4, 8, 12 or 24 (hours). Returned by default. Query parameters are not supported.
     */
    scheduleRestartWarningInHours?: number | undefined;
    /**
     * When TRUE, skips all checks before restart: Battery level = 40%, User presence, Display Needed, Presentation mode, Full screen mode, phone call state, game mode etc. When FALSE, does not skip all checks before restart. Returned by default. Query parameters are not supported.
     */
    skipChecksBeforeRestart?: boolean | undefined;
    /**
     * Windows Update Notification Display Options
     */
    updateNotificationLevel?: WindowsUpdateNotificationDisplayOption | undefined;
    /**
     * Schedule the update installation on the weeks of the month. Possible values are: UserDefined, FirstWeek, SecondWeek, ThirdWeek, FourthWeek, EveryWeek. Returned by default. Query parameters are not supported. Possible values are: userDefined, firstWeek, secondWeek, thirdWeek, fourthWeek, everyWeek, unknownFutureValue.
     */
    updateWeeks?: WindowsUpdateForBusinessUpdateWeeks | undefined;
    /**
     * Possible values of a property
     */
    userPauseAccess?: Enablement | undefined;
    /**
     * Possible values of a property
     */
    userWindowsUpdateScanAccess?: Enablement | undefined;
}
