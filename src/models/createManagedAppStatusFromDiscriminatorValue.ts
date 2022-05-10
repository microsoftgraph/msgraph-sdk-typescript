import {ManagedAppStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppStatusImpl();
}
