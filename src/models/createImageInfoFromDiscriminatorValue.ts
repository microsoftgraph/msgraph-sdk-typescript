import { deserializeIntoImageInfo } from './deserializeIntoImageInfo';
import { type ImageInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageInfo;
}
