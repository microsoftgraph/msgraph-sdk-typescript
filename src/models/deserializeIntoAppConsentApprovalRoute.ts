import type {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import type {AppConsentRequest} from './appConsentRequest';
import {createAppConsentRequestFromDiscriminatorValue} from './createAppConsentRequestFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAppConsentRequest} from './serializeAppConsentRequest';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppConsentApprovalRoute(appConsentApprovalRoute: AppConsentApprovalRoute | undefined = {} as AppConsentApprovalRoute) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appConsentApprovalRoute),
        "appConsentRequests": n => { appConsentApprovalRoute.appConsentRequests = n.getCollectionOfObjectValues<AppConsentRequest>(createAppConsentRequestFromDiscriminatorValue); },
    }
}
