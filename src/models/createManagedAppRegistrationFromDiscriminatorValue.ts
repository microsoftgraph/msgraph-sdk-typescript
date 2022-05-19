import {ManagedAppRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppRegistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppRegistration":
                    return new ManagedAppRegistration();
            }
        }
    }
    return new ManagedAppRegistration();
}
