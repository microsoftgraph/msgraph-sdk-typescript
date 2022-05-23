import {PrintTaskStatusImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskStatusImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskStatusImpl();
}
