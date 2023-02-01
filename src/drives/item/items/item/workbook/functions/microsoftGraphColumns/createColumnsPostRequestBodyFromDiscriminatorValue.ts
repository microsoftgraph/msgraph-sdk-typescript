import {ColumnsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createColumnsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ColumnsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ColumnsPostRequestBody();
}
