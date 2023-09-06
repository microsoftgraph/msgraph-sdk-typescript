import { type EdiscoveryIndexOperation } from './ediscoveryIndexOperation';
import { serializeCaseOperation } from './serializeCaseOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryIndexOperation(writer: SerializationWriter, ediscoveryIndexOperation: EdiscoveryIndexOperation | undefined = {} as EdiscoveryIndexOperation) : void {
        serializeCaseOperation(writer, ediscoveryIndexOperation)
}
