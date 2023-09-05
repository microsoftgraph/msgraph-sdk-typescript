import { deserializeIntoDirectoryDefinition } from './deserializeIntoDirectoryDefinition';
import { type DirectoryDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDirectoryDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryDefinition;
}
