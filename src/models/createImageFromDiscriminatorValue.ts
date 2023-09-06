import { deserializeIntoImage } from './deserializeIntoImage';
import { type Image } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImageFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImage;
}
