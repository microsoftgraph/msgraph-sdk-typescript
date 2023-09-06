import { deserializeIntoOfferShiftRequest } from './deserializeIntoOfferShiftRequest';
import { deserializeIntoOpenShiftChangeRequest } from './deserializeIntoOpenShiftChangeRequest';
import { deserializeIntoScheduleChangeRequest } from './deserializeIntoScheduleChangeRequest';
import { deserializeIntoSwapShiftsChangeRequest } from './deserializeIntoSwapShiftsChangeRequest';
import { deserializeIntoTimeOffRequest } from './deserializeIntoTimeOffRequest';
import { type OfferShiftRequest, type OpenShiftChangeRequest, type ScheduleChangeRequest, type SwapShiftsChangeRequest, type TimeOffRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createScheduleChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.offerShiftRequest":
                    return deserializeIntoOfferShiftRequest;
                case "#microsoft.graph.openShiftChangeRequest":
                    return deserializeIntoOpenShiftChangeRequest;
                case "#microsoft.graph.swapShiftsChangeRequest":
                    return deserializeIntoSwapShiftsChangeRequest;
                case "#microsoft.graph.timeOffRequest":
                    return deserializeIntoTimeOffRequest;
            }
        }
    }
    return deserializeIntoScheduleChangeRequest;
}
