import { type BitlockerRecoveryKey } from './bitlockerRecoveryKey';
import { type BitlockerRecoveryKeyCollectionResponse } from './bitlockerRecoveryKeyCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeBitlockerRecoveryKey } from './serializeBitlockerRecoveryKey';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBitlockerRecoveryKeyCollectionResponse(writer: SerializationWriter, bitlockerRecoveryKeyCollectionResponse: BitlockerRecoveryKeyCollectionResponse | undefined = {} as BitlockerRecoveryKeyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bitlockerRecoveryKeyCollectionResponse)
        writer.writeCollectionOfObjectValues<BitlockerRecoveryKey>("value", bitlockerRecoveryKeyCollectionResponse.value, serializeBitlockerRecoveryKey);
}
