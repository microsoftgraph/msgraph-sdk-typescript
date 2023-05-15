import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTeamsAsyncOperation} from './serializeTeamsAsyncOperation';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamsAsyncOperationCollectionResponse} from './teamsAsyncOperationCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamsAsyncOperationCollectionResponse(writer: SerializationWriter, teamsAsyncOperationCollectionResponse: TeamsAsyncOperationCollectionResponse | undefined = {} as TeamsAsyncOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAsyncOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsAsyncOperation>("value", teamsAsyncOperationCollectionResponse.value, serializeTeamsAsyncOperation);
}
