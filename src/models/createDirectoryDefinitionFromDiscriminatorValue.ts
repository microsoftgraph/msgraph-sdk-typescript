import {deserializeIntoDirectoryDefinition} from './deserializeIntoDirectoryDefinition';
import {DirectoryDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDirectoryDefinition;
}
