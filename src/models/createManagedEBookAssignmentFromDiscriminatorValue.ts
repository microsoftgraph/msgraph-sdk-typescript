import {deserializeIntoIosVppEBookAssignment} from './deserializeIntoIosVppEBookAssignment';
import {deserializeIntoManagedEBookAssignment} from './deserializeIntoManagedEBookAssignment';
import {IosVppEBookAssignment, ManagedEBookAssignment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iosVppEBookAssignment":
                    return deserializeIntoIosVppEBookAssignment;
            }
        }
    }
    return deserializeIntoManagedEBookAssignment;
}
