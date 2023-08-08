import type {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GetUserIdsWithFlaggedAppRegistrationResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: string[] | undefined;
}
