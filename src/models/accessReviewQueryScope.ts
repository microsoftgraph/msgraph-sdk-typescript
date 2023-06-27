import {AccessReviewScope} from './accessReviewScope';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewQueryScope extends AccessReviewScope, Parsable {
    /**
     * The query representing what will be reviewed in an access review.
     */
    query?: string | undefined;
    /**
     * In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query is specified. For example, ./manager.
     */
    queryRoot?: string | undefined;
    /**
     * Indicates the type of query. Types include MicrosoftGraph and ARM.
     */
    queryType?: string | undefined;
}
