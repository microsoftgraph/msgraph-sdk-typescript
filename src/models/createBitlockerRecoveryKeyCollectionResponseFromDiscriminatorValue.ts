import {BitlockerRecoveryKeyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitlockerRecoveryKeyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitlockerRecoveryKeyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitlockerRecoveryKeyCollectionResponseImpl();
}
