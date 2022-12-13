import {HuntingRowResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHuntingRowResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : HuntingRowResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HuntingRowResult();
}
