import {ImportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportRequestBodyImpl();
}
