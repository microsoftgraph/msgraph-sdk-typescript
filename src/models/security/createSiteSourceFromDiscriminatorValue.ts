import {deserializeIntoSiteSource} from './deserializeIntoSiteSource';
import {SiteSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSiteSource;
}
