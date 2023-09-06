import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type TaskReport } from './taskReport';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TaskReportCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TaskReport[] | undefined;
}
