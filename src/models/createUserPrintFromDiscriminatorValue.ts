import {deserializeIntoUserPrint} from './deserializeIntoUserPrint';
import {UserPrint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserPrintFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserPrint;
}
