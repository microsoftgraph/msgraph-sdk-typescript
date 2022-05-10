import {ValidatePermissionRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePermissionRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePermissionRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePermissionRequestBodyImpl();
}
