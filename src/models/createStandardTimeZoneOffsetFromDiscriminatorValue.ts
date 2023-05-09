import {deserializeIntoDaylightTimeZoneOffset} from './deserializeIntoDaylightTimeZoneOffset';
import {deserializeIntoStandardTimeZoneOffset} from './deserializeIntoStandardTimeZoneOffset';
import {DaylightTimeZoneOffset, StandardTimeZoneOffset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStandardTimeZoneOffsetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.daylightTimeZoneOffset":
                    return deserializeIntoDaylightTimeZoneOffset;
            }
        }
    }
    return deserializeIntoStandardTimeZoneOffset;
}
