import { type IntelligenceProfileCountryOrRegionOfOrigin } from './intelligenceProfileCountryOrRegionOfOrigin';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIntelligenceProfileCountryOrRegionOfOrigin(writer: SerializationWriter, intelligenceProfileCountryOrRegionOfOrigin: IntelligenceProfileCountryOrRegionOfOrigin | undefined = {} as IntelligenceProfileCountryOrRegionOfOrigin) : void {
        writer.writeStringValue("code", intelligenceProfileCountryOrRegionOfOrigin.code);
        writer.writeStringValue("label", intelligenceProfileCountryOrRegionOfOrigin.label);
        writer.writeStringValue("@odata.type", intelligenceProfileCountryOrRegionOfOrigin.odataType);
        writer.writeAdditionalData(intelligenceProfileCountryOrRegionOfOrigin.additionalData);
}
