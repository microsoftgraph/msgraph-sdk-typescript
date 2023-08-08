import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeamsTab} from './serializeTeamsTab';
import type {TeamsTab} from './teamsTab';
import type {TeamsTabCollectionResponse} from './teamsTabCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsTabCollectionResponse(teamsTabCollectionResponse: TeamsTabCollectionResponse | undefined = {} as TeamsTabCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsTabCollectionResponse),
        "value": n => { teamsTabCollectionResponse.value = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); },
    }
}
