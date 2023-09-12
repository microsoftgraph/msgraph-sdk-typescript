import { deserializeIntoImageWithWidthWithHeightWithFittingModeResponse } from './deserializeIntoImageWithWidthWithHeightWithFittingModeResponse';
import { type ImageWithWidthWithHeightWithFittingModeResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImageWithWidthWithHeightWithFittingModeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImageWithWidthWithHeightWithFittingModeResponse;
}
