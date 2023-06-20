import {EdiscoveryTagOperation} from './ediscoveryTagOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryTagOperation(ediscoveryTagOperation: EdiscoveryTagOperation | undefined = {} as EdiscoveryTagOperation, writer: SerializationWriter) : void {
        serializeCaseOperation(writer, ediscoveryTagOperation)
}
