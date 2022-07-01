import {AlteredQueryToken} from './alteredQueryToken';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchAlteration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Defines the altered highlighted query string with spelling correction. The annotation around the corrected segment is (/ue000, /ue001) */
    alteredHighlightedQueryString?: string | undefined;
    /** Defines the altered query string with spelling correction. */
    alteredQueryString?: string | undefined;
    /** Represents changed segments with respect to original query. */
    alteredQueryTokens?: AlteredQueryToken[] | undefined;
}
