import { deserializeIntoSiteSource } from './deserializeIntoSiteSource';
import { type SiteSource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSiteSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSiteSource;
}
