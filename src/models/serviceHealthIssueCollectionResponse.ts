import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssueCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ServiceHealthIssue[] | undefined;
}
