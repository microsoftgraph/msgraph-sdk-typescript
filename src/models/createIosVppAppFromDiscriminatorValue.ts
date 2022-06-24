import {IosVppAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosVppAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosVppAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosVppAppImpl();
}
