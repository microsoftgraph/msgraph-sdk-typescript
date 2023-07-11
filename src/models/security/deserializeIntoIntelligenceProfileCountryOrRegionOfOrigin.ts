import {IntelligenceProfileCountryOrRegionOfOrigin} from './intelligenceProfileCountryOrRegionOfOrigin';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin(intelligenceProfileCountryOrRegionOfOrigin: IntelligenceProfileCountryOrRegionOfOrigin | undefined = {} as IntelligenceProfileCountryOrRegionOfOrigin) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { intelligenceProfileCountryOrRegionOfOrigin.code = n.getStringValue(); },
        "label": n => { intelligenceProfileCountryOrRegionOfOrigin.label = n.getStringValue(); },
        "@odata.type": n => { intelligenceProfileCountryOrRegionOfOrigin.odataType = n.getStringValue(); },
    }
}
