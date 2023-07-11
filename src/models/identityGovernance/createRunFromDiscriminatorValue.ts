import {deserializeIntoRun} from './deserializeIntoRun';
import {Run} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRunFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRun;
}
