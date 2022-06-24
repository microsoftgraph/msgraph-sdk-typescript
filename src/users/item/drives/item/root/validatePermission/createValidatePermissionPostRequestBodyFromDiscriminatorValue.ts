import {ValidatePermissionPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePermissionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePermissionPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePermissionPostRequestBodyImpl();
}
