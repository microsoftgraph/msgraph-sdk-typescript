import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type Article } from './article';
import { type ArticleIndicator } from './articleIndicator';
import { createArticleFromDiscriminatorValue } from './createArticleFromDiscriminatorValue';
import { createArticleIndicatorFromDiscriminatorValue } from './createArticleIndicatorFromDiscriminatorValue';
import { createHostComponentFromDiscriminatorValue } from './createHostComponentFromDiscriminatorValue';
import { createHostCookieFromDiscriminatorValue } from './createHostCookieFromDiscriminatorValue';
import { createHostFromDiscriminatorValue } from './createHostFromDiscriminatorValue';
import { createHostTrackerFromDiscriminatorValue } from './createHostTrackerFromDiscriminatorValue';
import { createIntelligenceProfileFromDiscriminatorValue } from './createIntelligenceProfileFromDiscriminatorValue';
import { createIntelligenceProfileIndicatorFromDiscriminatorValue } from './createIntelligenceProfileIndicatorFromDiscriminatorValue';
import { createPassiveDnsRecordFromDiscriminatorValue } from './createPassiveDnsRecordFromDiscriminatorValue';
import { createVulnerabilityFromDiscriminatorValue } from './createVulnerabilityFromDiscriminatorValue';
import { type Host } from './host';
import { type HostComponent } from './hostComponent';
import { type HostCookie } from './hostCookie';
import { type HostTracker } from './hostTracker';
import { type IntelligenceProfile } from './intelligenceProfile';
import { type IntelligenceProfileIndicator } from './intelligenceProfileIndicator';
import { type PassiveDnsRecord } from './passiveDnsRecord';
import { serializeArticle } from './serializeArticle';
import { serializeArticleIndicator } from './serializeArticleIndicator';
import { serializeHost } from './serializeHost';
import { serializeHostComponent } from './serializeHostComponent';
import { serializeHostCookie } from './serializeHostCookie';
import { serializeHostTracker } from './serializeHostTracker';
import { serializeIntelligenceProfile } from './serializeIntelligenceProfile';
import { serializeIntelligenceProfileIndicator } from './serializeIntelligenceProfileIndicator';
import { serializePassiveDnsRecord } from './serializePassiveDnsRecord';
import { serializeVulnerability } from './serializeVulnerability';
import { type ThreatIntelligence } from './threatIntelligence';
import { type Vulnerability } from './vulnerability';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatIntelligence(threatIntelligence: ThreatIntelligence | undefined = {} as ThreatIntelligence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(threatIntelligence),
        "articleIndicators": n => { threatIntelligence.articleIndicators = n.getCollectionOfObjectValues<ArticleIndicator>(createArticleIndicatorFromDiscriminatorValue); },
        "articles": n => { threatIntelligence.articles = n.getCollectionOfObjectValues<Article>(createArticleFromDiscriminatorValue); },
        "hostComponents": n => { threatIntelligence.hostComponents = n.getCollectionOfObjectValues<HostComponent>(createHostComponentFromDiscriminatorValue); },
        "hostCookies": n => { threatIntelligence.hostCookies = n.getCollectionOfObjectValues<HostCookie>(createHostCookieFromDiscriminatorValue); },
        "hosts": n => { threatIntelligence.hosts = n.getCollectionOfObjectValues<Host>(createHostFromDiscriminatorValue); },
        "hostTrackers": n => { threatIntelligence.hostTrackers = n.getCollectionOfObjectValues<HostTracker>(createHostTrackerFromDiscriminatorValue); },
        "intelligenceProfileIndicators": n => { threatIntelligence.intelligenceProfileIndicators = n.getCollectionOfObjectValues<IntelligenceProfileIndicator>(createIntelligenceProfileIndicatorFromDiscriminatorValue); },
        "intelProfiles": n => { threatIntelligence.intelProfiles = n.getCollectionOfObjectValues<IntelligenceProfile>(createIntelligenceProfileFromDiscriminatorValue); },
        "passiveDnsRecords": n => { threatIntelligence.passiveDnsRecords = n.getCollectionOfObjectValues<PassiveDnsRecord>(createPassiveDnsRecordFromDiscriminatorValue); },
        "vulnerabilities": n => { threatIntelligence.vulnerabilities = n.getCollectionOfObjectValues<Vulnerability>(createVulnerabilityFromDiscriminatorValue); },
    }
}
