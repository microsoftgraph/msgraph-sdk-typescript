import { createTeamsAppDefinitionFromDiscriminatorValue } from './createTeamsAppDefinitionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTeamsAppDefinition } from './serializeTeamsAppDefinition';
import { type TeamsAppDefinition } from './teamsAppDefinition';
import { type TeamsAppDefinitionCollectionResponse } from './teamsAppDefinitionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppDefinitionCollectionResponse(teamsAppDefinitionCollectionResponse: TeamsAppDefinitionCollectionResponse | undefined = {} as TeamsAppDefinitionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAppDefinitionCollectionResponse),
        "value": n => { teamsAppDefinitionCollectionResponse.value = n.getCollectionOfObjectValues<TeamsAppDefinition>(createTeamsAppDefinitionFromDiscriminatorValue); },
    }
}
