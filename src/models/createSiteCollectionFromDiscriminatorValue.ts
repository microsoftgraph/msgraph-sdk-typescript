import { deserializeIntoSiteCollection } from './deserializeIntoSiteCollection';
import { type SiteCollection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSiteCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSiteCollection;
}
