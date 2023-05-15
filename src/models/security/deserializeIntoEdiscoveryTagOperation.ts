import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryTagOperation} from './ediscoveryTagOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryTagOperation(ediscoveryTagOperation: EdiscoveryTagOperation | undefined = {} as EdiscoveryTagOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryTagOperation),
    }
}
