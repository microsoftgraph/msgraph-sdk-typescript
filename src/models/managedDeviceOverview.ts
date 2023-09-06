import { type DeviceExchangeAccessStateSummary } from './deviceExchangeAccessStateSummary';
import { type DeviceOperatingSystemSummary } from './deviceOperatingSystemSummary';
import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedDeviceOverview extends Entity, Parsable {
    /**
     * Distribution of Exchange Access State in Intune
     */
    deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary | undefined;
    /**
     * Device operating system summary.
     */
    deviceOperatingSystemSummary?: DeviceOperatingSystemSummary | undefined;
    /**
     * The number of devices enrolled in both MDM and EAS
     */
    dualEnrolledDeviceCount?: number | undefined;
    /**
     * Total enrolled device count. Does not include PC devices managed via Intune PC Agent
     */
    enrolledDeviceCount?: number | undefined;
    /**
     * The number of devices enrolled in MDM
     */
    mdmEnrolledCount?: number | undefined;
}
