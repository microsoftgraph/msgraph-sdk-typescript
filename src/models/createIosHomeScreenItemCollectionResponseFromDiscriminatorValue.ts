import {IosHomeScreenItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenItemCollectionResponse();
}
