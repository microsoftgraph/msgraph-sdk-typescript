import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { serializeUserProcessingResult } from './serializeUserProcessingResult';
import { type UserProcessingResult } from './userProcessingResult';
import { type UserProcessingResultCollectionResponse } from './userProcessingResultCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserProcessingResultCollectionResponse(writer: SerializationWriter, userProcessingResultCollectionResponse: UserProcessingResultCollectionResponse | undefined = {} as UserProcessingResultCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userProcessingResultCollectionResponse)
        writer.writeCollectionOfObjectValues<UserProcessingResult>("value", userProcessingResultCollectionResponse.value, serializeUserProcessingResult);
}
