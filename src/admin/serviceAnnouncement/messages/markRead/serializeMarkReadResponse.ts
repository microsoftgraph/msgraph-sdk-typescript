import type {MarkReadResponse} from './markReadResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMarkReadResponse(writer: SerializationWriter, markReadResponse: MarkReadResponse | undefined = {} as MarkReadResponse) : void {
        writer.writeBooleanValue("value", markReadResponse.value);
        writer.writeAdditionalData(markReadResponse.additionalData);
}
