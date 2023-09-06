import { deserializeIntoPromoteResponse } from './deserializeIntoPromoteResponse';
import { type PromoteResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPromoteResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPromoteResponse;
}
