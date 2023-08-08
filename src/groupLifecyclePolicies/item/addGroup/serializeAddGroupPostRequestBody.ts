import type {AddGroupPostRequestBody} from './addGroupPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddGroupPostRequestBody(writer: SerializationWriter, addGroupPostRequestBody: AddGroupPostRequestBody | undefined = {} as AddGroupPostRequestBody) : void {
        writer.writeStringValue("groupId", addGroupPostRequestBody.groupId);
        writer.writeAdditionalData(addGroupPostRequestBody.additionalData);
}
