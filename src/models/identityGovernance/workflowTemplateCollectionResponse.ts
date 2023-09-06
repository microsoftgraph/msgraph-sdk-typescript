import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type WorkflowTemplate } from './workflowTemplate';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkflowTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WorkflowTemplate[] | undefined;
}
