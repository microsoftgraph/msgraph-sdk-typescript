import {IosHomeScreenPageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenPageFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenPageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenPageImpl();
}
