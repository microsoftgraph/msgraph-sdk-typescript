import { deserializeIntoPhoto } from './deserializeIntoPhoto';
import { type Photo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPhotoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhoto;
}
