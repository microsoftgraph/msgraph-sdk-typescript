import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryIndexOperation(ediscoveryIndexOperation: EdiscoveryIndexOperation | undefined = {} as EdiscoveryIndexOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryIndexOperation),
    }
}
