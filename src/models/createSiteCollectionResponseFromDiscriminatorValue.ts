import {SiteCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SiteCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SiteCollectionResponseImpl();
}
