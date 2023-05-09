import {EdiscoveryHoldOperation} from './ediscoveryHoldOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryHoldOperation(writer: SerializationWriter, ediscoveryHoldOperation: EdiscoveryHoldOperation | undefined = {} as EdiscoveryHoldOperation) : void {
        serializeCaseOperation(writer, ediscoveryHoldOperation)
}
