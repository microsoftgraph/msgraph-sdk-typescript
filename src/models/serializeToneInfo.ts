import { Tone } from './tone';
import { type ToneInfo } from './toneInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeToneInfo(writer: SerializationWriter, toneInfo: ToneInfo | undefined = {} as ToneInfo) : void {
        writer.writeStringValue("@odata.type", toneInfo.odataType);
        writer.writeNumberValue("sequenceId", toneInfo.sequenceId);
        writer.writeEnumValue<Tone>("tone", toneInfo.tone);
        writer.writeAdditionalData(toneInfo.additionalData);
}
