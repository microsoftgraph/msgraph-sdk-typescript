import {createSiteFromDiscriminatorValue} from '../createSiteFromDiscriminatorValue';
import {serializeSite} from '../serializeSite';
import {Site} from '../site';
import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {SiteSource} from './siteSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSiteSource(siteSource: SiteSource | undefined = {} as SiteSource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSource(siteSource),
        "site": n => { siteSource.site = n.getObjectValue<Site>(createSiteFromDiscriminatorValue); },
    }
}
