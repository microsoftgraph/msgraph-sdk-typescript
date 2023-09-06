import { type UnarchiveResponse } from './unarchiveResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnarchiveResponse(writer: SerializationWriter, unarchiveResponse: UnarchiveResponse | undefined = {} as UnarchiveResponse) : void {
        writer.writeBooleanValue("value", unarchiveResponse.value);
        writer.writeAdditionalData(unarchiveResponse.additionalData);
}
