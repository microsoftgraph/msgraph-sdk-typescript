import {deserializeIntoManagedAppStatusRaw} from './deserializeIntoManagedAppStatusRaw';
import {ManagedAppStatusRaw} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusRawFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppStatusRaw;
}
