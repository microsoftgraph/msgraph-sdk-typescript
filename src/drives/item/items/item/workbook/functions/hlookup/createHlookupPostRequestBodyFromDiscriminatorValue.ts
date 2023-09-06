import { deserializeIntoHlookupPostRequestBody } from './deserializeIntoHlookupPostRequestBody';
import { type HlookupPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHlookupPostRequestBody;
}
