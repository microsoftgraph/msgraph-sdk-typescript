import {deserializeIntoNperPostRequestBody} from './deserializeIntoNperPostRequestBody';
import {NperPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNperPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNperPostRequestBody;
}
