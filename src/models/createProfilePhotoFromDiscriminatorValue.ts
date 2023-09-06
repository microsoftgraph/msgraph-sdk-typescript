import { deserializeIntoProfilePhoto } from './deserializeIntoProfilePhoto';
import { type ProfilePhoto } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProfilePhotoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProfilePhoto;
}
