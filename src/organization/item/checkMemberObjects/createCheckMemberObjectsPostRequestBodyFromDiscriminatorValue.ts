import { deserializeIntoCheckMemberObjectsPostRequestBody } from './deserializeIntoCheckMemberObjectsPostRequestBody';
import { type CheckMemberObjectsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCheckMemberObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCheckMemberObjectsPostRequestBody;
}
