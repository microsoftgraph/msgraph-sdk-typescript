import {PhotoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhotoFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhotoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhotoImpl();
}
