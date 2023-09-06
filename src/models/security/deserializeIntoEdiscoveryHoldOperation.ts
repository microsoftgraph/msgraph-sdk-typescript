import { deserializeIntoCaseOperation } from './deserializeIntoCaseOperation';
import { type EdiscoveryHoldOperation } from './ediscoveryHoldOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryHoldOperation(ediscoveryHoldOperation: EdiscoveryHoldOperation | undefined = {} as EdiscoveryHoldOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryHoldOperation),
    }
}
