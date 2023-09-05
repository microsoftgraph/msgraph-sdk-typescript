import { deserializeIntoLifecycleWorkflowsContainer } from './deserializeIntoLifecycleWorkflowsContainer';
import { type LifecycleWorkflowsContainer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLifecycleWorkflowsContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLifecycleWorkflowsContainer;
}
