import {AppListItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppListItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppListItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppListItemCollectionResponse();
}
