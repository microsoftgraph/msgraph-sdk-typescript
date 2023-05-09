import {deserializeIntoIosHomeScreenApp} from './deserializeIntoIosHomeScreenApp';
import {IosHomeScreenApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosHomeScreenAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosHomeScreenApp;
}
