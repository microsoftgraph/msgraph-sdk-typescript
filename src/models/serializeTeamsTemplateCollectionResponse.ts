import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsTemplate} from './serializeTeamsTemplate';
import {TeamsTemplate} from './teamsTemplate';
import {TeamsTemplateCollectionResponse} from './teamsTemplateCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsTemplateCollectionResponse(writer: SerializationWriter, teamsTemplateCollectionResponse: TeamsTemplateCollectionResponse | undefined = {} as TeamsTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsTemplate>("value", teamsTemplateCollectionResponse.value, serializeTeamsTemplate);
}
