import { type EdiscoveryTagOperation } from './ediscoveryTagOperation';
import { serializeCaseOperation } from './serializeCaseOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryTagOperation(writer: SerializationWriter, ediscoveryTagOperation: EdiscoveryTagOperation | undefined = {} as EdiscoveryTagOperation) : void {
        serializeCaseOperation(writer, ediscoveryTagOperation)
}
