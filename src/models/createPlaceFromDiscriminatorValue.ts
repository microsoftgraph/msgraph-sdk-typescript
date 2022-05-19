import {Place} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlaceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Place {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.place":
                    return new Place();
            }
        }
    }
    return new Place();
}
