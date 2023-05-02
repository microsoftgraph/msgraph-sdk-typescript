import {deserializeIntoManagedAndroidStoreApp} from './deserializeIntoManagedAndroidStoreApp';
import {ManagedAndroidStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAndroidStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAndroidStoreApp;
}
