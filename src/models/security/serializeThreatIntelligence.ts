import { serializeEntity } from '../serializeEntity';
import { type Article } from './article';
import { type ArticleIndicator } from './articleIndicator';
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

export function serializeThreatIntelligence(writer: SerializationWriter, threatIntelligence: ThreatIntelligence | undefined = {} as ThreatIntelligence) : void {
        serializeEntity(writer, threatIntelligence)
        writer.writeCollectionOfObjectValues<ArticleIndicator>("articleIndicators", threatIntelligence.articleIndicators, serializeArticleIndicator);
        writer.writeCollectionOfObjectValues<Article>("articles", threatIntelligence.articles, serializeArticle);
        writer.writeCollectionOfObjectValues<HostComponent>("hostComponents", threatIntelligence.hostComponents, serializeHostComponent);
        writer.writeCollectionOfObjectValues<HostCookie>("hostCookies", threatIntelligence.hostCookies, serializeHostCookie);
        writer.writeCollectionOfObjectValues<Host>("hosts", threatIntelligence.hosts, serializeHost);
        writer.writeCollectionOfObjectValues<HostTracker>("hostTrackers", threatIntelligence.hostTrackers, serializeHostTracker);
        writer.writeCollectionOfObjectValues<IntelligenceProfileIndicator>("intelligenceProfileIndicators", threatIntelligence.intelligenceProfileIndicators, serializeIntelligenceProfileIndicator);
        writer.writeCollectionOfObjectValues<IntelligenceProfile>("intelProfiles", threatIntelligence.intelProfiles, serializeIntelligenceProfile);
        writer.writeCollectionOfObjectValues<PassiveDnsRecord>("passiveDnsRecords", threatIntelligence.passiveDnsRecords, serializePassiveDnsRecord);
        writer.writeCollectionOfObjectValues<Vulnerability>("vulnerabilities", threatIntelligence.vulnerabilities, serializeVulnerability);
}
