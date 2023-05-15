import {deserializeIntoChoosePostRequestBody} from './deserializeIntoChoosePostRequestBody';
import {ChoosePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChoosePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChoosePostRequestBody;
}
