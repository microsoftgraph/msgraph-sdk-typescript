import { deserializeIntoUserPrint } from './deserializeIntoUserPrint';
import { type UserPrint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserPrintFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserPrint;
}
