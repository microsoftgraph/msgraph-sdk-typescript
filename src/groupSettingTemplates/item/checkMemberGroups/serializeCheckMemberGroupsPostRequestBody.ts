import type {CheckMemberGroupsPostRequestBody} from './checkMemberGroupsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberGroupsPostRequestBody(writer: SerializationWriter, checkMemberGroupsPostRequestBody: CheckMemberGroupsPostRequestBody | undefined = {} as CheckMemberGroupsPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("groupIds", checkMemberGroupsPostRequestBody.groupIds);
        writer.writeAdditionalData(checkMemberGroupsPostRequestBody.additionalData);
}
