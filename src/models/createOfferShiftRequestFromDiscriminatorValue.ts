import {OfferShiftRequestImpl, SwapShiftsChangeRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOfferShiftRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : OfferShiftRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.swapShiftsChangeRequest":
                    return new SwapShiftsChangeRequestImpl();
            }
        }
    }
    return new OfferShiftRequestImpl();
}
