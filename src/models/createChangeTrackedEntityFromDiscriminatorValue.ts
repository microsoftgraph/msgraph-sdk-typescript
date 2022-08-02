import {ChangeTrackedEntity, OfferShiftRequest, OpenShift, OpenShiftChangeRequest, ScheduleChangeRequest, SchedulingGroup, Shift, ShiftPreferences, SwapShiftsChangeRequest, TimeOff, TimeOffReason, TimeOffRequest, WorkforceIntegration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangeTrackedEntityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangeTrackedEntity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.offerShiftRequest":
                    return new OfferShiftRequest();
                case "#microsoft.graph.openShift":
                    return new OpenShift();
                case "#microsoft.graph.openShiftChangeRequest":
                    return new OpenShiftChangeRequest();
                case "#microsoft.graph.scheduleChangeRequest":
                    return new ScheduleChangeRequest();
                case "#microsoft.graph.schedulingGroup":
                    return new SchedulingGroup();
                case "#microsoft.graph.shift":
                    return new Shift();
                case "#microsoft.graph.shiftPreferences":
                    return new ShiftPreferences();
                case "#microsoft.graph.swapShiftsChangeRequest":
                    return new SwapShiftsChangeRequest();
                case "#microsoft.graph.timeOff":
                    return new TimeOff();
                case "#microsoft.graph.timeOffReason":
                    return new TimeOffReason();
                case "#microsoft.graph.timeOffRequest":
                    return new TimeOffRequest();
                case "#microsoft.graph.workforceIntegration":
                    return new WorkforceIntegration();
            }
        }
    }
    return new ChangeTrackedEntity();
}
