import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createPassiveDnsRecordFromDiscriminatorValue} from './createPassiveDnsRecordFromDiscriminatorValue';
import type {PassiveDnsRecord} from './passiveDnsRecord';
import type {PassiveDnsRecordCollectionResponse} from './passiveDnsRecordCollectionResponse';
import {serializePassiveDnsRecord} from './serializePassiveDnsRecord';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPassiveDnsRecordCollectionResponse(passiveDnsRecordCollectionResponse: PassiveDnsRecordCollectionResponse | undefined = {} as PassiveDnsRecordCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(passiveDnsRecordCollectionResponse),
        "value": n => { passiveDnsRecordCollectionResponse.value = n.getCollectionOfObjectValues<PassiveDnsRecord>(createPassiveDnsRecordFromDiscriminatorValue); },
    }
}
