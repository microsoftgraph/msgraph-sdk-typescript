import {deserializeIntoImageWithWidthWithHeightWithFittingModeResponse} from './deserializeIntoImageWithWidthWithHeightWithFittingModeResponse';
import {ImageWithWidthWithHeightWithFittingModeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageWithWidthWithHeightWithFittingModeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageWithWidthWithHeightWithFittingModeResponse;
}
