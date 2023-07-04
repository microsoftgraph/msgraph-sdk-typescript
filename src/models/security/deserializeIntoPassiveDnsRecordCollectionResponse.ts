import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createPassiveDnsRecordFromDiscriminatorValue} from './createPassiveDnsRecordFromDiscriminatorValue';
import {PassiveDnsRecord} from './passiveDnsRecord';
import {PassiveDnsRecordCollectionResponse} from './passiveDnsRecordCollectionResponse';
import {serializePassiveDnsRecord} from './serializePassiveDnsRecord';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPassiveDnsRecordCollectionResponse(passiveDnsRecordCollectionResponse: PassiveDnsRecordCollectionResponse | undefined = {} as PassiveDnsRecordCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(passiveDnsRecordCollectionResponse),
        "value": n => { passiveDnsRecordCollectionResponse.value = n.getCollectionOfObjectValues<PassiveDnsRecord>(createPassiveDnsRecordFromDiscriminatorValue); },
    }
}
