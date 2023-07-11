import {deserializeIntoTask} from './deserializeIntoTask';
import {Task} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTask;
}
