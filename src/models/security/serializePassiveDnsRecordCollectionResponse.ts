import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type PassiveDnsRecord } from './passiveDnsRecord';
import { type PassiveDnsRecordCollectionResponse } from './passiveDnsRecordCollectionResponse';
import { serializePassiveDnsRecord } from './serializePassiveDnsRecord';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePassiveDnsRecordCollectionResponse(writer: SerializationWriter, passiveDnsRecordCollectionResponse: PassiveDnsRecordCollectionResponse | undefined = {} as PassiveDnsRecordCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, passiveDnsRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<PassiveDnsRecord>("value", passiveDnsRecordCollectionResponse.value, serializePassiveDnsRecord);
}
