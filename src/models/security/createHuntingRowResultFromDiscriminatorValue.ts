import {deserializeIntoHuntingRowResult} from './deserializeIntoHuntingRowResult';
import {HuntingRowResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHuntingRowResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHuntingRowResult;
}
