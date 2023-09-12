import { deserializeIntoVlookupPostRequestBody } from './deserializeIntoVlookupPostRequestBody';
import { type VlookupPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVlookupPostRequestBody;
}
