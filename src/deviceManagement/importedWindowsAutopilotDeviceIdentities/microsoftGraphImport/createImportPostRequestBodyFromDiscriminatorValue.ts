import {ImportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportPostRequestBody();
}
