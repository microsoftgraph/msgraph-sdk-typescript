import {ManagedIOSStoreAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedIOSStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedIOSStoreAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedIOSStoreAppImpl();
}
