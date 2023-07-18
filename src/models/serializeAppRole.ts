import {AppRole} from './appRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeAppRole(writer: SerializationWriter, appRole: AppRole | undefined = {} as AppRole) : void {
        writer.writeCollectionOfPrimitiveValues<string>("allowedMemberTypes", appRole.allowedMemberTypes);
        writer.writeStringValue("description", appRole.description);
        writer.writeStringValue("displayName", appRole.displayName);
        writer.writeGuidValue("id", appRole.id);
        writer.writeBooleanValue("isEnabled", appRole.isEnabled);
        writer.writeStringValue("@odata.type", appRole.odataType);
        writer.writeStringValue("origin", appRole.origin);
        writer.writeStringValue("value", appRole.value);
        writer.writeAdditionalData(appRole.additionalData);
}
