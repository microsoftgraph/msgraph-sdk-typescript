import { type OfferShiftRequest } from './offerShiftRequest';
import { type OpenShift } from './openShift';
import { type OpenShiftChangeRequest } from './openShiftChangeRequest';
import { OperationStatus } from './operationStatus';
import { type Schedule } from './schedule';
import { type SchedulingGroup } from './schedulingGroup';
import { serializeEntity } from './serializeEntity';
import { serializeOfferShiftRequest } from './serializeOfferShiftRequest';
import { serializeOpenShift } from './serializeOpenShift';
import { serializeOpenShiftChangeRequest } from './serializeOpenShiftChangeRequest';
import { serializeSchedulingGroup } from './serializeSchedulingGroup';
import { serializeShift } from './serializeShift';
import { serializeSwapShiftsChangeRequest } from './serializeSwapShiftsChangeRequest';
import { serializeTimeOff } from './serializeTimeOff';
import { serializeTimeOffReason } from './serializeTimeOffReason';
import { serializeTimeOffRequest } from './serializeTimeOffRequest';
import { type Shift } from './shift';
import { type SwapShiftsChangeRequest } from './swapShiftsChangeRequest';
import { type TimeOff } from './timeOff';
import { type TimeOffReason } from './timeOffReason';
import { type TimeOffRequest } from './timeOffRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
