import { deserializeIntoGetMemberObjectsPostRequestBody } from './deserializeIntoGetMemberObjectsPostRequestBody';
import { type GetMemberObjectsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetMemberObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetMemberObjectsPostRequestBody;
}
