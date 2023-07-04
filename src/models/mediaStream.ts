import {MediaDirection} from './mediaDirection';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaStream extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The direction property
     */
    direction?: MediaDirection | undefined;
    /**
     * The media stream label.
     */
    label?: string | undefined;
    /**
     * The mediaType property
     */
    mediaType?: Modality | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * If the media is muted by the server.
     */
    serverMuted?: boolean | undefined;
    /**
     * The source ID.
     */
    sourceId?: string | undefined;
}
