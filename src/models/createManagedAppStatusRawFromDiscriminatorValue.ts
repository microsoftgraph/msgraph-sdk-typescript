import {ManagedAppStatusRaw} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusRawFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatusRaw {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppStatusRaw();
}
