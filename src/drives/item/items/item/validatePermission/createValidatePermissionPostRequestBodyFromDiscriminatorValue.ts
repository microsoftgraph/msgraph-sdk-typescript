import {deserializeIntoValidatePermissionPostRequestBody} from './deserializeIntoValidatePermissionPostRequestBody';
import {ValidatePermissionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePermissionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoValidatePermissionPostRequestBody;
}
