import {ItemAnalyticsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemAnalyticsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemAnalyticsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemAnalyticsImpl();
}
