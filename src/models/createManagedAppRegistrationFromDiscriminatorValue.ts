import {ManagedAppRegistrationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppRegistrationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppRegistration":
                    return new ManagedAppRegistrationImpl();
            }
        }
    }
    return new ManagedAppRegistrationImpl();
}
