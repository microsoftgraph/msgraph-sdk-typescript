import {OfferShiftRequest} from './offerShiftRequest';
import {OpenShift} from './openShift';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {OperationStatus} from './operationStatus';
import {Schedule} from './schedule';
import {SchedulingGroup} from './schedulingGroup';
import {serializeEntity} from './serializeEntity';
import {serializeOfferShiftRequest} from './serializeOfferShiftRequest';
import {serializeOpenShift} from './serializeOpenShift';
import {serializeOpenShiftChangeRequest} from './serializeOpenShiftChangeRequest';
import {serializeSchedulingGroup} from './serializeSchedulingGroup';
import {serializeShift} from './serializeShift';
import {serializeSwapShiftsChangeRequest} from './serializeSwapShiftsChangeRequest';
import {serializeTimeOff} from './serializeTimeOff';
import {serializeTimeOffReason} from './serializeTimeOffReason';
import {serializeTimeOffRequest} from './serializeTimeOffRequest';
import {Shift} from './shift';
import {SwapShiftsChangeRequest} from './swapShiftsChangeRequest';
import {TimeOff} from './timeOff';
import {TimeOffReason} from './timeOffReason';
import {TimeOffRequest} from './timeOffRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchedule(writer: SerializationWriter, schedule: Schedule | undefined = {} as Schedule) : void {
        serializeEntity(writer, schedule)
        writer.writeBooleanValue("enabled", schedule.enabled);
        writer.writeCollectionOfObjectValues<OfferShiftRequest>("offerShiftRequests", schedule.offerShiftRequests, serializeOfferShiftRequest);
        writer.writeBooleanValue("offerShiftRequestsEnabled", schedule.offerShiftRequestsEnabled);
        writer.writeCollectionOfObjectValues<OpenShiftChangeRequest>("openShiftChangeRequests", schedule.openShiftChangeRequests, serializeOpenShiftChangeRequest);
        writer.writeCollectionOfObjectValues<OpenShift>("openShifts", schedule.openShifts, serializeOpenShift);
        writer.writeBooleanValue("openShiftsEnabled", schedule.openShiftsEnabled);
        writer.writeCollectionOfObjectValues<SchedulingGroup>("schedulingGroups", schedule.schedulingGroups, serializeSchedulingGroup);
        writer.writeCollectionOfObjectValues<Shift>("shifts", schedule.shifts, serializeShift);
        writer.writeCollectionOfObjectValues<SwapShiftsChangeRequest>("swapShiftsChangeRequests", schedule.swapShiftsChangeRequests, serializeSwapShiftsChangeRequest);
        writer.writeBooleanValue("swapShiftsRequestsEnabled", schedule.swapShiftsRequestsEnabled);
        writer.writeBooleanValue("timeClockEnabled", schedule.timeClockEnabled);
        writer.writeCollectionOfObjectValues<TimeOffReason>("timeOffReasons", schedule.timeOffReasons, serializeTimeOffReason);
        writer.writeCollectionOfObjectValues<TimeOffRequest>("timeOffRequests", schedule.timeOffRequests, serializeTimeOffRequest);
        writer.writeBooleanValue("timeOffRequestsEnabled", schedule.timeOffRequestsEnabled);
        writer.writeCollectionOfObjectValues<TimeOff>("timesOff", schedule.timesOff, serializeTimeOff);
        writer.writeStringValue("timeZone", schedule.timeZone);
        writer.writeCollectionOfPrimitiveValues<string>("workforceIntegrationIds", schedule.workforceIntegrationIds);
}
