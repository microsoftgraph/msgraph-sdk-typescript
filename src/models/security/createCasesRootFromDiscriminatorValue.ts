import {CasesRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCasesRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : CasesRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CasesRoot();
}
