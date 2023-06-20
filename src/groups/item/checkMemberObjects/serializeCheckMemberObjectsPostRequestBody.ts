import {CheckMemberObjectsPostRequestBody} from './checkMemberObjectsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberObjectsPostRequestBody(checkMemberObjectsPostRequestBody: CheckMemberObjectsPostRequestBody | undefined = {} as CheckMemberObjectsPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", checkMemberObjectsPostRequestBody.ids);
        writer.writeAdditionalData(checkMemberObjectsPostRequestBody.additionalData);
}
