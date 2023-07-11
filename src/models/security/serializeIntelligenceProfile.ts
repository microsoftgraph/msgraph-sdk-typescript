import {serializeEntity} from '../serializeEntity';
import {FormattedContent} from './formattedContent';
import {IntelligenceProfile} from './intelligenceProfile';
import {IntelligenceProfileCountryOrRegionOfOrigin} from './intelligenceProfileCountryOrRegionOfOrigin';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {IntelligenceProfileKind} from './intelligenceProfileKind';
import {serializeFormattedContent} from './serializeFormattedContent';
import {serializeIntelligenceProfileCountryOrRegionOfOrigin} from './serializeIntelligenceProfileCountryOrRegionOfOrigin';
import {serializeIntelligenceProfileIndicator} from './serializeIntelligenceProfileIndicator';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIntelligenceProfile(writer: SerializationWriter, intelligenceProfile: IntelligenceProfile | undefined = {} as IntelligenceProfile) : void {
        serializeEntity(writer, intelligenceProfile)
        writer.writeCollectionOfPrimitiveValues<string>("aliases", intelligenceProfile.aliases);
        writer.writeCollectionOfObjectValues<IntelligenceProfileCountryOrRegionOfOrigin>("countriesOrRegionsOfOrigin", intelligenceProfile.countriesOrRegionsOfOrigin, serializeIntelligenceProfileCountryOrRegionOfOrigin);
        writer.writeObjectValue<FormattedContent>("description", intelligenceProfile.description, serializeFormattedContent);
        writer.writeDateValue("firstActiveDateTime", intelligenceProfile.firstActiveDateTime);
        writer.writeCollectionOfObjectValues<IntelligenceProfileIndicator>("indicators", intelligenceProfile.indicators, serializeIntelligenceProfileIndicator);
        writer.writeEnumValue<IntelligenceProfileKind>("kind", intelligenceProfile.kind);
        writer.writeObjectValue<FormattedContent>("summary", intelligenceProfile.summary, serializeFormattedContent);
        writer.writeCollectionOfPrimitiveValues<string>("targets", intelligenceProfile.targets);
        writer.writeStringValue("title", intelligenceProfile.title);
        writer.writeObjectValue<FormattedContent>("tradecraft", intelligenceProfile.tradecraft, serializeFormattedContent);
}
