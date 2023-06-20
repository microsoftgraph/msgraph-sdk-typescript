import {AddGroupPostRequestBody} from './addGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddGroupPostRequestBody(addGroupPostRequestBody: AddGroupPostRequestBody | undefined = {} as AddGroupPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("groupId", addGroupPostRequestBody.groupId);
        writer.writeAdditionalData(addGroupPostRequestBody.additionalData);
}
