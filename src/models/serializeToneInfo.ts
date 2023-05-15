import {Tone} from './tone';
import {ToneInfo} from './toneInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeToneInfo(writer: SerializationWriter, toneInfo: ToneInfo | undefined = {} as ToneInfo) : void {
        writer.writeStringValue("@odata.type", toneInfo.odataType);
        writer.writeNumberValue("sequenceId", toneInfo.sequenceId);
        writer.writeEnumValue<Tone>("tone", toneInfo.tone);
        writer.writeAdditionalData(toneInfo.additionalData);
}
