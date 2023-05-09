import {deserializeIntoManagedIOSStoreApp} from './deserializeIntoManagedIOSStoreApp';
import {ManagedIOSStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedIOSStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedIOSStoreApp;
}
