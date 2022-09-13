import {ManagedAppStatus, ManagedAppStatusRaw} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppStatusRaw":
                    return new ManagedAppStatusRaw();
            }
        }
    }
    return new ManagedAppStatus();
}
