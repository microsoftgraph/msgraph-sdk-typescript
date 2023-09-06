import { deserializeIntoCaseOperation } from './deserializeIntoCaseOperation';
import { type EdiscoveryIndexOperation } from './ediscoveryIndexOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryIndexOperation(ediscoveryIndexOperation: EdiscoveryIndexOperation | undefined = {} as EdiscoveryIndexOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryIndexOperation),
    }
}
