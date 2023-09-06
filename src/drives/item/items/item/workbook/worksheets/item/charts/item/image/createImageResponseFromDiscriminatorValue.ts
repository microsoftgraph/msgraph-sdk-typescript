import { deserializeIntoImageResponse } from './deserializeIntoImageResponse';
import { type ImageResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageResponse;
}
