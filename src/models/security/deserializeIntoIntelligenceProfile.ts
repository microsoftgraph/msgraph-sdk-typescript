import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {createFormattedContentFromDiscriminatorValue} from './createFormattedContentFromDiscriminatorValue';
import {createIntelligenceProfileCountryOrRegionOfOriginFromDiscriminatorValue} from './createIntelligenceProfileCountryOrRegionOfOriginFromDiscriminatorValue';
import {createIntelligenceProfileIndicatorFromDiscriminatorValue} from './createIntelligenceProfileIndicatorFromDiscriminatorValue';
import {FormattedContent} from './formattedContent';
import {IntelligenceProfile} from './intelligenceProfile';
import {IntelligenceProfileCountryOrRegionOfOrigin} from './intelligenceProfileCountryOrRegionOfOrigin';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {IntelligenceProfileKind} from './intelligenceProfileKind';
import {serializeFormattedContent} from './serializeFormattedContent';
import {serializeIntelligenceProfileCountryOrRegionOfOrigin} from './serializeIntelligenceProfileCountryOrRegionOfOrigin';
import {serializeIntelligenceProfileIndicator} from './serializeIntelligenceProfileIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntelligenceProfile(intelligenceProfile: IntelligenceProfile | undefined = {} as IntelligenceProfile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(intelligenceProfile),
        "aliases": n => { intelligenceProfile.aliases = n.getCollectionOfPrimitiveValues<string>(); },
        "countriesOrRegionsOfOrigin": n => { intelligenceProfile.countriesOrRegionsOfOrigin = n.getCollectionOfObjectValues<IntelligenceProfileCountryOrRegionOfOrigin>(createIntelligenceProfileCountryOrRegionOfOriginFromDiscriminatorValue); },
        "description": n => { intelligenceProfile.description = n.getObjectValue<FormattedContent>(createFormattedContentFromDiscriminatorValue); },
        "firstActiveDateTime": n => { intelligenceProfile.firstActiveDateTime = n.getDateValue(); },
        "indicators": n => { intelligenceProfile.indicators = n.getCollectionOfObjectValues<IntelligenceProfileIndicator>(createIntelligenceProfileIndicatorFromDiscriminatorValue); },
        "kind": n => { intelligenceProfile.kind = n.getEnumValue<IntelligenceProfileKind>(IntelligenceProfileKind); },
        "summary": n => { intelligenceProfile.summary = n.getObjectValue<FormattedContent>(createFormattedContentFromDiscriminatorValue); },
        "targets": n => { intelligenceProfile.targets = n.getCollectionOfPrimitiveValues<string>(); },
        "title": n => { intelligenceProfile.title = n.getStringValue(); },
        "tradecraft": n => { intelligenceProfile.tradecraft = n.getObjectValue<FormattedContent>(createFormattedContentFromDiscriminatorValue); },
    }
}
