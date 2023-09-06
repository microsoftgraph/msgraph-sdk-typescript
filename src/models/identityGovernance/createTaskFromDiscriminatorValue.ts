import { deserializeIntoTask } from './deserializeIntoTask';
import { type Task } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTask;
}
