import {deserializeIntoTimeOff} from './deserializeIntoTimeOff';
import {TimeOff} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeOffFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOff;
}
