import {ProfilePhotoCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProfilePhotoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProfilePhotoCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProfilePhotoCollectionResponseImpl();
}
