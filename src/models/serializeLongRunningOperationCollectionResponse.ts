import {LongRunningOperation} from './longRunningOperation';
import {LongRunningOperationCollectionResponse} from './longRunningOperationCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeLongRunningOperation} from './serializeLongRunningOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLongRunningOperationCollectionResponse(writer: SerializationWriter, longRunningOperationCollectionResponse: LongRunningOperationCollectionResponse | undefined = {} as LongRunningOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, longRunningOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<LongRunningOperation>("value", longRunningOperationCollectionResponse.value, serializeLongRunningOperation);
}
