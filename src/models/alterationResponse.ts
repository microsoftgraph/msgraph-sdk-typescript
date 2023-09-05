import { type SearchAlteration } from './searchAlteration';
import { SearchAlterationType } from './searchAlterationType';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface AlterationResponse extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Defines the original user query string.
     */
    originalQueryString?: string | undefined;
    /**
     * Defines the details of the alteration information for the spelling correction.
     */
    queryAlteration?: SearchAlteration | undefined;
    /**
     * Defines the type of the spelling correction. Possible values are: suggestion, modification.
     */
    queryAlterationType?: SearchAlterationType | undefined;
}
