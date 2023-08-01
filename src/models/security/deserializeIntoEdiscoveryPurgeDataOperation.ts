import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import type {EdiscoveryPurgeDataOperation} from './ediscoveryPurgeDataOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryPurgeDataOperation(ediscoveryPurgeDataOperation: EdiscoveryPurgeDataOperation | undefined = {} as EdiscoveryPurgeDataOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryPurgeDataOperation),
    }
}
