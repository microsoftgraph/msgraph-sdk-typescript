import {Entity} from './entity';
import {OfferShiftRequest} from './offerShiftRequest';
import {OpenShift} from './openShift';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {OperationStatus} from './operationStatus';
import {SchedulingGroup} from './schedulingGroup';
import {Shift} from './shift';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {TimeOff} from './timeOff';
import {TimeOffReason} from './timeOffReason';
import {TimeOffRequest} from './timeOffRequest';

export interface Schedule extends Entity{
    /** Indicates whether the schedule is enabled for the team. Required. */
    enabled?:boolean | undefined;
    /** The offerShiftRequests property */
    offerShiftRequests?:OfferShiftRequest[] | undefined;
    /** Indicates whether offer shift requests are enabled for the schedule. */
    offerShiftRequestsEnabled?:boolean | undefined;
    /** The openShiftChangeRequests property */
    openShiftChangeRequests?:OpenShiftChangeRequest[] | undefined;
    /** The openShifts property */
    openShifts?:OpenShift[] | undefined;
    /** Indicates whether open shifts are enabled for the schedule. */
    openShiftsEnabled?:boolean | undefined;
    /** The status of the schedule provisioning. The possible values are notStarted, running, completed, failed. */
    provisionStatus?:OperationStatus | undefined;
    /** Additional information about why schedule provisioning failed. */
    provisionStatusCode?:string | undefined;
    /** The logical grouping of users in the schedule (usually by role). */
    schedulingGroups?:SchedulingGroup[] | undefined;
    /** The shifts in the schedule. */
    shifts?:Shift[] | undefined;
    /** The swapShiftsChangeRequests property */
    swapShiftsChangeRequests?:SwapShiftsChangeRequest[] | undefined;
    /** Indicates whether swap shifts requests are enabled for the schedule. */
    swapShiftsRequestsEnabled?:boolean | undefined;
    /** Indicates whether time clock is enabled for the schedule. */
    timeClockEnabled?:boolean | undefined;
    /** The set of reasons for a time off in the schedule. */
    timeOffReasons?:TimeOffReason[] | undefined;
    /** The timeOffRequests property */
    timeOffRequests?:TimeOffRequest[] | undefined;
    /** Indicates whether time off requests are enabled for the schedule. */
    timeOffRequestsEnabled?:boolean | undefined;
    /** The instances of times off in the schedule. */
    timesOff?:TimeOff[] | undefined;
    /** Indicates the time zone of the schedule team using tz database format. Required. */
    timeZone?:string | undefined;
    /** The workforceIntegrationIds property */
    workforceIntegrationIds?:string[] | undefined;
}
