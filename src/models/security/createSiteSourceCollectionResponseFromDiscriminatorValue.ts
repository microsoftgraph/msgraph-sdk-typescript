import {deserializeIntoSiteSourceCollectionResponse} from './deserializeIntoSiteSourceCollectionResponse';
import {SiteSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSiteSourceCollectionResponse;
}
