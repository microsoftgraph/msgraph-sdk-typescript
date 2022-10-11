import {IosHomeScreenFolderPageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderPageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenFolderPageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenFolderPageCollectionResponse();
}
