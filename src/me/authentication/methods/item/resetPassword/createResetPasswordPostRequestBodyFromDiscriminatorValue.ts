import {ResetPasswordPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResetPasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResetPasswordPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResetPasswordPostRequestBody();
}
