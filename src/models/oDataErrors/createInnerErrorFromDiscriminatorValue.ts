import { deserializeIntoInnerError } from './deserializeIntoInnerError';
import { type InnerError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInnerError;
}
