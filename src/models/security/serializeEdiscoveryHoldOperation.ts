import {EdiscoveryHoldOperation} from './ediscoveryHoldOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryHoldOperation(ediscoveryHoldOperation: EdiscoveryHoldOperation | undefined = {} as EdiscoveryHoldOperation, writer: SerializationWriter) : void {
        serializeCaseOperation(writer, ediscoveryHoldOperation)
}
