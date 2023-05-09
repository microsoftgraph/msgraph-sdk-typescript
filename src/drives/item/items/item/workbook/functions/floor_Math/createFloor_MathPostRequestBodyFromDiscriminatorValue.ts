import {deserializeIntoFloor_MathPostRequestBody} from './deserializeIntoFloor_MathPostRequestBody';
import {Floor_MathPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFloor_MathPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFloor_MathPostRequestBody;
}
