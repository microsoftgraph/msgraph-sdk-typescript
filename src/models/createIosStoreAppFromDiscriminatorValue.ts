import { deserializeIntoIosStoreApp } from './deserializeIntoIosStoreApp';
import { type IosStoreApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosStoreApp;
}
