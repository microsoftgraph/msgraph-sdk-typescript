import {deserializeIntoProfilePhotoCollectionResponse} from './deserializeIntoProfilePhotoCollectionResponse';
import {ProfilePhotoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProfilePhotoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProfilePhotoCollectionResponse;
}
