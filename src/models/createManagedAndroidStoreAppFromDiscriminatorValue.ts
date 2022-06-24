import {ManagedAndroidStoreAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAndroidStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAndroidStoreAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAndroidStoreAppImpl();
}
