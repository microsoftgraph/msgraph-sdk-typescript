import { deserializeIntoHuntingRowResult } from './deserializeIntoHuntingRowResult';
import { type HuntingRowResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHuntingRowResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHuntingRowResult;
}
