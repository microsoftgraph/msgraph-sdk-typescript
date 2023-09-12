import { deserializeIntoQuotientPostRequestBody } from './deserializeIntoQuotientPostRequestBody';
import { type QuotientPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createQuotientPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQuotientPostRequestBody;
}
