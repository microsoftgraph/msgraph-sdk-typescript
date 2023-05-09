import {deserializeIntoSecondPostRequestBody} from './deserializeIntoSecondPostRequestBody';
import {SecondPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecondPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecondPostRequestBody;
}
