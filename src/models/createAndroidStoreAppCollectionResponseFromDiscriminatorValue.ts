import {AndroidStoreAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidStoreAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidStoreAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidStoreAppCollectionResponse();
}
