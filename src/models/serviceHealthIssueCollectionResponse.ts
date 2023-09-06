import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type ServiceHealthIssue } from './serviceHealthIssue';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssueCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServiceHealthIssue[] | undefined;
}
