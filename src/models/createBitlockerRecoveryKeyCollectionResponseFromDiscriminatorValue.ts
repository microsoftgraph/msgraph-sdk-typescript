import {deserializeIntoBitlockerRecoveryKeyCollectionResponse} from './deserializeIntoBitlockerRecoveryKeyCollectionResponse';
import {BitlockerRecoveryKeyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlockerRecoveryKeyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitlockerRecoveryKeyCollectionResponse;
}
