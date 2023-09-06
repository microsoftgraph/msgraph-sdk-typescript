import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeTeamsAsyncOperation } from './serializeTeamsAsyncOperation';
import { type TeamsAsyncOperation } from './teamsAsyncOperation';
import { type TeamsAsyncOperationCollectionResponse } from './teamsAsyncOperationCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTeamsAsyncOperationCollectionResponse(writer: SerializationWriter, teamsAsyncOperationCollectionResponse: TeamsAsyncOperationCollectionResponse | undefined = {} as TeamsAsyncOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, teamsAsyncOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<TeamsAsyncOperation>("value", teamsAsyncOperationCollectionResponse.value, serializeTeamsAsyncOperation);
}
