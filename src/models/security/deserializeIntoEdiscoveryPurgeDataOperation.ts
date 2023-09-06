import { deserializeIntoCaseOperation } from './deserializeIntoCaseOperation';
import { type EdiscoveryPurgeDataOperation } from './ediscoveryPurgeDataOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryPurgeDataOperation(ediscoveryPurgeDataOperation: EdiscoveryPurgeDataOperation | undefined = {} as EdiscoveryPurgeDataOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryPurgeDataOperation),
    }
}
