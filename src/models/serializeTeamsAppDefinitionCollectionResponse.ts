import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsAppDefinition} from './serializeTeamsAppDefinition';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppDefinitionCollectionResponse} from './teamsAppDefinitionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppDefinitionCollectionResponse(writer: SerializationWriter, teamsAppDefinitionCollectionResponse: TeamsAppDefinitionCollectionResponse | undefined = {} as TeamsAppDefinitionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAppDefinitionCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsAppDefinition>("value", teamsAppDefinitionCollectionResponse.value, serializeTeamsAppDefinition);
}
