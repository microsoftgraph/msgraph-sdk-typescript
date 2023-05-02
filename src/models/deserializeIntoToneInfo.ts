import {Tone} from './tone';
import {ToneInfo} from './toneInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoToneInfo(toneInfo: ToneInfo | undefined = {} as ToneInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { toneInfo.odataType = n.getStringValue(); },
        "sequenceId": n => { toneInfo.sequenceId = n.getNumberValue(); },
        "tone": n => { toneInfo.tone = n.getEnumValue<Tone>(Tone); },
    }
}
