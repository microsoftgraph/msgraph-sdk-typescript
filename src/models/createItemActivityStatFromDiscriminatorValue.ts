import {deserializeIntoItemActivityStat} from './deserializeIntoItemActivityStat';
import {ItemActivityStat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityStatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemActivityStat;
}
