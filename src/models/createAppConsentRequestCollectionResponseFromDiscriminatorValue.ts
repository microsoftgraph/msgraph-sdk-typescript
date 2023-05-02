import {deserializeIntoAppConsentRequestCollectionResponse} from './deserializeIntoAppConsentRequestCollectionResponse';
import {AppConsentRequestCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppConsentRequestCollectionResponse;
}
