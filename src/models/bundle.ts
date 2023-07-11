import {Album} from './album';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Bundle extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If the bundle is an [album][], then the album property is included
     */
    album?: Album | undefined;
    /**
     * Number of children contained immediately within this container.
     */
    childCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
