import { deserializeIntoTeamsAppDefinitionCollectionResponse } from './deserializeIntoTeamsAppDefinitionCollectionResponse';
import { type TeamsAppDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamsAppDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamsAppDefinitionCollectionResponse;
}
