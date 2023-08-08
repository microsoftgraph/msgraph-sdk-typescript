import type {Entity} from '../entity';
import type {Article} from './article';
import type {ArticleIndicator} from './articleIndicator';
import type {Host} from './host';
import type {HostComponent} from './hostComponent';
import type {HostCookie} from './hostCookie';
import type {HostTracker} from './hostTracker';
import type {IntelligenceProfile} from './intelligenceProfile';
import type {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import type {PassiveDnsRecord} from './passiveDnsRecord';
import type {Vulnerability} from './vulnerability';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatIntelligence extends Entity, Parsable {
    /**
     * Refers to indicators of threat or compromise highlighted in an microsoft.graph.security.article.Note: List retrieval is not yet supported.
     */
    articleIndicators?: ArticleIndicator[] | undefined;
    /**
     * A list of article objects.
     */
    articles?: Article[] | undefined;
    /**
     * Retrieve details about microsoft.graph.security.hostComponent objects.Note: List retrieval is not yet supported.
     */
    hostComponents?: HostComponent[] | undefined;
    /**
     * Retrieve details about microsoft.graph.security.hostCookie objects.Note: List retrieval is not yet supported.
     */
    hostCookies?: HostCookie[] | undefined;
    /**
     * Refers to microsoft.graph.security.host objects that Microsoft Threat Intelligence has observed.Note: List retrieval is not yet supported.
     */
    hosts?: Host[] | undefined;
    /**
     * Retrieve details about microsoft.graph.security.hostTracker objects.Note: List retrieval is not yet supported.
     */
    hostTrackers?: HostTracker[] | undefined;
    /**
     * The intelligenceProfileIndicators property
     */
    intelligenceProfileIndicators?: IntelligenceProfileIndicator[] | undefined;
    /**
     * A list of intelligenceProfile objects.
     */
    intelProfiles?: IntelligenceProfile[] | undefined;
    /**
     * Retrieve details about microsoft.graph.security.passiveDnsRecord objects.Note: List retrieval is not yet supported.
     */
    passiveDnsRecords?: PassiveDnsRecord[] | undefined;
    /**
     * Retrieve details about microsoft.graph.security.vulnerabilities.Note: List retrieval is not yet supported.
     */
    vulnerabilities?: Vulnerability[] | undefined;
}
