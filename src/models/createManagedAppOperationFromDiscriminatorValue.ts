import {ManagedAppOperationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppOperationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppOperationImpl();
}
