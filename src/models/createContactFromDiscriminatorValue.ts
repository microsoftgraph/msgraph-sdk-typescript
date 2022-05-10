import {ContactImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFromDiscriminatorValue(parseNode: ParseNode | undefined) : ContactImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ContactImpl();
}
