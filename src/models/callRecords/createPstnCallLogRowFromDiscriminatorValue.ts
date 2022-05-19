import {PstnCallLogRow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPstnCallLogRowFromDiscriminatorValue(parseNode: ParseNode | undefined) : PstnCallLogRow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PstnCallLogRow();
}
