import {BitlockerRecoveryKey} from './bitlockerRecoveryKey';
import {BitlockerRecoveryKeyCollectionResponse} from './bitlockerRecoveryKeyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBitlockerRecoveryKey} from './serializeBitlockerRecoveryKey';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBitlockerRecoveryKeyCollectionResponse(writer: SerializationWriter, bitlockerRecoveryKeyCollectionResponse: BitlockerRecoveryKeyCollectionResponse | undefined = {} as BitlockerRecoveryKeyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, bitlockerRecoveryKeyCollectionResponse)
        writer.writeCollectionOfObjectValues<BitlockerRecoveryKey>("value", bitlockerRecoveryKeyCollectionResponse.value, serializeBitlockerRecoveryKey);
}
