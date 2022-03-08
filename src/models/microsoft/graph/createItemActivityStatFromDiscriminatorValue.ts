import {ItemActivityStat} from './itemActivityStat';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityStatFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivityStat {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivityStat();
}
