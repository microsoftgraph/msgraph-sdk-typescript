import {AccessReviewStage} from '../../../../../../../../models/accessReviewStage';
import {BaseCollectionPaginationCountResponse} from '../../../../../../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FilterByCurrentUserWithOnResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AccessReviewStage[] | undefined;
}
