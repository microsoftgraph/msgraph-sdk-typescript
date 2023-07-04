import {deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin} from './deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin';
import {IntelligenceProfileCountryOrRegionOfOrigin} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileCountryOrRegionOfOriginFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin;
}
