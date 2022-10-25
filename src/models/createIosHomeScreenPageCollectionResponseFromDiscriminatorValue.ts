import {IosHomeScreenPageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenPageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenPageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenPageCollectionResponse();
}
