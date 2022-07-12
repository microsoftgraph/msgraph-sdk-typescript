import {SiteSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SiteSourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SiteSourceCollectionResponse();
}
