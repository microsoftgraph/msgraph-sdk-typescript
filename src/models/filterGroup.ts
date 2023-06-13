import {FilterClause} from './filterClause';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FilterGroup extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The clauses property */
    clauses?: FilterClause[] | undefined;
    /** The name property */
    name?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
