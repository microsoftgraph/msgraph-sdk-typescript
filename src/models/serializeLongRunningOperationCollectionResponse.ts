import {LongRunningOperation} from './longRunningOperation';
import {LongRunningOperationCollectionResponse} from './longRunningOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLongRunningOperationCollectionResponse(longRunningOperationCollectionResponse: LongRunningOperationCollectionResponse | undefined = {} as LongRunningOperationCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, longRunningOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<LongRunningOperation>("value", longRunningOperationCollectionResponse.value, serializeLongRunningOperation);
}
