import {EdiscoveryTagOperation} from './ediscoveryTagOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryTagOperation(writer: SerializationWriter, ediscoveryTagOperation: EdiscoveryTagOperation | undefined = {} as EdiscoveryTagOperation) : void {
        serializeCaseOperation(writer, ediscoveryTagOperation)
}
