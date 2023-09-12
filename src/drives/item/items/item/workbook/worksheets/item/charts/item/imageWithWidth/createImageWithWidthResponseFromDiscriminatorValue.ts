import { deserializeIntoImageWithWidthResponse } from './deserializeIntoImageWithWidthResponse';
import { type ImageWithWidthResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImageWithWidthResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageWithWidthResponse;
}
