import { deserializeIntoHarMeanPostRequestBody } from './deserializeIntoHarMeanPostRequestBody';
import { type HarMeanPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHarMeanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHarMeanPostRequestBody;
}
