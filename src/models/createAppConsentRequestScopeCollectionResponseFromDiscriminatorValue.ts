import {AppConsentRequestScopeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppConsentRequestScopeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppConsentRequestScopeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppConsentRequestScopeCollectionResponse();
}
