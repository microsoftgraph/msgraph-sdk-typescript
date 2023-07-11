import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {WorkflowTemplate} from './workflowTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkflowTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkflowTemplate[] | undefined;
}
