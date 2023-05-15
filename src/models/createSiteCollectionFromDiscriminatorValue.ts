import {deserializeIntoSiteCollection} from './deserializeIntoSiteCollection';
import {SiteCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSiteCollection;
}
