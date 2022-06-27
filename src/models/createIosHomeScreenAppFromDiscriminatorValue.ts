import {IosHomeScreenAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenAppImpl();
}
