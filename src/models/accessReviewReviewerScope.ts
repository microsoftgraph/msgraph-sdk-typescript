import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewerScope extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The query specifying who will be the reviewer.
     */
    query?: string | undefined;
    /**
     * In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions.
     */
    queryRoot?: string | undefined;
    /**
     * The type of query. Examples include MicrosoftGraph and ARM.
     */
    queryType?: string | undefined;
}
