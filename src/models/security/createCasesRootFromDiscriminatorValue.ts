import { deserializeIntoCasesRoot } from './deserializeIntoCasesRoot';
import { type CasesRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCasesRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCasesRoot;
}
