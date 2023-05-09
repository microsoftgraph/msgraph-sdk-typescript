import {AudioConferencing} from './audioConferencing';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAudioConferencing(writer: SerializationWriter, audioConferencing: AudioConferencing | undefined = {} as AudioConferencing) : void {
        writer.writeStringValue("conferenceId", audioConferencing.conferenceId);
        writer.writeStringValue("dialinUrl", audioConferencing.dialinUrl);
        writer.writeStringValue("@odata.type", audioConferencing.odataType);
        writer.writeStringValue("tollFreeNumber", audioConferencing.tollFreeNumber);
        writer.writeCollectionOfPrimitiveValues<string>("tollFreeNumbers", audioConferencing.tollFreeNumbers);
        writer.writeStringValue("tollNumber", audioConferencing.tollNumber);
        writer.writeCollectionOfPrimitiveValues<string>("tollNumbers", audioConferencing.tollNumbers);
        writer.writeAdditionalData(audioConferencing.additionalData);
}
