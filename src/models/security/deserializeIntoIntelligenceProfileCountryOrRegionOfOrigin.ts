import { type IntelligenceProfileCountryOrRegionOfOrigin } from './intelligenceProfileCountryOrRegionOfOrigin';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin(intelligenceProfileCountryOrRegionOfOrigin: IntelligenceProfileCountryOrRegionOfOrigin | undefined = {} as IntelligenceProfileCountryOrRegionOfOrigin) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { intelligenceProfileCountryOrRegionOfOrigin.code = n.getStringValue(); },
        "label": n => { intelligenceProfileCountryOrRegionOfOrigin.label = n.getStringValue(); },
        "@odata.type": n => { intelligenceProfileCountryOrRegionOfOrigin.odataType = n.getStringValue(); },
    }
}
