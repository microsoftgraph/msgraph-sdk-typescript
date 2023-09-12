import { deserializeIntoLookupPostRequestBody } from './deserializeIntoLookupPostRequestBody';
import { type LookupPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLookupPostRequestBody;
}
