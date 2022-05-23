import {MediaDirection} from './mediaDirection';
import {Modality} from './modality';

export interface MediaStream{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The direction. The possible values are inactive, sendOnly, receiveOnly, sendReceive. */
    direction?:MediaDirection | undefined;
    /** The media stream label. */
    label?:string | undefined;
    /** The media type. The possible value are unknown, audio, video, videoBasedScreenSharing, data. */
    mediaType?:Modality | undefined;
    /** Indicates whether the media is muted by the server. */
    serverMuted?:boolean | undefined;
    /** The source ID. */
    sourceId?:string | undefined;
}
