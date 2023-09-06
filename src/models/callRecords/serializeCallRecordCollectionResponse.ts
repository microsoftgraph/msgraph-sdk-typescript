import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type CallRecord } from './callRecord';
import { type CallRecordCollectionResponse } from './callRecordCollectionResponse';
import { serializeCallRecord } from './serializeCallRecord';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCallRecordCollectionResponse(writer: SerializationWriter, callRecordCollectionResponse: CallRecordCollectionResponse | undefined = {} as CallRecordCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<CallRecord>("value", callRecordCollectionResponse.value, serializeCallRecord);
}
