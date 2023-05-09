import {deserializeIntoRandBetweenPostRequestBody} from './deserializeIntoRandBetweenPostRequestBody';
import {RandBetweenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRandBetweenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRandBetweenPostRequestBody;
}
