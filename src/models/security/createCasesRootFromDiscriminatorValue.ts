import {deserializeIntoCasesRoot} from './deserializeIntoCasesRoot';
import {CasesRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCasesRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCasesRoot;
}
