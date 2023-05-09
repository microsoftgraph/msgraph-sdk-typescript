import {deserializeIntoPhoto} from './deserializeIntoPhoto';
import {Photo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhotoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhoto;
}
