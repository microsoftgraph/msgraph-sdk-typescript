import { deserializeIntoImLnPostRequestBody } from './deserializeIntoImLnPostRequestBody';
import { type ImLnPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImLnPostRequestBody;
}
