import { deserializeIntoValidatePermissionPostRequestBody } from './deserializeIntoValidatePermissionPostRequestBody';
import { type ValidatePermissionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createValidatePermissionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoValidatePermissionPostRequestBody;
}
