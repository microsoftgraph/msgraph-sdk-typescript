import {HuntingRowResult} from './huntingRowResult';
import {SinglePropertySchema} from './singlePropertySchema';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface HuntingQueryResults extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The results of the hunting query.
     */
    results?: HuntingRowResult[] | undefined;
    /**
     * The schema for the response.
     */
    schema?: SinglePropertySchema[] | undefined;
}
