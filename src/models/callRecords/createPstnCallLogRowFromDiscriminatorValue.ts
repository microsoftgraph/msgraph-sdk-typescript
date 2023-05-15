import {deserializeIntoPstnCallLogRow} from './deserializeIntoPstnCallLogRow';
import {PstnCallLogRow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPstnCallLogRowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPstnCallLogRow;
}
