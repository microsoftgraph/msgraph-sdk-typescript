import type {GetMemberGroupsPostRequestBody} from './getMemberGroupsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMemberGroupsPostRequestBody(getMemberGroupsPostRequestBody: GetMemberGroupsPostRequestBody | undefined = {} as GetMemberGroupsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "securityEnabledOnly": n => { getMemberGroupsPostRequestBody.securityEnabledOnly = n.getBooleanValue(); },
    }
}
