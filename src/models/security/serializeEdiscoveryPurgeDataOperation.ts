import {EdiscoveryPurgeDataOperation} from './ediscoveryPurgeDataOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryPurgeDataOperation(writer: SerializationWriter, ediscoveryPurgeDataOperation: EdiscoveryPurgeDataOperation | undefined = {} as EdiscoveryPurgeDataOperation) : void {
        serializeCaseOperation(writer, ediscoveryPurgeDataOperation)
}
