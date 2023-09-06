import { deserializeIntoTrimMeanPostRequestBody } from './deserializeIntoTrimMeanPostRequestBody';
import { type TrimMeanPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTrimMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTrimMeanPostRequestBody;
}
