import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {WorkflowVersion} from './workflowVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkflowVersionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkflowVersion[] | undefined;
}
