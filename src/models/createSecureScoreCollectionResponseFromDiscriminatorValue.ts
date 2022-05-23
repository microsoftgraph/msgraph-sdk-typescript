import {SecureScoreCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreCollectionResponseImpl();
}
