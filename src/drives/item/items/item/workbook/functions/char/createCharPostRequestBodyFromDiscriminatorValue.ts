import {deserializeIntoCharPostRequestBody} from './deserializeIntoCharPostRequestBody';
import {CharPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCharPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCharPostRequestBody;
}
