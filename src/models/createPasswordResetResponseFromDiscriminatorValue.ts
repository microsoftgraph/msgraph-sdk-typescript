import {PasswordResetResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordResetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordResetResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordResetResponse();
}
