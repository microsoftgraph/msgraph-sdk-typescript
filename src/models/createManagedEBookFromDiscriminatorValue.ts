import {ManagedEBookImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedEBookImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedEBook":
                    return new ManagedEBookImpl();
            }
        }
    }
    return new ManagedEBookImpl();
}
