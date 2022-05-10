import {SecureScoreControlProfileCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreControlProfileCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreControlProfileCollectionResponseImpl();
}
