import { deserializeIntoUnarchivePostRequestBody } from './deserializeIntoUnarchivePostRequestBody';
import { type UnarchivePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnarchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnarchivePostRequestBody;
}
