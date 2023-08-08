import type {AddGroupResponse} from './addGroupResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddGroupResponse(writer: SerializationWriter, addGroupResponse: AddGroupResponse | undefined = {} as AddGroupResponse) : void {
        writer.writeBooleanValue("value", addGroupResponse.value);
        writer.writeAdditionalData(addGroupResponse.additionalData);
}
