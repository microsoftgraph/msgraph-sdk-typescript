import {deserializeIntoList} from './deserializeIntoList';
import {List} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createListFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoList;
}
