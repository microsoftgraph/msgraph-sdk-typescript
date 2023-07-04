import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceCompliancePolicyDeviceStateSummary extends Entity, Parsable {
    /**
     * Number of compliant devices
     */
    compliantDeviceCount?: number | undefined;
    /**
     * Number of devices that have compliance managed by System Center Configuration Manager
     */
    configManagerCount?: number | undefined;
    /**
     * Number of conflict devices
     */
    conflictDeviceCount?: number | undefined;
    /**
     * Number of error devices
     */
    errorDeviceCount?: number | undefined;
    /**
     * Number of devices that are in grace period
     */
    inGracePeriodCount?: number | undefined;
    /**
     * Number of NonCompliant devices
     */
    nonCompliantDeviceCount?: number | undefined;
    /**
     * Number of not applicable devices
     */
    notApplicableDeviceCount?: number | undefined;
    /**
     * Number of remediated devices
     */
    remediatedDeviceCount?: number | undefined;
    /**
     * Number of unknown devices
     */
    unknownDeviceCount?: number | undefined;
}
