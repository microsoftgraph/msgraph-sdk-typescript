import {createTeamsAsyncOperationFromDiscriminatorValue} from './createTeamsAsyncOperationFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTeamsAsyncOperation} from './serializeTeamsAsyncOperation';
import type {TeamsAsyncOperation} from './teamsAsyncOperation';
import type {TeamsAsyncOperationCollectionResponse} from './teamsAsyncOperationCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamsAsyncOperationCollectionResponse(teamsAsyncOperationCollectionResponse: TeamsAsyncOperationCollectionResponse | undefined = {} as TeamsAsyncOperationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(teamsAsyncOperationCollectionResponse),
        "value": n => { teamsAsyncOperationCollectionResponse.value = n.getCollectionOfObjectValues<TeamsAsyncOperation>(createTeamsAsyncOperationFromDiscriminatorValue); },
    }
}
