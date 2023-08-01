import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createWorkflowVersionFromDiscriminatorValue} from './createWorkflowVersionFromDiscriminatorValue';
import {serializeWorkflowVersion} from './serializeWorkflowVersion';
import type {WorkflowVersion} from './workflowVersion';
import type {WorkflowVersionCollectionResponse} from './workflowVersionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowVersionCollectionResponse(workflowVersionCollectionResponse: WorkflowVersionCollectionResponse | undefined = {} as WorkflowVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workflowVersionCollectionResponse),
        "value": n => { workflowVersionCollectionResponse.value = n.getCollectionOfObjectValues<WorkflowVersion>(createWorkflowVersionFromDiscriminatorValue); },
    }
}
