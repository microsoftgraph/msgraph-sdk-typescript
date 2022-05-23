import {PageLinksImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPageLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) : PageLinksImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PageLinksImpl();
}
