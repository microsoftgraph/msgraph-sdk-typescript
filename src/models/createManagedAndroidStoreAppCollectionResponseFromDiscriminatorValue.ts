import {ManagedAndroidStoreAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAndroidStoreAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAndroidStoreAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAndroidStoreAppCollectionResponse();
}
