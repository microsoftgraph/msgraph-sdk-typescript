import {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryIndexOperation(ediscoveryIndexOperation: EdiscoveryIndexOperation | undefined = {} as EdiscoveryIndexOperation, writer: SerializationWriter) : void {
        serializeCaseOperation(writer, ediscoveryIndexOperation)
}
