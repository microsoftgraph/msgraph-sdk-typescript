import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTeamsTab } from './serializeTeamsTab';
import { type TeamsTab } from './teamsTab';
import { type TeamsTabCollectionResponse } from './teamsTabCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamsTabCollectionResponse(writer: SerializationWriter, teamsTabCollectionResponse: TeamsTabCollectionResponse | undefined = {} as TeamsTabCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsTabCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsTab>("value", teamsTabCollectionResponse.value, serializeTeamsTab);
}
