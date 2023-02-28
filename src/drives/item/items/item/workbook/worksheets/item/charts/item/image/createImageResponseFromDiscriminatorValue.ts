import {ImageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImageResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImageResponse();
}
