import {deserializeIntoGetMemberObjectsPostRequestBody} from './deserializeIntoGetMemberObjectsPostRequestBody';
import {GetMemberObjectsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMemberObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMemberObjectsPostRequestBody;
}
