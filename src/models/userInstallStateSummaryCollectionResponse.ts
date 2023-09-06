import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type UserInstallStateSummary } from './userInstallStateSummary';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserInstallStateSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserInstallStateSummary[] | undefined;
}
