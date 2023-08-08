import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsApp} from './serializeTeamsApp';
import type {TeamsApp} from './teamsApp';
import type {TeamsAppCollectionResponse} from './teamsAppCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppCollectionResponse(writer: SerializationWriter, teamsAppCollectionResponse: TeamsAppCollectionResponse | undefined = {} as TeamsAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAppCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsApp>("value", teamsAppCollectionResponse.value, serializeTeamsApp);
}
