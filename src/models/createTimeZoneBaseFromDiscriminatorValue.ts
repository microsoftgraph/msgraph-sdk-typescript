import {CustomTimeZoneImpl, TimeZoneBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeZoneBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeZoneBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.customTimeZone":
                    return new CustomTimeZoneImpl();
            }
        }
    }
    return new TimeZoneBaseImpl();
}
