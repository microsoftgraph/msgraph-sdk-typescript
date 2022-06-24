import {RecentResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRecentResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RecentResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RecentResponseImpl();
}
