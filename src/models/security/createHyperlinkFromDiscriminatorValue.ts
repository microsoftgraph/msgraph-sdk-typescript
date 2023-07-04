import {deserializeIntoHyperlink} from './deserializeIntoHyperlink';
import {Hyperlink} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHyperlinkFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHyperlink;
}
