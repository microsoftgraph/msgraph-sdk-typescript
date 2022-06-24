import {ManagedAppStatusRawImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusRawFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatusRawImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppStatusRawImpl();
}
