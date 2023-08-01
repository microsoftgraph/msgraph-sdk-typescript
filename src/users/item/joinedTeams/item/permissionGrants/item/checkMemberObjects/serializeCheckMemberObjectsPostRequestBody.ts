import type {CheckMemberObjectsPostRequestBody} from './checkMemberObjectsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckMemberObjectsPostRequestBody(writer: SerializationWriter, checkMemberObjectsPostRequestBody: CheckMemberObjectsPostRequestBody | undefined = {} as CheckMemberObjectsPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", checkMemberObjectsPostRequestBody.ids);
        writer.writeAdditionalData(checkMemberObjectsPostRequestBody.additionalData);
}
