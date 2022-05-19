import {ChangePasswordPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangePasswordPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangePasswordPostRequestBody();
}
