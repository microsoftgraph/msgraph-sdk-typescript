import {deserializeIntoSecureScoreControlProfileCollectionResponse} from './deserializeIntoSecureScoreControlProfileCollectionResponse';
import {SecureScoreControlProfileCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecureScoreControlProfileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSecureScoreControlProfileCollectionResponse;
}
