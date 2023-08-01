import {deserializeIntoCheckMemberObjectsPostRequestBody} from './deserializeIntoCheckMemberObjectsPostRequestBody';
import {CheckMemberObjectsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckMemberObjectsPostRequestBody;
}
