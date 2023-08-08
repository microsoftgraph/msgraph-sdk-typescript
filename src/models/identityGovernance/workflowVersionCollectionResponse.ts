import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {WorkflowVersion} from './workflowVersion';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkflowVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkflowVersion[] | undefined;
}
