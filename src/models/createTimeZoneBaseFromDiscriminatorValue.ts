import { deserializeIntoCustomTimeZone } from './deserializeIntoCustomTimeZone';
import { deserializeIntoTimeZoneBase } from './deserializeIntoTimeZoneBase';
import { type CustomTimeZone, type TimeZoneBase } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeZoneBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.customTimeZone":
                    return deserializeIntoCustomTimeZone;
            }
        }
    }
    return deserializeIntoTimeZoneBase;
}
