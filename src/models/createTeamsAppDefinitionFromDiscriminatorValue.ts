import { deserializeIntoTeamsAppDefinition } from './deserializeIntoTeamsAppDefinition';
import { type TeamsAppDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppDefinition;
}
