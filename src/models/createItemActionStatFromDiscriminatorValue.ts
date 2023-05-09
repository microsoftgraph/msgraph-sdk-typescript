import {deserializeIntoItemActionStat} from './deserializeIntoItemActionStat';
import {ItemActionStat} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActionStatFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemActionStat;
}
