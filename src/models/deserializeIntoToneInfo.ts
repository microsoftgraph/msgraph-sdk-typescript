import { Tone } from './tone';
import { type ToneInfo } from './toneInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoToneInfo(toneInfo: ToneInfo | undefined = {} as ToneInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { toneInfo.odataType = n.getStringValue(); },
        "sequenceId": n => { toneInfo.sequenceId = n.getNumberValue(); },
        "tone": n => { toneInfo.tone = n.getEnumValue<Tone>(Tone); },
    }
}
