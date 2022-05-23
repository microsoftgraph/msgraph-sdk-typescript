import {ProfilePhotoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProfilePhotoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProfilePhotoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProfilePhotoImpl();
}
