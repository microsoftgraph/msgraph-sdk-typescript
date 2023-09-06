import { deserializeIntoSecureScoreCollectionResponse } from './deserializeIntoSecureScoreCollectionResponse';
import { type SecureScoreCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecureScoreCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreCollectionResponse;
}
