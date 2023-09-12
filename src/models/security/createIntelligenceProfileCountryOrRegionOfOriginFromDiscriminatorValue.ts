import { deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin } from './deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin';
import { type IntelligenceProfileCountryOrRegionOfOrigin } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileCountryOrRegionOfOriginFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfileCountryOrRegionOfOrigin;
}
