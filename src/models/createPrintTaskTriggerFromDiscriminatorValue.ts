import {PrintTaskTriggerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskTriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskTriggerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskTriggerImpl();
}
