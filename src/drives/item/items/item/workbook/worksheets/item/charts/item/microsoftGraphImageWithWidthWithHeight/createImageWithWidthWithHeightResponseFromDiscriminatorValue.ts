import {ImageWithWidthWithHeightResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageWithWidthWithHeightResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImageWithWidthWithHeightResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImageWithWidthWithHeightResponse();
}
