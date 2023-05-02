import {deserializeIntoSecureScoreCollectionResponse} from './deserializeIntoSecureScoreCollectionResponse';
import {SecureScoreCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreCollectionResponse;
}
