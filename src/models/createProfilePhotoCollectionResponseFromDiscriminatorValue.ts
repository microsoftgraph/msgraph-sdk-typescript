import { deserializeIntoProfilePhotoCollectionResponse } from './deserializeIntoProfilePhotoCollectionResponse';
import { type ProfilePhotoCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProfilePhotoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProfilePhotoCollectionResponse;
}
