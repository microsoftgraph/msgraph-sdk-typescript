import {MobileLobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileLobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileLobAppImpl();
}
