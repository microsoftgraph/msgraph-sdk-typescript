import {AppConsentRequestScope} from './appConsentRequestScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequestScope(appConsentRequestScope: AppConsentRequestScope | undefined = {} as AppConsentRequestScope, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", appConsentRequestScope.displayName);
        writer.writeStringValue("@odata.type", appConsentRequestScope.odataType);
        writer.writeAdditionalData(appConsentRequestScope.additionalData);
}
