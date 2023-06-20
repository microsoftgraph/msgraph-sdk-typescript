import {AppConsentApprovalRoute} from './appConsentApprovalRoute';
import {AppConsentRequest} from './appConsentRequest';
import {serializeAppConsentRequest} from './serializeAppConsentRequest';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentApprovalRoute(appConsentApprovalRoute: AppConsentApprovalRoute | undefined = {} as AppConsentApprovalRoute, writer: SerializationWriter) : void {
        serializeEntity(writer, appConsentApprovalRoute)
        writer.writeCollectionOfObjectValues<AppConsentRequest>("appConsentRequests", appConsentApprovalRoute.appConsentRequests, serializeAppConsentRequest);
}
