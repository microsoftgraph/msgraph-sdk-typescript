import { type GetMemberObjectsPostRequestBody } from './getMemberObjectsPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberObjectsPostRequestBody(getMemberObjectsPostRequestBody: GetMemberObjectsPostRequestBody | undefined = {} as GetMemberObjectsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "securityEnabledOnly": n => { getMemberObjectsPostRequestBody.securityEnabledOnly = n.getBooleanValue(); },
    }
}
