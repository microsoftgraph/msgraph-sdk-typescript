import {OfferShiftRequestImpl, OpenShiftChangeRequestImpl, ScheduleChangeRequestImpl, TimeOffRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createScheduleChangeRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ScheduleChangeRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.offerShiftRequest":
                    return new OfferShiftRequestImpl();
                case "#microsoft.graph.openShiftChangeRequest":
                    return new OpenShiftChangeRequestImpl();
                case "#microsoft.graph.timeOffRequest":
                    return new TimeOffRequestImpl();
            }
        }
    }
    return new ScheduleChangeRequestImpl();
}
