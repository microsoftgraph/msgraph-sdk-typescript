import {AddGroupResponse} from './addGroupResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddGroupResponse(writer: SerializationWriter, addGroupResponse: AddGroupResponse | undefined = {} as AddGroupResponse) : void {
        writer.writeBooleanValue("value", addGroupResponse.value);
        writer.writeAdditionalData(addGroupResponse.additionalData);
}
