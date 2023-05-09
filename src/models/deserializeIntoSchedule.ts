import {createOfferShiftRequestFromDiscriminatorValue} from './createOfferShiftRequestFromDiscriminatorValue';
import {createOpenShiftChangeRequestFromDiscriminatorValue} from './createOpenShiftChangeRequestFromDiscriminatorValue';
import {createOpenShiftFromDiscriminatorValue} from './createOpenShiftFromDiscriminatorValue';
import {createSchedulingGroupFromDiscriminatorValue} from './createSchedulingGroupFromDiscriminatorValue';
import {createShiftFromDiscriminatorValue} from './createShiftFromDiscriminatorValue';
import {createSwapShiftsChangeRequestFromDiscriminatorValue} from './createSwapShiftsChangeRequestFromDiscriminatorValue';
import {createTimeOffFromDiscriminatorValue} from './createTimeOffFromDiscriminatorValue';
import {createTimeOffReasonFromDiscriminatorValue} from './createTimeOffReasonFromDiscriminatorValue';
import {createTimeOffRequestFromDiscriminatorValue} from './createTimeOffRequestFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OfferShiftRequest} from './offerShiftRequest';
import {OpenShift} from './openShift';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {OperationStatus} from './operationStatus';
import {Schedule} from './schedule';
import {SchedulingGroup} from './schedulingGroup';
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

export function deserializeIntoSchedule(schedule: Schedule | undefined = {} as Schedule) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(schedule),
        "enabled": n => { schedule.enabled = n.getBooleanValue(); },
        "offerShiftRequests": n => { schedule.offerShiftRequests = n.getCollectionOfObjectValues<OfferShiftRequest>(createOfferShiftRequestFromDiscriminatorValue); },
        "offerShiftRequestsEnabled": n => { schedule.offerShiftRequestsEnabled = n.getBooleanValue(); },
        "openShiftChangeRequests": n => { schedule.openShiftChangeRequests = n.getCollectionOfObjectValues<OpenShiftChangeRequest>(createOpenShiftChangeRequestFromDiscriminatorValue); },
        "openShifts": n => { schedule.openShifts = n.getCollectionOfObjectValues<OpenShift>(createOpenShiftFromDiscriminatorValue); },
        "openShiftsEnabled": n => { schedule.openShiftsEnabled = n.getBooleanValue(); },
        "provisionStatus": n => { schedule.provisionStatus = n.getEnumValue<OperationStatus>(OperationStatus); },
        "provisionStatusCode": n => { schedule.provisionStatusCode = n.getStringValue(); },
        "schedulingGroups": n => { schedule.schedulingGroups = n.getCollectionOfObjectValues<SchedulingGroup>(createSchedulingGroupFromDiscriminatorValue); },
        "shifts": n => { schedule.shifts = n.getCollectionOfObjectValues<Shift>(createShiftFromDiscriminatorValue); },
        "swapShiftsChangeRequests": n => { schedule.swapShiftsChangeRequests = n.getCollectionOfObjectValues<SwapShiftsChangeRequest>(createSwapShiftsChangeRequestFromDiscriminatorValue); },
        "swapShiftsRequestsEnabled": n => { schedule.swapShiftsRequestsEnabled = n.getBooleanValue(); },
        "timeClockEnabled": n => { schedule.timeClockEnabled = n.getBooleanValue(); },
        "timeOffReasons": n => { schedule.timeOffReasons = n.getCollectionOfObjectValues<TimeOffReason>(createTimeOffReasonFromDiscriminatorValue); },
        "timeOffRequests": n => { schedule.timeOffRequests = n.getCollectionOfObjectValues<TimeOffRequest>(createTimeOffRequestFromDiscriminatorValue); },
        "timeOffRequestsEnabled": n => { schedule.timeOffRequestsEnabled = n.getBooleanValue(); },
        "timesOff": n => { schedule.timesOff = n.getCollectionOfObjectValues<TimeOff>(createTimeOffFromDiscriminatorValue); },
        "timeZone": n => { schedule.timeZone = n.getStringValue(); },
        "workforceIntegrationIds": n => { schedule.workforceIntegrationIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
