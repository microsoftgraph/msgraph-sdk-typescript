import {ImArgumentPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImArgumentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImArgumentPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImArgumentPostRequestBody();
}
