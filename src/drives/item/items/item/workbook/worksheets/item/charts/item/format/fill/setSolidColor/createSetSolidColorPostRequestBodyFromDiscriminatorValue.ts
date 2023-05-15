import {deserializeIntoSetSolidColorPostRequestBody} from './deserializeIntoSetSolidColorPostRequestBody';
import {SetSolidColorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetSolidColorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetSolidColorPostRequestBody;
}
