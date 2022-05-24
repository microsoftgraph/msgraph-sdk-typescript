import {PstnCallLogRowImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPstnCallLogRowFromDiscriminatorValue(parseNode: ParseNode | undefined) : PstnCallLogRowImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PstnCallLogRowImpl();
}
