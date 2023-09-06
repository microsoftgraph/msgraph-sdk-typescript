import { deserializeIntoGenericError } from './deserializeIntoGenericError';
import { type GenericError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGenericErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGenericError;
}
