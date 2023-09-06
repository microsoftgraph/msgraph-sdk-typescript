import { createTeamsTemplateFromDiscriminatorValue } from './createTeamsTemplateFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeTeamsTemplate } from './serializeTeamsTemplate';
import { type TeamsTemplate } from './teamsTemplate';
import { type TeamsTemplateCollectionResponse } from './teamsTemplateCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTemplateCollectionResponse(teamsTemplateCollectionResponse: TeamsTemplateCollectionResponse | undefined = {} as TeamsTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsTemplateCollectionResponse),
        "value": n => { teamsTemplateCollectionResponse.value = n.getCollectionOfObjectValues<TeamsTemplate>(createTeamsTemplateFromDiscriminatorValue); },
    }
}
