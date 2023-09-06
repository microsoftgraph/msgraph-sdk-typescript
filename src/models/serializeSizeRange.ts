import { type SizeRange } from './sizeRange';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSizeRange(writer: SerializationWriter, sizeRange: SizeRange | undefined = {} as SizeRange) : void {
        writer.writeNumberValue("maximumSize", sizeRange.maximumSize);
        writer.writeNumberValue("minimumSize", sizeRange.minimumSize);
        writer.writeStringValue("@odata.type", sizeRange.odataType);
        writer.writeAdditionalData(sizeRange.additionalData);
}
