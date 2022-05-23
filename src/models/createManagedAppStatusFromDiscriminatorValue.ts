import {ManagedAppStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppStatus":
                    return new ManagedAppStatusImpl();
            }
        }
    }
    return new ManagedAppStatusImpl();
}
