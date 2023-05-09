import {deserializeIntoSiteCollectionResponse} from './deserializeIntoSiteCollectionResponse';
import {SiteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSiteCollectionResponse;
}
