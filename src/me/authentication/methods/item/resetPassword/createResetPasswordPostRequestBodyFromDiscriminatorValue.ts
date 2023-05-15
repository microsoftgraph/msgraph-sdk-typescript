import {deserializeIntoResetPasswordPostRequestBody} from './deserializeIntoResetPasswordPostRequestBody';
import {ResetPasswordPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResetPasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResetPasswordPostRequestBody;
}
