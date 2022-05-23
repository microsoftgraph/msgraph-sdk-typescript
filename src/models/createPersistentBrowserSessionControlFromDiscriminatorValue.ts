import {PersistentBrowserSessionControlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersistentBrowserSessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersistentBrowserSessionControlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersistentBrowserSessionControlImpl();
}
