import type {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import type {BitlockerRecoveryKeyCollectionResponse} from './bitlockerRecoveryKeyCollectionResponse';
import {createBitlockerRecoveryKeyFromDiscriminatorValue} from './createBitlockerRecoveryKeyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBitlockerRecoveryKey} from './serializeBitlockerRecoveryKey';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBitlockerRecoveryKeyCollectionResponse(bitlockerRecoveryKeyCollectionResponse: BitlockerRecoveryKeyCollectionResponse | undefined = {} as BitlockerRecoveryKeyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bitlockerRecoveryKeyCollectionResponse),
        "value": n => { bitlockerRecoveryKeyCollectionResponse.value = n.getCollectionOfObjectValues<BitlockerRecoveryKey>(createBitlockerRecoveryKeyFromDiscriminatorValue); },
    }
}
