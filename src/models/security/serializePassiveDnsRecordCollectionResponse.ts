import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {PassiveDnsRecord} from './passiveDnsRecord';
import {PassiveDnsRecordCollectionResponse} from './passiveDnsRecordCollectionResponse';
import {serializePassiveDnsRecord} from './serializePassiveDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePassiveDnsRecordCollectionResponse(writer: SerializationWriter, passiveDnsRecordCollectionResponse: PassiveDnsRecordCollectionResponse | undefined = {} as PassiveDnsRecordCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, passiveDnsRecordCollectionResponse)
        writer.writeCollectionOfObjectValues<PassiveDnsRecord>("value", passiveDnsRecordCollectionResponse.value, serializePassiveDnsRecord);
}
