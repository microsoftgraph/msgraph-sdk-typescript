import {UnarchiveResponse} from './unarchiveResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnarchiveResponse(writer: SerializationWriter, unarchiveResponse: UnarchiveResponse | undefined = {} as UnarchiveResponse) : void {
        writer.writeBooleanValue("value", unarchiveResponse.value);
        writer.writeAdditionalData(unarchiveResponse.additionalData);
}
