import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserInstallStateSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserInstallStateSummary[] | undefined;
}
