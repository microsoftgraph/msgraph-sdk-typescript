import { type SamlSingleSignOnSettings } from './samlSingleSignOnSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSamlSingleSignOnSettings(writer: SerializationWriter, samlSingleSignOnSettings: SamlSingleSignOnSettings | undefined = {} as SamlSingleSignOnSettings) : void {
        writer.writeStringValue("@odata.type", samlSingleSignOnSettings.odataType);
        writer.writeStringValue("relayState", samlSingleSignOnSettings.relayState);
        writer.writeAdditionalData(samlSingleSignOnSettings.additionalData);
}
