import { deserializeIntoAverageIfsPostRequestBody } from './deserializeIntoAverageIfsPostRequestBody';
import { type AverageIfsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAverageIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAverageIfsPostRequestBody;
}
