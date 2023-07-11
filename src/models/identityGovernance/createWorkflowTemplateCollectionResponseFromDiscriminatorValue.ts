import {deserializeIntoWorkflowTemplateCollectionResponse} from './deserializeIntoWorkflowTemplateCollectionResponse';
import {WorkflowTemplateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowTemplateCollectionResponse;
}
