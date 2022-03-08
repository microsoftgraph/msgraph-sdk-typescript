import {BitlockerRecoveryKeyCollectionResponse} from './bitlockerRecoveryKeyCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlockerRecoveryKeyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitlockerRecoveryKeyCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitlockerRecoveryKeyCollectionResponse();
}
