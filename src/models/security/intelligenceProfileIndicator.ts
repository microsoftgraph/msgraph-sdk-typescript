import {Indicator} from './indicator';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IntelligenceProfileIndicator extends Indicator, Parsable {
    /**
     * Designate when an artifact was first used actively in an attack, when a particular sample was compiled, or if neither of those could be ascertained when the file was first seen in public repositories (for example, VirusTotal, ANY.RUN, Hybrid Analysis) or reported publicly.
     */
    firstSeenDateTime?: Date | undefined;
    /**
     * Designate when an artifact was most recently used actively in an attack, when a particular sample was compiled, or if neither of those could be ascertained when the file was first seen in public repositories (for example, VirusTotal, ANY.RUN, Hybrid Analysis) or reported publicly.
     */
    lastSeenDateTime?: Date | undefined;
}
