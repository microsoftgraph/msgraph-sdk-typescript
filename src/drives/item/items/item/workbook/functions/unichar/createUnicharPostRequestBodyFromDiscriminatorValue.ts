import {deserializeIntoUnicharPostRequestBody} from './deserializeIntoUnicharPostRequestBody';
import {UnicharPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnicharPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnicharPostRequestBody;
}
