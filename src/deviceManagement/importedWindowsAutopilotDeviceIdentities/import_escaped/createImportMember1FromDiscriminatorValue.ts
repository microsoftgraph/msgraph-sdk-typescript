import {ImportMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportMember1();
}
