import { type ImplicitGrantSettings } from './implicitGrantSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImplicitGrantSettings(writer: SerializationWriter, implicitGrantSettings: ImplicitGrantSettings | undefined = {} as ImplicitGrantSettings) : void {
        writer.writeBooleanValue("enableAccessTokenIssuance", implicitGrantSettings.enableAccessTokenIssuance);
        writer.writeBooleanValue("enableIdTokenIssuance", implicitGrantSettings.enableIdTokenIssuance);
        writer.writeStringValue("@odata.type", implicitGrantSettings.odataType);
        writer.writeAdditionalData(implicitGrantSettings.additionalData);
}
