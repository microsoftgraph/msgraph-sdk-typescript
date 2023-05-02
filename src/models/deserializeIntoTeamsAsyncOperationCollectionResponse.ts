import {createTeamsAsyncOperationFromDiscriminatorValue} from './createTeamsAsyncOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeamsAsyncOperation} from './serializeTeamsAsyncOperation';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamsAsyncOperationCollectionResponse} from './teamsAsyncOperationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAsyncOperationCollectionResponse(teamsAsyncOperationCollectionResponse: TeamsAsyncOperationCollectionResponse | undefined = {} as TeamsAsyncOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAsyncOperationCollectionResponse),
        "value": n => { teamsAsyncOperationCollectionResponse.value = n.getCollectionOfObjectValues<TeamsAsyncOperation>(createTeamsAsyncOperationFromDiscriminatorValue); },
    }
}
