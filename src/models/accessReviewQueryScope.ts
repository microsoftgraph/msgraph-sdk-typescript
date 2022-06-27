import {AccessReviewScope} from './accessReviewScope';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewQueryScope extends AccessReviewScope, Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The query representing what will be reviewed in an access review. */
    query?: string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query is specified. For example, ./manager. */
    queryRoot?: string | undefined;
    /** Indicates the type of query. Types include MicrosoftGraph and ARM. */
    queryType?: string | undefined;
}
