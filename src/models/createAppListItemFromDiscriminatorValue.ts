import { deserializeIntoAppListItem } from './deserializeIntoAppListItem';
import { type AppListItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppListItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppListItem;
}
