import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTeamsTemplate } from './serializeTeamsTemplate';
import { type TeamsTemplate } from './teamsTemplate';
import { type TeamsTemplateCollectionResponse } from './teamsTemplateCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamsTemplateCollectionResponse(writer: SerializationWriter, teamsTemplateCollectionResponse: TeamsTemplateCollectionResponse | undefined = {} as TeamsTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsTemplate>("value", teamsTemplateCollectionResponse.value, serializeTeamsTemplate);
}
