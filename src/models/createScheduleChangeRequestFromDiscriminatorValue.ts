import {OfferShiftRequest, OpenShiftChangeRequest, ScheduleChangeRequest, SwapShiftsChangeRequest, TimeOffRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleChangeRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.offerShiftRequest":
                    return new OfferShiftRequest();
                case "#microsoft.graph.openShiftChangeRequest":
                    return new OpenShiftChangeRequest();
                case "#microsoft.graph.swapShiftsChangeRequest":
                    return new SwapShiftsChangeRequest();
                case "#microsoft.graph.timeOffRequest":
                    return new TimeOffRequest();
            }
        }
    }
    return new ScheduleChangeRequest();
}
