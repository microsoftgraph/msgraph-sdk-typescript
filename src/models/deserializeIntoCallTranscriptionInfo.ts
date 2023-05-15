import {CallTranscriptionInfo} from './callTranscriptionInfo';
import {CallTranscriptionState} from './callTranscriptionState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCallTranscriptionInfo(callTranscriptionInfo: CallTranscriptionInfo | undefined = {} as CallTranscriptionInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "lastModifiedDateTime": n => { callTranscriptionInfo.lastModifiedDateTime = n.getDateValue(); },
        "@odata.type": n => { callTranscriptionInfo.odataType = n.getStringValue(); },
        "state": n => { callTranscriptionInfo.state = n.getEnumValue<CallTranscriptionState>(CallTranscriptionState); },
    }
}
