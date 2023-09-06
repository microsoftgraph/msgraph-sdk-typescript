import { deserializeIntoErrorDetails } from './deserializeIntoErrorDetails';
import { type ErrorDetails } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createErrorDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoErrorDetails;
}
