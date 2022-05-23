import {SiteCollectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : SiteCollectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SiteCollectionImpl();
}
