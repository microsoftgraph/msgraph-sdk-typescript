import { deserializeIntoChangePasswordPostRequestBody } from './deserializeIntoChangePasswordPostRequestBody';
import { type ChangePasswordPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChangePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChangePasswordPostRequestBody;
}
