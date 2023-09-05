import { deserializeIntoPstnCallLogRow } from './deserializeIntoPstnCallLogRow';
import { type PstnCallLogRow } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPstnCallLogRowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPstnCallLogRow;
}
