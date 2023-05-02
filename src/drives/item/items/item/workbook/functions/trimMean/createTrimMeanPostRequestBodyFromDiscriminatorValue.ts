import {deserializeIntoTrimMeanPostRequestBody} from './deserializeIntoTrimMeanPostRequestBody';
import {TrimMeanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrimMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTrimMeanPostRequestBody;
}
