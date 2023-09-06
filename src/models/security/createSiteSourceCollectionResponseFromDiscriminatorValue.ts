import { deserializeIntoSiteSourceCollectionResponse } from './deserializeIntoSiteSourceCollectionResponse';
import { type SiteSourceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSiteSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSiteSourceCollectionResponse;
}
