import { deserializeIntoSecureScoreControlProfileCollectionResponse } from './deserializeIntoSecureScoreControlProfileCollectionResponse';
import { type SecureScoreControlProfileCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreControlProfileCollectionResponse;
}
