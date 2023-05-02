import {AppConsentRequest} from './appConsentRequest';
import {AppConsentRequestScope} from './appConsentRequestScope';
import {serializeAppConsentRequestScope} from './serializeAppConsentRequestScope';
import {serializeEntity} from './serializeEntity';
import {serializeUserConsentRequest} from './serializeUserConsentRequest';
import {UserConsentRequest} from './userConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequest(writer: SerializationWriter, appConsentRequest: AppConsentRequest | undefined = {} as AppConsentRequest) : void {
        serializeEntity(writer, appConsentRequest)
        writer.writeStringValue("appDisplayName", appConsentRequest.appDisplayName);
        writer.writeStringValue("appId", appConsentRequest.appId);
        writer.writeCollectionOfObjectValues<AppConsentRequestScope>("pendingScopes", appConsentRequest.pendingScopes, serializeAppConsentRequestScope);
        writer.writeCollectionOfObjectValues<UserConsentRequest>("userConsentRequests", appConsentRequest.userConsentRequests, serializeUserConsentRequest);
}
