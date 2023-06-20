import {ImplicitGrantSettings} from './implicitGrantSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImplicitGrantSettings(implicitGrantSettings: ImplicitGrantSettings | undefined = {} as ImplicitGrantSettings, writer: SerializationWriter) : void {
        writer.writeBooleanValue("enableAccessTokenIssuance", implicitGrantSettings.enableAccessTokenIssuance);
        writer.writeBooleanValue("enableIdTokenIssuance", implicitGrantSettings.enableIdTokenIssuance);
        writer.writeStringValue("@odata.type", implicitGrantSettings.odataType);
        writer.writeAdditionalData(implicitGrantSettings.additionalData);
}
