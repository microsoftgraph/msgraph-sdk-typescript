import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SoftwareUpdateStatusSummary extends Entity, Parsable {
    /**
     * Number of compliant devices.
     */
    compliantDeviceCount?: number | undefined;
    /**
     * Number of compliant users.
     */
    compliantUserCount?: number | undefined;
    /**
     * Number of conflict devices.
     */
    conflictDeviceCount?: number | undefined;
    /**
     * Number of conflict users.
     */
    conflictUserCount?: number | undefined;
    /**
     * The name of the policy.
     */
    displayName?: string | undefined;
    /**
     * Number of devices had error.
     */
    errorDeviceCount?: number | undefined;
    /**
     * Number of users had error.
     */
    errorUserCount?: number | undefined;
    /**
     * Number of non compliant devices.
     */
    nonCompliantDeviceCount?: number | undefined;
    /**
     * Number of non compliant users.
     */
    nonCompliantUserCount?: number | undefined;
    /**
     * Number of not applicable devices.
     */
    notApplicableDeviceCount?: number | undefined;
    /**
     * Number of not applicable users.
     */
    notApplicableUserCount?: number | undefined;
    /**
     * Number of remediated devices.
     */
    remediatedDeviceCount?: number | undefined;
    /**
     * Number of remediated users.
     */
    remediatedUserCount?: number | undefined;
    /**
     * Number of unknown devices.
     */
    unknownDeviceCount?: number | undefined;
    /**
     * Number of unknown users.
     */
    unknownUserCount?: number | undefined;
}
