import {ValidatePermissionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePermissionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePermissionPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePermissionPostRequestBody();
}
