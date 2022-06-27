import {IosHomeScreenFolderPageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenFolderPageFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenFolderPageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenFolderPageImpl();
}
