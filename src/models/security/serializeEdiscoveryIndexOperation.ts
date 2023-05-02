import {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import {serializeCaseOperation} from './serializeCaseOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryIndexOperation(writer: SerializationWriter, ediscoveryIndexOperation: EdiscoveryIndexOperation | undefined = {} as EdiscoveryIndexOperation) : void {
        serializeCaseOperation(writer, ediscoveryIndexOperation)
}
