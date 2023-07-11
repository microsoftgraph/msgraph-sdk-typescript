import {deserializeIntoWorkflow} from './deserializeIntoWorkflow';
import {Workflow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflow;
}
