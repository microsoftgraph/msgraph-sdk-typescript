import {AutomaticUpdateMode} from './automaticUpdateMode';
import {AutoRestartNotificationDismissalMethod} from './autoRestartNotificationDismissalMethod';
import {createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue} from './createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue';
import {Enablement} from './enablement';
import {DeviceConfiguration, WindowsUpdateInstallScheduleType} from './index';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateForBusinessUpdateWeeks} from './windowsUpdateForBusinessUpdateWeeks';
import {WindowsUpdateNotificationDisplayOption} from './windowsUpdateNotificationDisplayOption';
import {WindowsUpdateType} from './windowsUpdateType';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUpdateForBusinessConfiguration extends DeviceConfiguration implements Parsable {
    /** When TRUE, allows eligible Windows 10 devices to upgrade to Windows 11. When FALSE, implies the device stays on the existing operating system. Returned by default. Query parameters are not supported. */
    private _allowWindows11Upgrade?: boolean | undefined;
    /** Possible values for automatic update mode. */
    private _automaticUpdateMode?: AutomaticUpdateMode | undefined;
    /** Auto restart required notification dismissal method */
    private _autoRestartNotificationDismissal?: AutoRestartNotificationDismissalMethod | undefined;
    /** Which branch devices will receive their updates from */
    private _businessReadyUpdatesOnly?: WindowsUpdateType | undefined;
    /** Number of days before feature updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported. */
    private _deadlineForFeatureUpdatesInDays?: number | undefined;
    /** Number of days before quality updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported. */
    private _deadlineForQualityUpdatesInDays?: number | undefined;
    /** Number of days after deadline until restarts occur automatically with valid range from 0 to 7 days. Returned by default. Query parameters are not supported. */
    private _deadlineGracePeriodInDays?: number | undefined;
    /** Delivery optimization mode for peer distribution */
    private _deliveryOptimizationMode?: WindowsDeliveryOptimizationMode | undefined;
    /** When TRUE, excludes Windows update Drivers. When FALSE, does not exclude Windows update Drivers. Returned by default. Query parameters are not supported. */
    private _driversExcluded?: boolean | undefined;
    /** Deadline in days before automatically scheduling and executing a pending restart outside of active hours, with valid range from 2 to 30 days. Returned by default. Query parameters are not supported. */
    private _engagedRestartDeadlineInDays?: number | undefined;
    /** Number of days a user can snooze Engaged Restart reminder notifications with valid range from 1 to 3 days. Returned by default. Query parameters are not supported. */
    private _engagedRestartSnoozeScheduleInDays?: number | undefined;
    /** Number of days before transitioning from Auto Restarts scheduled outside of active hours to Engaged Restart, which requires the user to schedule, with valid range from 0 to 30 days. Returned by default. Query parameters are not supported. */
    private _engagedRestartTransitionScheduleInDays?: number | undefined;
    /** Defer Feature Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported. */
    private _featureUpdatesDeferralPeriodInDays?: number | undefined;
    /** When TRUE, assigned devices are paused from receiving feature updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Feature Updates. Returned by default. Query parameters are not supported.s */
    private _featureUpdatesPaused?: boolean | undefined;
    /** The Feature Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. */
    private _featureUpdatesPauseExpiryDateTime?: Date | undefined;
    /** The Feature Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only. */
    private readonly _featureUpdatesPauseStartDate?: DateOnly | undefined;
    /** The Feature Updates Rollback Start datetime.This value is the time when the admin rolled back the Feature update for the ring.Returned by default.Query parameters are not supported. */
    private _featureUpdatesRollbackStartDateTime?: Date | undefined;
    /** The number of days after a Feature Update for which a rollback is valid with valid range from 2 to 60 days. Returned by default. Query parameters are not supported. */
    private _featureUpdatesRollbackWindowInDays?: number | undefined;
    /** When TRUE, rollback Feature Updates on the next device check in. When FALSE, do not rollback Feature Updates on the next device check in. Returned by default.Query parameters are not supported. */
    private _featureUpdatesWillBeRolledBack?: boolean | undefined;
    /** The Installation Schedule. Possible values are: ActiveHoursStart, ActiveHoursEnd, ScheduledInstallDay, ScheduledInstallTime. Returned by default. Query parameters are not supported. */
    private _installationSchedule?: WindowsUpdateInstallScheduleType | undefined;
    /** When TRUE, allows Microsoft Update Service. When FALSE, does not allow Microsoft Update Service. Returned by default. Query parameters are not supported. */
    private _microsoftUpdateServiceAllowed?: boolean | undefined;
    /** When TRUE the device should wait until deadline for rebooting outside of active hours. When FALSE the device should not wait until deadline for rebooting outside of active hours. Returned by default. Query parameters are not supported. */
    private _postponeRebootUntilAfterDeadline?: boolean | undefined;
    /** Possible values for pre-release features. */
    private _prereleaseFeatures?: PrereleaseFeatures | undefined;
    /** Defer Quality Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported. */
    private _qualityUpdatesDeferralPeriodInDays?: number | undefined;
    /** When TRUE, assigned devices are paused from receiving quality updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Quality Updates. Returned by default. Query parameters are not supported. */
    private _qualityUpdatesPaused?: boolean | undefined;
    /** The Quality Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. */
    private _qualityUpdatesPauseExpiryDateTime?: Date | undefined;
    /** The Quality Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only. */
    private readonly _qualityUpdatesPauseStartDate?: DateOnly | undefined;
    /** The Quality Updates Rollback Start datetime. This value is the time when the admin rolled back the Quality update for the ring. Returned by default. Query parameters are not supported. */
    private _qualityUpdatesRollbackStartDateTime?: Date | undefined;
    /** When TRUE, rollback Quality Updates on the next device check in. When FALSE, do not rollback Quality Updates on the next device check in. Returned by default. Query parameters are not supported. */
    private _qualityUpdatesWillBeRolledBack?: boolean | undefined;
    /** Specify the period for auto-restart imminent warning notifications. Supported values: 15, 30 or 60 (minutes). Returned by default. Query parameters are not supported. */
    private _scheduleImminentRestartWarningInMinutes?: number | undefined;
    /** Specify the period for auto-restart warning reminder notifications. Supported values: 2, 4, 8, 12 or 24 (hours). Returned by default. Query parameters are not supported. */
    private _scheduleRestartWarningInHours?: number | undefined;
    /** When TRUE, skips all checks before restart: Battery level = 40%, User presence, Display Needed, Presentation mode, Full screen mode, phone call state, game mode etc. When FALSE, does not skip all checks before restart. Returned by default. Query parameters are not supported. */
    private _skipChecksBeforeRestart?: boolean | undefined;
    /** Windows Update Notification Display Options */
    private _updateNotificationLevel?: WindowsUpdateNotificationDisplayOption | undefined;
    /** Schedule the update installation on the weeks of the month. Possible values are: UserDefined, FirstWeek, SecondWeek, ThirdWeek, FourthWeek, EveryWeek. Returned by default. Query parameters are not supported. Possible values are: userDefined, firstWeek, secondWeek, thirdWeek, fourthWeek, everyWeek, unknownFutureValue. */
    private _updateWeeks?: WindowsUpdateForBusinessUpdateWeeks | undefined;
    /** Possible values of a property */
    private _userPauseAccess?: Enablement | undefined;
    /** Possible values of a property */
    private _userWindowsUpdateScanAccess?: Enablement | undefined;
    /**
     * Gets the allowWindows11Upgrade property value. When TRUE, allows eligible Windows 10 devices to upgrade to Windows 11. When FALSE, implies the device stays on the existing operating system. Returned by default. Query parameters are not supported.
     * @returns a boolean
     */
    public get allowWindows11Upgrade() {
        return this._allowWindows11Upgrade;
    };
    /**
     * Sets the allowWindows11Upgrade property value. When TRUE, allows eligible Windows 10 devices to upgrade to Windows 11. When FALSE, implies the device stays on the existing operating system. Returned by default. Query parameters are not supported.
     * @param value Value to set for the allowWindows11Upgrade property.
     */
    public set allowWindows11Upgrade(value: boolean | undefined) {
        this._allowWindows11Upgrade = value;
    };
    /**
     * Gets the automaticUpdateMode property value. Possible values for automatic update mode.
     * @returns a automaticUpdateMode
     */
    public get automaticUpdateMode() {
        return this._automaticUpdateMode;
    };
    /**
     * Sets the automaticUpdateMode property value. Possible values for automatic update mode.
     * @param value Value to set for the automaticUpdateMode property.
     */
    public set automaticUpdateMode(value: AutomaticUpdateMode | undefined) {
        this._automaticUpdateMode = value;
    };
    /**
     * Gets the autoRestartNotificationDismissal property value. Auto restart required notification dismissal method
     * @returns a autoRestartNotificationDismissalMethod
     */
    public get autoRestartNotificationDismissal() {
        return this._autoRestartNotificationDismissal;
    };
    /**
     * Sets the autoRestartNotificationDismissal property value. Auto restart required notification dismissal method
     * @param value Value to set for the autoRestartNotificationDismissal property.
     */
    public set autoRestartNotificationDismissal(value: AutoRestartNotificationDismissalMethod | undefined) {
        this._autoRestartNotificationDismissal = value;
    };
    /**
     * Gets the businessReadyUpdatesOnly property value. Which branch devices will receive their updates from
     * @returns a windowsUpdateType
     */
    public get businessReadyUpdatesOnly() {
        return this._businessReadyUpdatesOnly;
    };
    /**
     * Sets the businessReadyUpdatesOnly property value. Which branch devices will receive their updates from
     * @param value Value to set for the businessReadyUpdatesOnly property.
     */
    public set businessReadyUpdatesOnly(value: WindowsUpdateType | undefined) {
        this._businessReadyUpdatesOnly = value;
    };
    /**
     * Instantiates a new WindowsUpdateForBusinessConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsUpdateForBusinessConfiguration";
    };
    /**
     * Gets the deadlineForFeatureUpdatesInDays property value. Number of days before feature updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get deadlineForFeatureUpdatesInDays() {
        return this._deadlineForFeatureUpdatesInDays;
    };
    /**
     * Sets the deadlineForFeatureUpdatesInDays property value. Number of days before feature updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the deadlineForFeatureUpdatesInDays property.
     */
    public set deadlineForFeatureUpdatesInDays(value: number | undefined) {
        this._deadlineForFeatureUpdatesInDays = value;
    };
    /**
     * Gets the deadlineForQualityUpdatesInDays property value. Number of days before quality updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get deadlineForQualityUpdatesInDays() {
        return this._deadlineForQualityUpdatesInDays;
    };
    /**
     * Sets the deadlineForQualityUpdatesInDays property value. Number of days before quality updates are installed automatically with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the deadlineForQualityUpdatesInDays property.
     */
    public set deadlineForQualityUpdatesInDays(value: number | undefined) {
        this._deadlineForQualityUpdatesInDays = value;
    };
    /**
     * Gets the deadlineGracePeriodInDays property value. Number of days after deadline until restarts occur automatically with valid range from 0 to 7 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get deadlineGracePeriodInDays() {
        return this._deadlineGracePeriodInDays;
    };
    /**
     * Sets the deadlineGracePeriodInDays property value. Number of days after deadline until restarts occur automatically with valid range from 0 to 7 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the deadlineGracePeriodInDays property.
     */
    public set deadlineGracePeriodInDays(value: number | undefined) {
        this._deadlineGracePeriodInDays = value;
    };
    /**
     * Gets the deliveryOptimizationMode property value. Delivery optimization mode for peer distribution
     * @returns a windowsDeliveryOptimizationMode
     */
    public get deliveryOptimizationMode() {
        return this._deliveryOptimizationMode;
    };
    /**
     * Sets the deliveryOptimizationMode property value. Delivery optimization mode for peer distribution
     * @param value Value to set for the deliveryOptimizationMode property.
     */
    public set deliveryOptimizationMode(value: WindowsDeliveryOptimizationMode | undefined) {
        this._deliveryOptimizationMode = value;
    };
    /**
     * Gets the driversExcluded property value. When TRUE, excludes Windows update Drivers. When FALSE, does not exclude Windows update Drivers. Returned by default. Query parameters are not supported.
     * @returns a boolean
     */
    public get driversExcluded() {
        return this._driversExcluded;
    };
    /**
     * Sets the driversExcluded property value. When TRUE, excludes Windows update Drivers. When FALSE, does not exclude Windows update Drivers. Returned by default. Query parameters are not supported.
     * @param value Value to set for the driversExcluded property.
     */
    public set driversExcluded(value: boolean | undefined) {
        this._driversExcluded = value;
    };
    /**
     * Gets the engagedRestartDeadlineInDays property value. Deadline in days before automatically scheduling and executing a pending restart outside of active hours, with valid range from 2 to 30 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get engagedRestartDeadlineInDays() {
        return this._engagedRestartDeadlineInDays;
    };
    /**
     * Sets the engagedRestartDeadlineInDays property value. Deadline in days before automatically scheduling and executing a pending restart outside of active hours, with valid range from 2 to 30 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the engagedRestartDeadlineInDays property.
     */
    public set engagedRestartDeadlineInDays(value: number | undefined) {
        this._engagedRestartDeadlineInDays = value;
    };
    /**
     * Gets the engagedRestartSnoozeScheduleInDays property value. Number of days a user can snooze Engaged Restart reminder notifications with valid range from 1 to 3 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get engagedRestartSnoozeScheduleInDays() {
        return this._engagedRestartSnoozeScheduleInDays;
    };
    /**
     * Sets the engagedRestartSnoozeScheduleInDays property value. Number of days a user can snooze Engaged Restart reminder notifications with valid range from 1 to 3 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the engagedRestartSnoozeScheduleInDays property.
     */
    public set engagedRestartSnoozeScheduleInDays(value: number | undefined) {
        this._engagedRestartSnoozeScheduleInDays = value;
    };
    /**
     * Gets the engagedRestartTransitionScheduleInDays property value. Number of days before transitioning from Auto Restarts scheduled outside of active hours to Engaged Restart, which requires the user to schedule, with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get engagedRestartTransitionScheduleInDays() {
        return this._engagedRestartTransitionScheduleInDays;
    };
    /**
     * Sets the engagedRestartTransitionScheduleInDays property value. Number of days before transitioning from Auto Restarts scheduled outside of active hours to Engaged Restart, which requires the user to schedule, with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the engagedRestartTransitionScheduleInDays property.
     */
    public set engagedRestartTransitionScheduleInDays(value: number | undefined) {
        this._engagedRestartTransitionScheduleInDays = value;
    };
    /**
     * Gets the featureUpdatesDeferralPeriodInDays property value. Defer Feature Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get featureUpdatesDeferralPeriodInDays() {
        return this._featureUpdatesDeferralPeriodInDays;
    };
    /**
     * Sets the featureUpdatesDeferralPeriodInDays property value. Defer Feature Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the featureUpdatesDeferralPeriodInDays property.
     */
    public set featureUpdatesDeferralPeriodInDays(value: number | undefined) {
        this._featureUpdatesDeferralPeriodInDays = value;
    };
    /**
     * Gets the featureUpdatesPaused property value. When TRUE, assigned devices are paused from receiving feature updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Feature Updates. Returned by default. Query parameters are not supported.s
     * @returns a boolean
     */
    public get featureUpdatesPaused() {
        return this._featureUpdatesPaused;
    };
    /**
     * Sets the featureUpdatesPaused property value. When TRUE, assigned devices are paused from receiving feature updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Feature Updates. Returned by default. Query parameters are not supported.s
     * @param value Value to set for the featureUpdatesPaused property.
     */
    public set featureUpdatesPaused(value: boolean | undefined) {
        this._featureUpdatesPaused = value;
    };
    /**
     * Gets the featureUpdatesPauseExpiryDateTime property value. The Feature Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported.
     * @returns a Date
     */
    public get featureUpdatesPauseExpiryDateTime() {
        return this._featureUpdatesPauseExpiryDateTime;
    };
    /**
     * Sets the featureUpdatesPauseExpiryDateTime property value. The Feature Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported.
     * @param value Value to set for the featureUpdatesPauseExpiryDateTime property.
     */
    public set featureUpdatesPauseExpiryDateTime(value: Date | undefined) {
        this._featureUpdatesPauseExpiryDateTime = value;
    };
    /**
     * Gets the featureUpdatesPauseStartDate property value. The Feature Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only.
     * @returns a DateOnly
     */
    public get featureUpdatesPauseStartDate() {
        return this._featureUpdatesPauseStartDate;
    };
    /**
     * Sets the featureUpdatesPauseStartDate property value. The Feature Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only.
     * @param value Value to set for the featureUpdatesPauseStartDate property.
     */
    public set featureUpdatesPauseStartDate(value: DateOnly | undefined) {
        this._featureUpdatesPauseStartDate = value;
    };
    /**
     * Gets the featureUpdatesRollbackStartDateTime property value. The Feature Updates Rollback Start datetime.This value is the time when the admin rolled back the Feature update for the ring.Returned by default.Query parameters are not supported.
     * @returns a Date
     */
    public get featureUpdatesRollbackStartDateTime() {
        return this._featureUpdatesRollbackStartDateTime;
    };
    /**
     * Sets the featureUpdatesRollbackStartDateTime property value. The Feature Updates Rollback Start datetime.This value is the time when the admin rolled back the Feature update for the ring.Returned by default.Query parameters are not supported.
     * @param value Value to set for the featureUpdatesRollbackStartDateTime property.
     */
    public set featureUpdatesRollbackStartDateTime(value: Date | undefined) {
        this._featureUpdatesRollbackStartDateTime = value;
    };
    /**
     * Gets the featureUpdatesRollbackWindowInDays property value. The number of days after a Feature Update for which a rollback is valid with valid range from 2 to 60 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get featureUpdatesRollbackWindowInDays() {
        return this._featureUpdatesRollbackWindowInDays;
    };
    /**
     * Sets the featureUpdatesRollbackWindowInDays property value. The number of days after a Feature Update for which a rollback is valid with valid range from 2 to 60 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the featureUpdatesRollbackWindowInDays property.
     */
    public set featureUpdatesRollbackWindowInDays(value: number | undefined) {
        this._featureUpdatesRollbackWindowInDays = value;
    };
    /**
     * Gets the featureUpdatesWillBeRolledBack property value. When TRUE, rollback Feature Updates on the next device check in. When FALSE, do not rollback Feature Updates on the next device check in. Returned by default.Query parameters are not supported.
     * @returns a boolean
     */
    public get featureUpdatesWillBeRolledBack() {
        return this._featureUpdatesWillBeRolledBack;
    };
    /**
     * Sets the featureUpdatesWillBeRolledBack property value. When TRUE, rollback Feature Updates on the next device check in. When FALSE, do not rollback Feature Updates on the next device check in. Returned by default.Query parameters are not supported.
     * @param value Value to set for the featureUpdatesWillBeRolledBack property.
     */
    public set featureUpdatesWillBeRolledBack(value: boolean | undefined) {
        this._featureUpdatesWillBeRolledBack = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowWindows11Upgrade": n => { this.allowWindows11Upgrade = n.getBooleanValue(); },
            "automaticUpdateMode": n => { this.automaticUpdateMode = n.getEnumValue<AutomaticUpdateMode>(AutomaticUpdateMode); },
            "autoRestartNotificationDismissal": n => { this.autoRestartNotificationDismissal = n.getEnumValue<AutoRestartNotificationDismissalMethod>(AutoRestartNotificationDismissalMethod); },
            "businessReadyUpdatesOnly": n => { this.businessReadyUpdatesOnly = n.getEnumValue<WindowsUpdateType>(WindowsUpdateType); },
            "deadlineForFeatureUpdatesInDays": n => { this.deadlineForFeatureUpdatesInDays = n.getNumberValue(); },
            "deadlineForQualityUpdatesInDays": n => { this.deadlineForQualityUpdatesInDays = n.getNumberValue(); },
            "deadlineGracePeriodInDays": n => { this.deadlineGracePeriodInDays = n.getNumberValue(); },
            "deliveryOptimizationMode": n => { this.deliveryOptimizationMode = n.getEnumValue<WindowsDeliveryOptimizationMode>(WindowsDeliveryOptimizationMode); },
            "driversExcluded": n => { this.driversExcluded = n.getBooleanValue(); },
            "engagedRestartDeadlineInDays": n => { this.engagedRestartDeadlineInDays = n.getNumberValue(); },
            "engagedRestartSnoozeScheduleInDays": n => { this.engagedRestartSnoozeScheduleInDays = n.getNumberValue(); },
            "engagedRestartTransitionScheduleInDays": n => { this.engagedRestartTransitionScheduleInDays = n.getNumberValue(); },
            "featureUpdatesDeferralPeriodInDays": n => { this.featureUpdatesDeferralPeriodInDays = n.getNumberValue(); },
            "featureUpdatesPaused": n => { this.featureUpdatesPaused = n.getBooleanValue(); },
            "featureUpdatesPauseExpiryDateTime": n => { this.featureUpdatesPauseExpiryDateTime = n.getDateValue(); },
            "featureUpdatesPauseStartDate": n => { this.featureUpdatesPauseStartDate = n.getDateOnlyValue(); },
            "featureUpdatesRollbackStartDateTime": n => { this.featureUpdatesRollbackStartDateTime = n.getDateValue(); },
            "featureUpdatesRollbackWindowInDays": n => { this.featureUpdatesRollbackWindowInDays = n.getNumberValue(); },
            "featureUpdatesWillBeRolledBack": n => { this.featureUpdatesWillBeRolledBack = n.getBooleanValue(); },
            "installationSchedule": n => { this.installationSchedule = n.getObjectValue<WindowsUpdateInstallScheduleType>(createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue); },
            "microsoftUpdateServiceAllowed": n => { this.microsoftUpdateServiceAllowed = n.getBooleanValue(); },
            "postponeRebootUntilAfterDeadline": n => { this.postponeRebootUntilAfterDeadline = n.getBooleanValue(); },
            "prereleaseFeatures": n => { this.prereleaseFeatures = n.getEnumValue<PrereleaseFeatures>(PrereleaseFeatures); },
            "qualityUpdatesDeferralPeriodInDays": n => { this.qualityUpdatesDeferralPeriodInDays = n.getNumberValue(); },
            "qualityUpdatesPaused": n => { this.qualityUpdatesPaused = n.getBooleanValue(); },
            "qualityUpdatesPauseExpiryDateTime": n => { this.qualityUpdatesPauseExpiryDateTime = n.getDateValue(); },
            "qualityUpdatesPauseStartDate": n => { this.qualityUpdatesPauseStartDate = n.getDateOnlyValue(); },
            "qualityUpdatesRollbackStartDateTime": n => { this.qualityUpdatesRollbackStartDateTime = n.getDateValue(); },
            "qualityUpdatesWillBeRolledBack": n => { this.qualityUpdatesWillBeRolledBack = n.getBooleanValue(); },
            "scheduleImminentRestartWarningInMinutes": n => { this.scheduleImminentRestartWarningInMinutes = n.getNumberValue(); },
            "scheduleRestartWarningInHours": n => { this.scheduleRestartWarningInHours = n.getNumberValue(); },
            "skipChecksBeforeRestart": n => { this.skipChecksBeforeRestart = n.getBooleanValue(); },
            "updateNotificationLevel": n => { this.updateNotificationLevel = n.getEnumValue<WindowsUpdateNotificationDisplayOption>(WindowsUpdateNotificationDisplayOption); },
            "updateWeeks": n => { this.updateWeeks = n.getEnumValue<WindowsUpdateForBusinessUpdateWeeks>(WindowsUpdateForBusinessUpdateWeeks); },
            "userPauseAccess": n => { this.userPauseAccess = n.getEnumValue<Enablement>(Enablement); },
            "userWindowsUpdateScanAccess": n => { this.userWindowsUpdateScanAccess = n.getEnumValue<Enablement>(Enablement); },
        };
    };
    /**
     * Gets the installationSchedule property value. The Installation Schedule. Possible values are: ActiveHoursStart, ActiveHoursEnd, ScheduledInstallDay, ScheduledInstallTime. Returned by default. Query parameters are not supported.
     * @returns a windowsUpdateInstallScheduleType
     */
    public get installationSchedule() {
        return this._installationSchedule;
    };
    /**
     * Sets the installationSchedule property value. The Installation Schedule. Possible values are: ActiveHoursStart, ActiveHoursEnd, ScheduledInstallDay, ScheduledInstallTime. Returned by default. Query parameters are not supported.
     * @param value Value to set for the installationSchedule property.
     */
    public set installationSchedule(value: WindowsUpdateInstallScheduleType | undefined) {
        this._installationSchedule = value;
    };
    /**
     * Gets the microsoftUpdateServiceAllowed property value. When TRUE, allows Microsoft Update Service. When FALSE, does not allow Microsoft Update Service. Returned by default. Query parameters are not supported.
     * @returns a boolean
     */
    public get microsoftUpdateServiceAllowed() {
        return this._microsoftUpdateServiceAllowed;
    };
    /**
     * Sets the microsoftUpdateServiceAllowed property value. When TRUE, allows Microsoft Update Service. When FALSE, does not allow Microsoft Update Service. Returned by default. Query parameters are not supported.
     * @param value Value to set for the microsoftUpdateServiceAllowed property.
     */
    public set microsoftUpdateServiceAllowed(value: boolean | undefined) {
        this._microsoftUpdateServiceAllowed = value;
    };
    /**
     * Gets the postponeRebootUntilAfterDeadline property value. When TRUE the device should wait until deadline for rebooting outside of active hours. When FALSE the device should not wait until deadline for rebooting outside of active hours. Returned by default. Query parameters are not supported.
     * @returns a boolean
     */
    public get postponeRebootUntilAfterDeadline() {
        return this._postponeRebootUntilAfterDeadline;
    };
    /**
     * Sets the postponeRebootUntilAfterDeadline property value. When TRUE the device should wait until deadline for rebooting outside of active hours. When FALSE the device should not wait until deadline for rebooting outside of active hours. Returned by default. Query parameters are not supported.
     * @param value Value to set for the postponeRebootUntilAfterDeadline property.
     */
    public set postponeRebootUntilAfterDeadline(value: boolean | undefined) {
        this._postponeRebootUntilAfterDeadline = value;
    };
    /**
     * Gets the prereleaseFeatures property value. Possible values for pre-release features.
     * @returns a prereleaseFeatures
     */
    public get prereleaseFeatures() {
        return this._prereleaseFeatures;
    };
    /**
     * Sets the prereleaseFeatures property value. Possible values for pre-release features.
     * @param value Value to set for the prereleaseFeatures property.
     */
    public set prereleaseFeatures(value: PrereleaseFeatures | undefined) {
        this._prereleaseFeatures = value;
    };
    /**
     * Gets the qualityUpdatesDeferralPeriodInDays property value. Defer Quality Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get qualityUpdatesDeferralPeriodInDays() {
        return this._qualityUpdatesDeferralPeriodInDays;
    };
    /**
     * Sets the qualityUpdatesDeferralPeriodInDays property value. Defer Quality Updates by these many days with valid range from 0 to 30 days. Returned by default. Query parameters are not supported.
     * @param value Value to set for the qualityUpdatesDeferralPeriodInDays property.
     */
    public set qualityUpdatesDeferralPeriodInDays(value: number | undefined) {
        this._qualityUpdatesDeferralPeriodInDays = value;
    };
    /**
     * Gets the qualityUpdatesPaused property value. When TRUE, assigned devices are paused from receiving quality updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Quality Updates. Returned by default. Query parameters are not supported.
     * @returns a boolean
     */
    public get qualityUpdatesPaused() {
        return this._qualityUpdatesPaused;
    };
    /**
     * Sets the qualityUpdatesPaused property value. When TRUE, assigned devices are paused from receiving quality updates for up to 35 days from the time you pause the ring. When FALSE, does not pause Quality Updates. Returned by default. Query parameters are not supported.
     * @param value Value to set for the qualityUpdatesPaused property.
     */
    public set qualityUpdatesPaused(value: boolean | undefined) {
        this._qualityUpdatesPaused = value;
    };
    /**
     * Gets the qualityUpdatesPauseExpiryDateTime property value. The Quality Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported.
     * @returns a Date
     */
    public get qualityUpdatesPauseExpiryDateTime() {
        return this._qualityUpdatesPauseExpiryDateTime;
    };
    /**
     * Sets the qualityUpdatesPauseExpiryDateTime property value. The Quality Updates Pause Expiry datetime. This value is 35 days from the time admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported.
     * @param value Value to set for the qualityUpdatesPauseExpiryDateTime property.
     */
    public set qualityUpdatesPauseExpiryDateTime(value: Date | undefined) {
        this._qualityUpdatesPauseExpiryDateTime = value;
    };
    /**
     * Gets the qualityUpdatesPauseStartDate property value. The Quality Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only.
     * @returns a DateOnly
     */
    public get qualityUpdatesPauseStartDate() {
        return this._qualityUpdatesPauseStartDate;
    };
    /**
     * Sets the qualityUpdatesPauseStartDate property value. The Quality Updates Pause start date. This value is the time when the admin paused or extended the pause for the ring. Returned by default. Query parameters are not supported. This property is read-only.
     * @param value Value to set for the qualityUpdatesPauseStartDate property.
     */
    public set qualityUpdatesPauseStartDate(value: DateOnly | undefined) {
        this._qualityUpdatesPauseStartDate = value;
    };
    /**
     * Gets the qualityUpdatesRollbackStartDateTime property value. The Quality Updates Rollback Start datetime. This value is the time when the admin rolled back the Quality update for the ring. Returned by default. Query parameters are not supported.
     * @returns a Date
     */
    public get qualityUpdatesRollbackStartDateTime() {
        return this._qualityUpdatesRollbackStartDateTime;
    };
    /**
     * Sets the qualityUpdatesRollbackStartDateTime property value. The Quality Updates Rollback Start datetime. This value is the time when the admin rolled back the Quality update for the ring. Returned by default. Query parameters are not supported.
     * @param value Value to set for the qualityUpdatesRollbackStartDateTime property.
     */
    public set qualityUpdatesRollbackStartDateTime(value: Date | undefined) {
        this._qualityUpdatesRollbackStartDateTime = value;
    };
    /**
     * Gets the qualityUpdatesWillBeRolledBack property value. When TRUE, rollback Quality Updates on the next device check in. When FALSE, do not rollback Quality Updates on the next device check in. Returned by default. Query parameters are not supported.
     * @returns a boolean
     */
    public get qualityUpdatesWillBeRolledBack() {
        return this._qualityUpdatesWillBeRolledBack;
    };
    /**
     * Sets the qualityUpdatesWillBeRolledBack property value. When TRUE, rollback Quality Updates on the next device check in. When FALSE, do not rollback Quality Updates on the next device check in. Returned by default. Query parameters are not supported.
     * @param value Value to set for the qualityUpdatesWillBeRolledBack property.
     */
    public set qualityUpdatesWillBeRolledBack(value: boolean | undefined) {
        this._qualityUpdatesWillBeRolledBack = value;
    };
    /**
     * Gets the scheduleImminentRestartWarningInMinutes property value. Specify the period for auto-restart imminent warning notifications. Supported values: 15, 30 or 60 (minutes). Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get scheduleImminentRestartWarningInMinutes() {
        return this._scheduleImminentRestartWarningInMinutes;
    };
    /**
     * Sets the scheduleImminentRestartWarningInMinutes property value. Specify the period for auto-restart imminent warning notifications. Supported values: 15, 30 or 60 (minutes). Returned by default. Query parameters are not supported.
     * @param value Value to set for the scheduleImminentRestartWarningInMinutes property.
     */
    public set scheduleImminentRestartWarningInMinutes(value: number | undefined) {
        this._scheduleImminentRestartWarningInMinutes = value;
    };
    /**
     * Gets the scheduleRestartWarningInHours property value. Specify the period for auto-restart warning reminder notifications. Supported values: 2, 4, 8, 12 or 24 (hours). Returned by default. Query parameters are not supported.
     * @returns a integer
     */
    public get scheduleRestartWarningInHours() {
        return this._scheduleRestartWarningInHours;
    };
    /**
     * Sets the scheduleRestartWarningInHours property value. Specify the period for auto-restart warning reminder notifications. Supported values: 2, 4, 8, 12 or 24 (hours). Returned by default. Query parameters are not supported.
     * @param value Value to set for the scheduleRestartWarningInHours property.
     */
    public set scheduleRestartWarningInHours(value: number | undefined) {
        this._scheduleRestartWarningInHours = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowWindows11Upgrade", this.allowWindows11Upgrade);
        writer.writeEnumValue<AutomaticUpdateMode>("automaticUpdateMode", this.automaticUpdateMode);
        writer.writeEnumValue<AutoRestartNotificationDismissalMethod>("autoRestartNotificationDismissal", this.autoRestartNotificationDismissal);
        writer.writeEnumValue<WindowsUpdateType>("businessReadyUpdatesOnly", this.businessReadyUpdatesOnly);
        writer.writeNumberValue("deadlineForFeatureUpdatesInDays", this.deadlineForFeatureUpdatesInDays);
        writer.writeNumberValue("deadlineForQualityUpdatesInDays", this.deadlineForQualityUpdatesInDays);
        writer.writeNumberValue("deadlineGracePeriodInDays", this.deadlineGracePeriodInDays);
        writer.writeEnumValue<WindowsDeliveryOptimizationMode>("deliveryOptimizationMode", this.deliveryOptimizationMode);
        writer.writeBooleanValue("driversExcluded", this.driversExcluded);
        writer.writeNumberValue("engagedRestartDeadlineInDays", this.engagedRestartDeadlineInDays);
        writer.writeNumberValue("engagedRestartSnoozeScheduleInDays", this.engagedRestartSnoozeScheduleInDays);
        writer.writeNumberValue("engagedRestartTransitionScheduleInDays", this.engagedRestartTransitionScheduleInDays);
        writer.writeNumberValue("featureUpdatesDeferralPeriodInDays", this.featureUpdatesDeferralPeriodInDays);
        writer.writeBooleanValue("featureUpdatesPaused", this.featureUpdatesPaused);
        writer.writeDateValue("featureUpdatesPauseExpiryDateTime", this.featureUpdatesPauseExpiryDateTime);
        writer.writeDateValue("featureUpdatesRollbackStartDateTime", this.featureUpdatesRollbackStartDateTime);
        writer.writeNumberValue("featureUpdatesRollbackWindowInDays", this.featureUpdatesRollbackWindowInDays);
        writer.writeBooleanValue("featureUpdatesWillBeRolledBack", this.featureUpdatesWillBeRolledBack);
        writer.writeObjectValue<WindowsUpdateInstallScheduleType>("installationSchedule", this.installationSchedule);
        writer.writeBooleanValue("microsoftUpdateServiceAllowed", this.microsoftUpdateServiceAllowed);
        writer.writeBooleanValue("postponeRebootUntilAfterDeadline", this.postponeRebootUntilAfterDeadline);
        writer.writeEnumValue<PrereleaseFeatures>("prereleaseFeatures", this.prereleaseFeatures);
        writer.writeNumberValue("qualityUpdatesDeferralPeriodInDays", this.qualityUpdatesDeferralPeriodInDays);
        writer.writeBooleanValue("qualityUpdatesPaused", this.qualityUpdatesPaused);
        writer.writeDateValue("qualityUpdatesPauseExpiryDateTime", this.qualityUpdatesPauseExpiryDateTime);
        writer.writeDateValue("qualityUpdatesRollbackStartDateTime", this.qualityUpdatesRollbackStartDateTime);
        writer.writeBooleanValue("qualityUpdatesWillBeRolledBack", this.qualityUpdatesWillBeRolledBack);
        writer.writeNumberValue("scheduleImminentRestartWarningInMinutes", this.scheduleImminentRestartWarningInMinutes);
        writer.writeNumberValue("scheduleRestartWarningInHours", this.scheduleRestartWarningInHours);
        writer.writeBooleanValue("skipChecksBeforeRestart", this.skipChecksBeforeRestart);
        writer.writeEnumValue<WindowsUpdateNotificationDisplayOption>("updateNotificationLevel", this.updateNotificationLevel);
        writer.writeEnumValue<WindowsUpdateForBusinessUpdateWeeks>("updateWeeks", this.updateWeeks);
        writer.writeEnumValue<Enablement>("userPauseAccess", this.userPauseAccess);
        writer.writeEnumValue<Enablement>("userWindowsUpdateScanAccess", this.userWindowsUpdateScanAccess);
    };
    /**
     * Gets the skipChecksBeforeRestart property value. When TRUE, skips all checks before restart: Battery level = 40%, User presence, Display Needed, Presentation mode, Full screen mode, phone call state, game mode etc. When FALSE, does not skip all checks before restart. Returned by default. Query parameters are not supported.
     * @returns a boolean
     */
    public get skipChecksBeforeRestart() {
        return this._skipChecksBeforeRestart;
    };
    /**
     * Sets the skipChecksBeforeRestart property value. When TRUE, skips all checks before restart: Battery level = 40%, User presence, Display Needed, Presentation mode, Full screen mode, phone call state, game mode etc. When FALSE, does not skip all checks before restart. Returned by default. Query parameters are not supported.
     * @param value Value to set for the skipChecksBeforeRestart property.
     */
    public set skipChecksBeforeRestart(value: boolean | undefined) {
        this._skipChecksBeforeRestart = value;
    };
    /**
     * Gets the updateNotificationLevel property value. Windows Update Notification Display Options
     * @returns a windowsUpdateNotificationDisplayOption
     */
    public get updateNotificationLevel() {
        return this._updateNotificationLevel;
    };
    /**
     * Sets the updateNotificationLevel property value. Windows Update Notification Display Options
     * @param value Value to set for the updateNotificationLevel property.
     */
    public set updateNotificationLevel(value: WindowsUpdateNotificationDisplayOption | undefined) {
        this._updateNotificationLevel = value;
    };
    /**
     * Gets the updateWeeks property value. Schedule the update installation on the weeks of the month. Possible values are: UserDefined, FirstWeek, SecondWeek, ThirdWeek, FourthWeek, EveryWeek. Returned by default. Query parameters are not supported. Possible values are: userDefined, firstWeek, secondWeek, thirdWeek, fourthWeek, everyWeek, unknownFutureValue.
     * @returns a windowsUpdateForBusinessUpdateWeeks
     */
    public get updateWeeks() {
        return this._updateWeeks;
    };
    /**
     * Sets the updateWeeks property value. Schedule the update installation on the weeks of the month. Possible values are: UserDefined, FirstWeek, SecondWeek, ThirdWeek, FourthWeek, EveryWeek. Returned by default. Query parameters are not supported. Possible values are: userDefined, firstWeek, secondWeek, thirdWeek, fourthWeek, everyWeek, unknownFutureValue.
     * @param value Value to set for the updateWeeks property.
     */
    public set updateWeeks(value: WindowsUpdateForBusinessUpdateWeeks | undefined) {
        this._updateWeeks = value;
    };
    /**
     * Gets the userPauseAccess property value. Possible values of a property
     * @returns a enablement
     */
    public get userPauseAccess() {
        return this._userPauseAccess;
    };
    /**
     * Sets the userPauseAccess property value. Possible values of a property
     * @param value Value to set for the userPauseAccess property.
     */
    public set userPauseAccess(value: Enablement | undefined) {
        this._userPauseAccess = value;
    };
    /**
     * Gets the userWindowsUpdateScanAccess property value. Possible values of a property
     * @returns a enablement
     */
    public get userWindowsUpdateScanAccess() {
        return this._userWindowsUpdateScanAccess;
    };
    /**
     * Sets the userWindowsUpdateScanAccess property value. Possible values of a property
     * @param value Value to set for the userWindowsUpdateScanAccess property.
     */
    public set userWindowsUpdateScanAccess(value: Enablement | undefined) {
        this._userWindowsUpdateScanAccess = value;
    };
}
