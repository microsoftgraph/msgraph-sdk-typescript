import { type MarkReadResponse } from './markReadResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMarkReadResponse(writer: SerializationWriter, markReadResponse: MarkReadResponse | undefined = {} as MarkReadResponse) : void {
        writer.writeBooleanValue("value", markReadResponse.value);
        writer.writeAdditionalData(markReadResponse.additionalData);
}
