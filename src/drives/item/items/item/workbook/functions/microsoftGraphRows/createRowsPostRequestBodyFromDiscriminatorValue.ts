import {RowsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRowsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RowsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RowsPostRequestBody();
}
