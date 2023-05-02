import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoOfferShiftRequest} from './deserializeIntoOfferShiftRequest';
import {deserializeIntoOpenShift} from './deserializeIntoOpenShift';
import {deserializeIntoOpenShiftChangeRequest} from './deserializeIntoOpenShiftChangeRequest';
import {deserializeIntoScheduleChangeRequest} from './deserializeIntoScheduleChangeRequest';
import {deserializeIntoSchedulingGroup} from './deserializeIntoSchedulingGroup';
import {deserializeIntoShift} from './deserializeIntoShift';
import {deserializeIntoShiftPreferences} from './deserializeIntoShiftPreferences';
import {deserializeIntoSwapShiftsChangeRequest} from './deserializeIntoSwapShiftsChangeRequest';
import {deserializeIntoTimeOff} from './deserializeIntoTimeOff';
import {deserializeIntoTimeOffReason} from './deserializeIntoTimeOffReason';
import {deserializeIntoTimeOffRequest} from './deserializeIntoTimeOffRequest';
import {deserializeIntoWorkforceIntegration} from './deserializeIntoWorkforceIntegration';
import {ChangeTrackedEntity, OfferShiftRequest, OpenShift, OpenShiftChangeRequest, ScheduleChangeRequest, SchedulingGroup, Shift, ShiftPreferences, SwapShiftsChangeRequest, TimeOff, TimeOffReason, TimeOffRequest, WorkforceIntegration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeTrackedEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.offerShiftRequest":
                    return deserializeIntoOfferShiftRequest;
                case "#microsoft.graph.openShift":
                    return deserializeIntoOpenShift;
                case "#microsoft.graph.openShiftChangeRequest":
                    return deserializeIntoOpenShiftChangeRequest;
                case "#microsoft.graph.scheduleChangeRequest":
                    return deserializeIntoScheduleChangeRequest;
                case "#microsoft.graph.schedulingGroup":
                    return deserializeIntoSchedulingGroup;
                case "#microsoft.graph.shift":
                    return deserializeIntoShift;
                case "#microsoft.graph.shiftPreferences":
                    return deserializeIntoShiftPreferences;
                case "#microsoft.graph.swapShiftsChangeRequest":
                    return deserializeIntoSwapShiftsChangeRequest;
                case "#microsoft.graph.timeOff":
                    return deserializeIntoTimeOff;
                case "#microsoft.graph.timeOffReason":
                    return deserializeIntoTimeOffReason;
                case "#microsoft.graph.timeOffRequest":
                    return deserializeIntoTimeOffRequest;
                case "#microsoft.graph.workforceIntegration":
                    return deserializeIntoWorkforceIntegration;
            }
        }
    }
    return deserializeIntoChangeTrackedEntity;
}
