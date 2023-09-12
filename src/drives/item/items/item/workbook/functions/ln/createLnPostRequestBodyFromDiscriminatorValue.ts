import { deserializeIntoLnPostRequestBody } from './deserializeIntoLnPostRequestBody';
import { type LnPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLnPostRequestBody;
}
