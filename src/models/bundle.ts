import {Album} from './album';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Bundle extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** If the bundle is an [album][], then the album property is included */
    album?: Album | undefined;
    /** Number of children contained immediately within this container. */
    childCount?: number | undefined;
}
