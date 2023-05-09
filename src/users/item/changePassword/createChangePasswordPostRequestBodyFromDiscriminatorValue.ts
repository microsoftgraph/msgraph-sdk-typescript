import {deserializeIntoChangePasswordPostRequestBody} from './deserializeIntoChangePasswordPostRequestBody';
import {ChangePasswordPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChangePasswordPostRequestBody;
}
