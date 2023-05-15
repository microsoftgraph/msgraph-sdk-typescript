import {AudioConferencing} from './audioConferencing';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAudioConferencing(audioConferencing: AudioConferencing | undefined = {} as AudioConferencing) : Record<string, (node: ParseNode) => void> {
    return {
        "conferenceId": n => { audioConferencing.conferenceId = n.getStringValue(); },
        "dialinUrl": n => { audioConferencing.dialinUrl = n.getStringValue(); },
        "@odata.type": n => { audioConferencing.odataType = n.getStringValue(); },
        "tollFreeNumber": n => { audioConferencing.tollFreeNumber = n.getStringValue(); },
        "tollFreeNumbers": n => { audioConferencing.tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>(); },
        "tollNumber": n => { audioConferencing.tollNumber = n.getStringValue(); },
        "tollNumbers": n => { audioConferencing.tollNumbers = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
