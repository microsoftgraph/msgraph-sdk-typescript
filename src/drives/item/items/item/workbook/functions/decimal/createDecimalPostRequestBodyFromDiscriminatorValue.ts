import {DecimalPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDecimalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DecimalPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DecimalPostRequestBody();
}
