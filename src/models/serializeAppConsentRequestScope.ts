import type {AppConsentRequestScope} from './appConsentRequestScope';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequestScope(writer: SerializationWriter, appConsentRequestScope: AppConsentRequestScope | undefined = {} as AppConsentRequestScope) : void {
        writer.writeStringValue("displayName", appConsentRequestScope.displayName);
        writer.writeStringValue("@odata.type", appConsentRequestScope.odataType);
        writer.writeAdditionalData(appConsentRequestScope.additionalData);
}
