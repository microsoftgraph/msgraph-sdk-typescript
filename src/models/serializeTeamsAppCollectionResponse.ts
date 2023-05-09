import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsApp} from './serializeTeamsApp';
import {TeamsApp} from './teamsApp';
import {TeamsAppCollectionResponse} from './teamsAppCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAppCollectionResponse(writer: SerializationWriter, teamsAppCollectionResponse: TeamsAppCollectionResponse | undefined = {} as TeamsAppCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAppCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsApp>("value", teamsAppCollectionResponse.value, serializeTeamsApp);
}
