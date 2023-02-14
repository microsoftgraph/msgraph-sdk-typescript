import {ImageWithWidthWithHeightWithFittingModeResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImageWithWidthWithHeightWithFittingModeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImageWithWidthWithHeightWithFittingModeResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImageWithWidthWithHeightWithFittingModeResponse();
}
