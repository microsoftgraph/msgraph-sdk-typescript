import {ImportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportPostRequestBodyImpl();
}
