import {AppIdentity} from './appIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppIdentity(appIdentity: AppIdentity | undefined = {} as AppIdentity, writer: SerializationWriter) : void {
        writer.writeStringValue("appId", appIdentity.appId);
        writer.writeStringValue("displayName", appIdentity.displayName);
        writer.writeStringValue("@odata.type", appIdentity.odataType);
        writer.writeStringValue("servicePrincipalId", appIdentity.servicePrincipalId);
        writer.writeStringValue("servicePrincipalName", appIdentity.servicePrincipalName);
        writer.writeAdditionalData(appIdentity.additionalData);
}
