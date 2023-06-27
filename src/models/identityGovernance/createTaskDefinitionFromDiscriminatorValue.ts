import {deserializeIntoTaskDefinition} from './deserializeIntoTaskDefinition';
import {TaskDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTaskDefinition;
}
