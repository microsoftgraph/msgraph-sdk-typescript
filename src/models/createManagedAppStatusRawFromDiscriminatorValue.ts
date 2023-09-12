import { deserializeIntoManagedAppStatusRaw } from './deserializeIntoManagedAppStatusRaw';
import { type ManagedAppStatusRaw } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createManagedAppStatusRawFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppStatusRaw;
}
