import { type RichLongRunningOperation } from './richLongRunningOperation';
import { type RichLongRunningOperationCollectionResponse } from './richLongRunningOperationCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeRichLongRunningOperation } from './serializeRichLongRunningOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRichLongRunningOperationCollectionResponse(writer: SerializationWriter, richLongRunningOperationCollectionResponse: RichLongRunningOperationCollectionResponse | undefined = {} as RichLongRunningOperationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, richLongRunningOperationCollectionResponse)
        writer.writeCollectionOfObjectValues<RichLongRunningOperation>("value", richLongRunningOperationCollectionResponse.value, serializeRichLongRunningOperation);
}
