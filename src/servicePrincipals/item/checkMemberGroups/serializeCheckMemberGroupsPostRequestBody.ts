import {CheckMemberGroupsPostRequestBody} from './checkMemberGroupsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberGroupsPostRequestBody(checkMemberGroupsPostRequestBody: CheckMemberGroupsPostRequestBody | undefined = {} as CheckMemberGroupsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("groupIds", checkMemberGroupsPostRequestBody.groupIds);
        writer.writeAdditionalData(checkMemberGroupsPostRequestBody.additionalData);
}
