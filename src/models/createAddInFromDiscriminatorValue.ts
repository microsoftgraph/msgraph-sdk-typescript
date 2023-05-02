import {deserializeIntoAddIn} from './deserializeIntoAddIn';
import {AddIn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddInFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddIn;
}
