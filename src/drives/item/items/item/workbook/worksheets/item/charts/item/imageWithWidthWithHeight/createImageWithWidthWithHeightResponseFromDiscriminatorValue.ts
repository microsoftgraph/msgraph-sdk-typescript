import {deserializeIntoImageWithWidthWithHeightResponse} from './deserializeIntoImageWithWidthWithHeightResponse';
import {ImageWithWidthWithHeightResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageWithWidthWithHeightResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageWithWidthWithHeightResponse;
}
