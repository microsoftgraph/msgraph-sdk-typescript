import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Video extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Number of audio bits per sample.
     */
    audioBitsPerSample?: number | undefined;
    /**
     * Number of audio channels.
     */
    audioChannels?: number | undefined;
    /**
     * Name of the audio format (AAC, MP3, etc.).
     */
    audioFormat?: string | undefined;
    /**
     * Number of audio samples per second.
     */
    audioSamplesPerSecond?: number | undefined;
    /**
     * Bit rate of the video in bits per second.
     */
    bitrate?: number | undefined;
    /**
     * Duration of the file in milliseconds.
     */
    duration?: number | undefined;
    /**
     * 'Four character code' name of the video format.
     */
    fourCC?: string | undefined;
    /**
     * Frame rate of the video.
     */
    frameRate?: number | undefined;
    /**
     * Height of the video, in pixels.
     */
    height?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Width of the video, in pixels.
     */
    width?: number | undefined;
}
