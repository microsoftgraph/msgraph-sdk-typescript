import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Audio extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The title of the album for this audio file.
     */
    album?: string | undefined;
    /**
     * The artist named on the album for the audio file.
     */
    albumArtist?: string | undefined;
    /**
     * The performing artist for the audio file.
     */
    artist?: string | undefined;
    /**
     * Bitrate expressed in kbps.
     */
    bitrate?: number | undefined;
    /**
     * The name of the composer of the audio file.
     */
    composers?: string | undefined;
    /**
     * Copyright information for the audio file.
     */
    copyright?: string | undefined;
    /**
     * The number of the disc this audio file came from.
     */
    disc?: number | undefined;
    /**
     * The total number of discs in this album.
     */
    discCount?: number | undefined;
    /**
     * Duration of the audio file, expressed in milliseconds
     */
    duration?: number | undefined;
    /**
     * The genre of this audio file.
     */
    genre?: string | undefined;
    /**
     * Indicates if the file is protected with digital rights management.
     */
    hasDrm?: boolean | undefined;
    /**
     * Indicates if the file is encoded with a variable bitrate.
     */
    isVariableBitrate?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The title of the audio file.
     */
    title?: string | undefined;
    /**
     * The number of the track on the original disc for this audio file.
     */
    track?: number | undefined;
    /**
     * The total number of tracks on the original disc for this audio file.
     */
    trackCount?: number | undefined;
    /**
     * The year the audio file was recorded.
     */
    year?: number | undefined;
}
