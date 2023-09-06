import { deserializeIntoPasswordResetResponse } from './deserializeIntoPasswordResetResponse';
import { type PasswordResetResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPasswordResetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordResetResponse;
}
