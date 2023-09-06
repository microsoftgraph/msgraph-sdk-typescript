import { deserializeIntoPublicError } from './deserializeIntoPublicError';
import { type PublicError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPublicErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicError;
}
