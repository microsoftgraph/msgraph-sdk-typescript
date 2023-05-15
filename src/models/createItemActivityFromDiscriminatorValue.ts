import {deserializeIntoItemActivity} from './deserializeIntoItemActivity';
import {ItemActivity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemActivity;
}
