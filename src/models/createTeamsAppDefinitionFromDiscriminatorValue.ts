import {deserializeIntoTeamsAppDefinition} from './deserializeIntoTeamsAppDefinition';
import {TeamsAppDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppDefinition;
}
