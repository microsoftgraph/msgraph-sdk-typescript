import { type EdiscoveryHoldOperation } from './ediscoveryHoldOperation';
import { serializeCaseOperation } from './serializeCaseOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryHoldOperation(writer: SerializationWriter, ediscoveryHoldOperation: EdiscoveryHoldOperation | undefined = {} as EdiscoveryHoldOperation) : void {
        serializeCaseOperation(writer, ediscoveryHoldOperation)
}
