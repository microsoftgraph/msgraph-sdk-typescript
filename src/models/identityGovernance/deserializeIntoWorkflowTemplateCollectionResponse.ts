import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createWorkflowTemplateFromDiscriminatorValue } from './createWorkflowTemplateFromDiscriminatorValue';
import { serializeWorkflowTemplate } from './serializeWorkflowTemplate';
import { type WorkflowTemplate } from './workflowTemplate';
import { type WorkflowTemplateCollectionResponse } from './workflowTemplateCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowTemplateCollectionResponse(workflowTemplateCollectionResponse: WorkflowTemplateCollectionResponse | undefined = {} as WorkflowTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workflowTemplateCollectionResponse),
        "value": n => { workflowTemplateCollectionResponse.value = n.getCollectionOfObjectValues<WorkflowTemplate>(createWorkflowTemplateFromDiscriminatorValue); },
    }
}
