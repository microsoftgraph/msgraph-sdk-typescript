import {deserializeIntoQuotientPostRequestBody} from './deserializeIntoQuotientPostRequestBody';
import {QuotientPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuotientPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoQuotientPostRequestBody;
}
