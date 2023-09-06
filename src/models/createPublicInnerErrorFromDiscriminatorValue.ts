import { deserializeIntoPublicInnerError } from './deserializeIntoPublicInnerError';
import { type PublicInnerError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPublicInnerErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPublicInnerError;
}
