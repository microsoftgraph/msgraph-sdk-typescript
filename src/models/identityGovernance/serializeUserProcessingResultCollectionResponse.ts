import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeUserProcessingResult} from './serializeUserProcessingResult';
import {UserProcessingResult} from './userProcessingResult';
import {UserProcessingResultCollectionResponse} from './userProcessingResultCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserProcessingResultCollectionResponse(writer: SerializationWriter, userProcessingResultCollectionResponse: UserProcessingResultCollectionResponse | undefined = {} as UserProcessingResultCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userProcessingResultCollectionResponse)
        writer.writeCollectionOfObjectValues<UserProcessingResult>("value", userProcessingResultCollectionResponse.value, serializeUserProcessingResult);
}
