import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryHoldOperation} from './ediscoveryHoldOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryHoldOperation(ediscoveryHoldOperation: EdiscoveryHoldOperation | undefined = {} as EdiscoveryHoldOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryHoldOperation),
    }
}
