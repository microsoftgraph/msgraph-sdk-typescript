import { type CallMediaState } from './callMediaState';
import { MediaState } from './mediaState';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCallMediaState(callMediaState: CallMediaState | undefined = {} as CallMediaState) : Record<string, (node: ParseNode) => void> {
    return {
        "audio": n => { callMediaState.audio = n.getEnumValue<MediaState>(MediaState); },
        "@odata.type": n => { callMediaState.odataType = n.getStringValue(); },
    }
}
