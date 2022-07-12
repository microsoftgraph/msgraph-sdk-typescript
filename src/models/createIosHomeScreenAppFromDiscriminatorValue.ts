import {IosHomeScreenApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosHomeScreenApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosHomeScreenApp();
}
