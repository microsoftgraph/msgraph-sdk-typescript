import {ImageWithWidthResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageWithWidthResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImageWithWidthResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImageWithWidthResponse();
}
