import {AppListItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppListItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppListItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppListItemImpl();
}
