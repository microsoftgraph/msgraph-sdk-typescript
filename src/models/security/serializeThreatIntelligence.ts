import {serializeEntity} from '../serializeEntity';
import {Article} from './article';
import {ArticleIndicator} from './articleIndicator';
import {Host} from './host';
import {HostComponent} from './hostComponent';
import {HostCookie} from './hostCookie';
import {HostTracker} from './hostTracker';
import {IntelligenceProfile} from './intelligenceProfile';
import {IntelligenceProfileIndicator} from './intelligenceProfileIndicator';
import {PassiveDnsRecord} from './passiveDnsRecord';
import {serializeArticle} from './serializeArticle';
import {serializeArticleIndicator} from './serializeArticleIndicator';
import {serializeHost} from './serializeHost';
import {serializeHostComponent} from './serializeHostComponent';
import {serializeHostCookie} from './serializeHostCookie';
import {serializeHostTracker} from './serializeHostTracker';
import {serializeIntelligenceProfile} from './serializeIntelligenceProfile';
import {serializeIntelligenceProfileIndicator} from './serializeIntelligenceProfileIndicator';
import {serializePassiveDnsRecord} from './serializePassiveDnsRecord';
import {serializeVulnerability} from './serializeVulnerability';
import {ThreatIntelligence} from './threatIntelligence';
import {Vulnerability} from './vulnerability';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
