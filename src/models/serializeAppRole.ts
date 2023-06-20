import {AppRole} from './appRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppRole(appRole: AppRole | undefined = {} as AppRole, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("allowedMemberTypes", appRole.allowedMemberTypes);
        writer.writeStringValue("description", appRole.description);
        writer.writeStringValue("displayName", appRole.displayName);
        writer.writeStringValue("id", appRole.id);
        writer.writeBooleanValue("isEnabled", appRole.isEnabled);
        writer.writeStringValue("@odata.type", appRole.odataType);
        writer.writeStringValue("origin", appRole.origin);
        writer.writeStringValue("value", appRole.value);
        writer.writeAdditionalData(appRole.additionalData);
}
