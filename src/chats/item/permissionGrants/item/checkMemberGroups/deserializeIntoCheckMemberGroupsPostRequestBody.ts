import { type CheckMemberGroupsPostRequestBody } from './checkMemberGroupsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCheckMemberGroupsPostRequestBody(checkMemberGroupsPostRequestBody: CheckMemberGroupsPostRequestBody | undefined = {} as CheckMemberGroupsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "groupIds": n => { checkMemberGroupsPostRequestBody.groupIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
