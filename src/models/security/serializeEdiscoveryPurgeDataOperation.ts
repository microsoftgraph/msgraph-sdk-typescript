import { type EdiscoveryPurgeDataOperation } from './ediscoveryPurgeDataOperation';
import { serializeCaseOperation } from './serializeCaseOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryPurgeDataOperation(writer: SerializationWriter, ediscoveryPurgeDataOperation: EdiscoveryPurgeDataOperation | undefined = {} as EdiscoveryPurgeDataOperation) : void {
        serializeCaseOperation(writer, ediscoveryPurgeDataOperation)
}
