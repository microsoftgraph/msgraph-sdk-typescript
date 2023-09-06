import { deserializeIntoManagedAppStatus } from './deserializeIntoManagedAppStatus';
import { deserializeIntoManagedAppStatusRaw } from './deserializeIntoManagedAppStatusRaw';
import { type ManagedAppStatus, type ManagedAppStatusRaw } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.managedAppStatusRaw":
                    return deserializeIntoManagedAppStatusRaw;
            }
        }
    }
    return deserializeIntoManagedAppStatus;
}
