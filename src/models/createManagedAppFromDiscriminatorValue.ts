import {ManagedAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppImpl();
}
