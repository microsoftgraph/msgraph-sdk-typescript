import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {CallRecord} from './callRecord';
import {CallRecordCollectionResponse} from './callRecordCollectionResponse';
import {serializeCallRecord} from './serializeCallRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRecordCollectionResponse(callRecordCollectionResponse: CallRecordCollectionResponse | undefined = {} as CallRecordCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<CallRecord>("value", callRecordCollectionResponse.value, serializeCallRecord);
}
