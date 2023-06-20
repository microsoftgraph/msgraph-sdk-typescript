import {AddGroupResponse} from './addGroupResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddGroupResponse(addGroupResponse: AddGroupResponse | undefined = {} as AddGroupResponse, writer: SerializationWriter) : void {
        writer.writeBooleanValue("value", addGroupResponse.value);
        writer.writeAdditionalData(addGroupResponse.additionalData);
}
