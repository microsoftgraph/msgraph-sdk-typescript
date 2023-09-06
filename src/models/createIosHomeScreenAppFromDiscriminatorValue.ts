import { deserializeIntoIosHomeScreenApp } from './deserializeIntoIosHomeScreenApp';
import { type IosHomeScreenApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosHomeScreenAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosHomeScreenApp;
}
