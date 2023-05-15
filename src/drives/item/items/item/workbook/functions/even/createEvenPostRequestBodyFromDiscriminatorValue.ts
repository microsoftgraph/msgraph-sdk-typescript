import {deserializeIntoEvenPostRequestBody} from './deserializeIntoEvenPostRequestBody';
import {EvenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEvenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEvenPostRequestBody;
}
