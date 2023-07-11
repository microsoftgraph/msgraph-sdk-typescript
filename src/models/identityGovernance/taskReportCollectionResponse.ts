import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {TaskReport} from './taskReport';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskReportCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TaskReport[] | undefined;
}
