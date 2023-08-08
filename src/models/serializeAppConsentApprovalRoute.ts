import type {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import type {AppConsentRequest} from './appConsentRequest';
import {serializeAppConsentRequest} from './serializeAppConsentRequest';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentApprovalRoute(writer: SerializationWriter, appConsentApprovalRoute: AppConsentApprovalRoute | undefined = {} as AppConsentApprovalRoute) : void {
        serializeEntity(writer, appConsentApprovalRoute)
        writer.writeCollectionOfObjectValues<AppConsentRequest>("appConsentRequests", appConsentApprovalRoute.appConsentRequests, serializeAppConsentRequest);
}
