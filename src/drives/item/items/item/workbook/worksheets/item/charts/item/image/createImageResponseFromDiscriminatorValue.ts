import {deserializeIntoImageResponse} from './deserializeIntoImageResponse';
import {ImageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageResponse;
}
