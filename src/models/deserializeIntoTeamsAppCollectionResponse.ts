import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeamsApp} from './serializeTeamsApp';
import {TeamsApp} from './teamsApp';
import {TeamsAppCollectionResponse} from './teamsAppCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAppCollectionResponse(teamsAppCollectionResponse: TeamsAppCollectionResponse | undefined = {} as TeamsAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAppCollectionResponse),
        "value": n => { teamsAppCollectionResponse.value = n.getCollectionOfObjectValues<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
    }
}
