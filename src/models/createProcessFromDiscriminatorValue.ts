import {deserializeIntoProcess} from './deserializeIntoProcess';
import {Process} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProcessFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProcess;
}
