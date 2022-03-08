import {AppConsentRequestCollectionResponse} from './appConsentRequestCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentRequestCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentRequestCollectionResponse();
}
