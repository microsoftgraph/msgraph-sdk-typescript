import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {Entity} from './entity';

export interface ManagedDeviceOverview extends Entity{
    /** Distribution of Exchange Access State in Intune */
    deviceExchangeAccessStateSummary?:DeviceExchangeAccessStateSummary | undefined;
    /** Device operating system summary. */
    deviceOperatingSystemSummary?:DeviceOperatingSystemSummary | undefined;
    /** The number of devices enrolled in both MDM and EAS */
    dualEnrolledDeviceCount?:number | undefined;
    /** Total enrolled device count. Does not include PC devices managed via Intune PC Agent */
    enrolledDeviceCount?:number | undefined;
    /** The number of devices enrolled in MDM */
    mdmEnrolledCount?:number | undefined;
}
