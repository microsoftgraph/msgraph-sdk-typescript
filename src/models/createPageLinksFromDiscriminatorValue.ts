import {deserializeIntoPageLinks} from './deserializeIntoPageLinks';
import {PageLinks} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPageLinksFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPageLinks;
}
