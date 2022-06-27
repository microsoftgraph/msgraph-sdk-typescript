import {DaylightTimeZoneOffsetImpl, StandardTimeZoneOffsetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStandardTimeZoneOffsetFromDiscriminatorValue(parseNode: ParseNode | undefined) : StandardTimeZoneOffsetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.daylightTimeZoneOffset":
                    return new DaylightTimeZoneOffsetImpl();
            }
        }
    }
    return new StandardTimeZoneOffsetImpl();
}
