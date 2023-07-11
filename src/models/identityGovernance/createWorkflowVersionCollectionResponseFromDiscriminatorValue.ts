import {deserializeIntoWorkflowVersionCollectionResponse} from './deserializeIntoWorkflowVersionCollectionResponse';
import {WorkflowVersionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowVersionCollectionResponse;
}
