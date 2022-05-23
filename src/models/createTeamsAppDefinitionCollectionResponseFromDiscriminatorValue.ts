import {TeamsAppDefinitionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamsAppDefinitionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamsAppDefinitionCollectionResponseImpl();
}
