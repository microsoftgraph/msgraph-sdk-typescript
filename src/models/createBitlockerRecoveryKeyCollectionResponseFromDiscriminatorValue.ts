import { deserializeIntoBitlockerRecoveryKeyCollectionResponse } from './deserializeIntoBitlockerRecoveryKeyCollectionResponse';
import { type BitlockerRecoveryKeyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitlockerRecoveryKeyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitlockerRecoveryKeyCollectionResponse;
}
