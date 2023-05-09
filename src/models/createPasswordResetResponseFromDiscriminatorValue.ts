import {deserializeIntoPasswordResetResponse} from './deserializeIntoPasswordResetResponse';
import {PasswordResetResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordResetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordResetResponse;
}
