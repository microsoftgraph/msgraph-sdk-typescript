import {TermImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermImpl();
}
