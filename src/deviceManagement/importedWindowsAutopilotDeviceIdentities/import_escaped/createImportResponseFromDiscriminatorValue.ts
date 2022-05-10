import {ImportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportResponseImpl();
}
