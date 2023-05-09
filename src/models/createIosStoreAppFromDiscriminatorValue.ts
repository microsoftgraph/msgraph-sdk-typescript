import {deserializeIntoIosStoreApp} from './deserializeIntoIosStoreApp';
import {IosStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosStoreApp;
}
