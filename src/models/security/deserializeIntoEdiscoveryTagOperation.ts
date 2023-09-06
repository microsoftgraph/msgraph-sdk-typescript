import { deserializeIntoCaseOperation } from './deserializeIntoCaseOperation';
import { type EdiscoveryTagOperation } from './ediscoveryTagOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryTagOperation(ediscoveryTagOperation: EdiscoveryTagOperation | undefined = {} as EdiscoveryTagOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryTagOperation),
    }
}
