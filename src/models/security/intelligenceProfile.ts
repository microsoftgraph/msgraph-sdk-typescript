import {Entity} from '../entity';
import {FormattedContent} from './formattedContent';
import {IntelligenceProfileCountryOrRegionOfOrigin} from './intelligenceProfileCountryOrRegionOfOrigin';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {IntelligenceProfileKind} from './intelligenceProfileKind';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfile extends Entity, Parsable {
    /**
     * A list of commonly-known aliases for the threat intelligence included in the intelligenceProfile.
     */
    aliases?: string[] | undefined;
    /**
     * The country/region of origin for the given actor or threat associated with this intelligenceProfile.
     */
    countriesOrRegionsOfOrigin?: IntelligenceProfileCountryOrRegionOfOrigin[] | undefined;
    /**
     * The description property
     */
    description?: FormattedContent | undefined;
    /**
     * The date and time when this intelligenceProfile was first active. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    firstActiveDateTime?: Date | undefined;
    /**
     * Includes an assemblage of high-fidelity network indicators of compromise.
     */
    indicators?: IntelligenceProfileIndicator[] | undefined;
    /**
     * The kind property
     */
    kind?: IntelligenceProfileKind | undefined;
    /**
     * The summary property
     */
    summary?: FormattedContent | undefined;
    /**
     * Known targets related to this intelligenceProfile.
     */
    targets?: string[] | undefined;
    /**
     * The title of this intelligenceProfile.
     */
    title?: string | undefined;
    /**
     * Formatted information featuring a description of the distinctive tactics, techniques, and procedures (TTP) of the group, followed by a list of all known custom, commodity, and publicly available implants used by the group.
     */
    tradecraft?: FormattedContent | undefined;
}
