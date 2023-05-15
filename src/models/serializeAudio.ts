import {Audio} from './audio';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAudio(writer: SerializationWriter, audio: Audio | undefined = {} as Audio) : void {
        writer.writeStringValue("album", audio.album);
        writer.writeStringValue("albumArtist", audio.albumArtist);
        writer.writeStringValue("artist", audio.artist);
        writer.writeNumberValue("bitrate", audio.bitrate);
        writer.writeStringValue("composers", audio.composers);
        writer.writeStringValue("copyright", audio.copyright);
        writer.writeNumberValue("disc", audio.disc);
        writer.writeNumberValue("discCount", audio.discCount);
        writer.writeNumberValue("duration", audio.duration);
        writer.writeStringValue("genre", audio.genre);
        writer.writeBooleanValue("hasDrm", audio.hasDrm);
        writer.writeBooleanValue("isVariableBitrate", audio.isVariableBitrate);
        writer.writeStringValue("@odata.type", audio.odataType);
        writer.writeStringValue("title", audio.title);
        writer.writeNumberValue("track", audio.track);
        writer.writeNumberValue("trackCount", audio.trackCount);
        writer.writeNumberValue("year", audio.year);
        writer.writeAdditionalData(audio.additionalData);
}
