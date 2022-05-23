import {TeamsAppDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppDefinitionImpl();
}
