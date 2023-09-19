import { deserializeIntoAndroidStoreAppCollectionResponse } from './deserializeIntoAndroidStoreAppCollectionResponse';
import { type AndroidStoreAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAndroidStoreAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAndroidStoreAppCollectionResponse;
}
