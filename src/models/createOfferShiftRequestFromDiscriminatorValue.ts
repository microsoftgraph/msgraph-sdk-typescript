import {OfferShiftRequest, SwapShiftsChangeRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfferShiftRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfferShiftRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.swapShiftsChangeRequest":
                    return new SwapShiftsChangeRequest();
            }
        }
    }
    return new OfferShiftRequest();
}
