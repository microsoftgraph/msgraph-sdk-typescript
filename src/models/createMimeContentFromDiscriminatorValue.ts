import {MimeContentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMimeContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : MimeContentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MimeContentImpl();
}
