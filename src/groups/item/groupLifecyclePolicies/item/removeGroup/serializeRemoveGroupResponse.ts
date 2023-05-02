import {RemoveGroupResponse} from './removeGroupResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveGroupResponse(writer: SerializationWriter, removeGroupResponse: RemoveGroupResponse | undefined = {} as RemoveGroupResponse) : void {
        writer.writeBooleanValue("value", removeGroupResponse.value);
        writer.writeAdditionalData(removeGroupResponse.additionalData);
}
