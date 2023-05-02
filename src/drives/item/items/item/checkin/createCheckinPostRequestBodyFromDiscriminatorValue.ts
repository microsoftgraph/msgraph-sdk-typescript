import {deserializeIntoCheckinPostRequestBody} from './deserializeIntoCheckinPostRequestBody';
import {CheckinPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckinPostRequestBody;
}
