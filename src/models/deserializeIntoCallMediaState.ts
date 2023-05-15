import {CallMediaState} from './callMediaState';
import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallMediaState(callMediaState: CallMediaState | undefined = {} as CallMediaState) : Record<string, (node: ParseNode) => void> {
    return {
        "audio": n => { callMediaState.audio = n.getEnumValue<MediaState>(MediaState); },
        "@odata.type": n => { callMediaState.odataType = n.getStringValue(); },
    }
}
