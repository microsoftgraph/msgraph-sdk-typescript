import {IosHomeScreenAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenAppCollectionResponse();
}
