import {deserializeIntoGcdPostRequestBody} from './deserializeIntoGcdPostRequestBody';
import {GcdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGcdPostRequestBody;
}
