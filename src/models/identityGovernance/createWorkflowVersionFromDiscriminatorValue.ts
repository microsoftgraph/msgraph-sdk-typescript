import {deserializeIntoWorkflowVersion} from './deserializeIntoWorkflowVersion';
import {WorkflowVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowVersion;
}
