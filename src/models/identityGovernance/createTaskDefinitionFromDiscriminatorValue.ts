import { deserializeIntoTaskDefinition } from './deserializeIntoTaskDefinition';
import { type TaskDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTaskDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskDefinition;
}
