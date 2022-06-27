import {AutomaticUpdateMode} from './automaticUpdateMode';
import {DeviceConfiguration} from './deviceConfiguration';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {WindowsUpdateType} from './windowsUpdateType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUpdateForBusinessConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Automatic update mode. Possible values are: userDefined, notifyDownload, autoInstallAtMaintenanceTime, autoInstallAndRebootAtMaintenanceTime, autoInstallAndRebootAtScheduledTime, autoInstallAndRebootWithoutEndUserControl, windowsDefault. */
    automaticUpdateMode?: AutomaticUpdateMode | undefined;
    /** Determines which branch devices will receive their updates from. Possible values are: userDefined, all, businessReadyOnly, windowsInsiderBuildFast, windowsInsiderBuildSlow, windowsInsiderBuildRelease. */
    businessReadyUpdatesOnly?: WindowsUpdateType | undefined;
    /** Delivery Optimization Mode. Possible values are: userDefined, httpOnly, httpWithPeeringNat, httpWithPeeringPrivateGroup, httpWithInternetPeering, simpleDownload, bypassMode. */
    deliveryOptimizationMode?: WindowsDeliveryOptimizationMode | undefined;
    /** Exclude Windows update Drivers */
    driversExcluded?: boolean | undefined;
    /** Defer Feature Updates by these many days */
    featureUpdatesDeferralPeriodInDays?: number | undefined;
    /** Pause Feature Updates */
    featureUpdatesPaused?: boolean | undefined;
    /** Feature Updates Pause Expiry datetime */
    featureUpdatesPauseExpiryDateTime?: Date | undefined;
    /** Installation schedule */
    installationSchedule?: WindowsUpdateInstallScheduleType | undefined;
    /** Allow Microsoft Update Service */
    microsoftUpdateServiceAllowed?: boolean | undefined;
    /** The pre-release features. Possible values are: userDefined, settingsOnly, settingsAndExperimentations, notAllowed. */
    prereleaseFeatures?: PrereleaseFeatures | undefined;
    /** Defer Quality Updates by these many days */
    qualityUpdatesDeferralPeriodInDays?: number | undefined;
    /** Pause Quality Updates */
    qualityUpdatesPaused?: boolean | undefined;
    /** Quality Updates Pause Expiry datetime */
    qualityUpdatesPauseExpiryDateTime?: Date | undefined;
}
