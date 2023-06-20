import {EdiscoveryPurgeDataOperation} from './ediscoveryPurgeDataOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryPurgeDataOperation(ediscoveryPurgeDataOperation: EdiscoveryPurgeDataOperation | undefined = {} as EdiscoveryPurgeDataOperation, writer: SerializationWriter) : void {
        serializeCaseOperation(writer, ediscoveryPurgeDataOperation)
}
