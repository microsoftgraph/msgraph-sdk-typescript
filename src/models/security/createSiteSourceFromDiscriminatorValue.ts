import {SiteSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSiteSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : SiteSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SiteSource();
}
