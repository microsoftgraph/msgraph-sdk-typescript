import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {CallRecord} from './callRecord';
import {CallRecordCollectionResponse} from './callRecordCollectionResponse';
import {serializeCallRecord} from './serializeCallRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallRecordCollectionResponse(writer: SerializationWriter, callRecordCollectionResponse: CallRecordCollectionResponse | undefined = {} as CallRecordCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, callRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<CallRecord>("value", callRecordCollectionResponse.value, serializeCallRecord);
}
