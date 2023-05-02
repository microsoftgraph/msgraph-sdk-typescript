import {deserializeIntoCalculatePostRequestBody} from './deserializeIntoCalculatePostRequestBody';
import {CalculatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCalculatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCalculatePostRequestBody;
}
