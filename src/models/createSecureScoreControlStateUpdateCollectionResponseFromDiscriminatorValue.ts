import {SecureScoreControlStateUpdateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlStateUpdateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecureScoreControlStateUpdateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecureScoreControlStateUpdateCollectionResponse();
}
