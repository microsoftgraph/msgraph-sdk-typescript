import {AppConsentRequest} from './appConsentRequest';
import {AppConsentRequestScope} from './appConsentRequestScope';
import {createAppConsentRequestScopeFromDiscriminatorValue} from './createAppConsentRequestScopeFromDiscriminatorValue';
import {createUserConsentRequestFromDiscriminatorValue} from './createUserConsentRequestFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAppConsentRequestScope} from './serializeAppConsentRequestScope';
import {serializeUserConsentRequest} from './serializeUserConsentRequest';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentRequest(appConsentRequest: AppConsentRequest | undefined = {} as AppConsentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appConsentRequest),
        "appDisplayName": n => { appConsentRequest.appDisplayName = n.getStringValue(); },
        "appId": n => { appConsentRequest.appId = n.getStringValue(); },
        "pendingScopes": n => { appConsentRequest.pendingScopes = n.getCollectionOfObjectValues<AppConsentRequestScope>(createAppConsentRequestScopeFromDiscriminatorValue); },
        "userConsentRequests": n => { appConsentRequest.userConsentRequests = n.getCollectionOfObjectValues<UserConsentRequest>(createUserConsentRequestFromDiscriminatorValue); },
    }
}
