import {deserializeIntoFloor_PrecisePostRequestBody} from './deserializeIntoFloor_PrecisePostRequestBody';
import {Floor_PrecisePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFloor_PrecisePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFloor_PrecisePostRequestBody;
}
