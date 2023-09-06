import { deserializeIntoUnarchiveResponse } from './deserializeIntoUnarchiveResponse';
import { type UnarchiveResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUnarchiveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnarchiveResponse;
}
