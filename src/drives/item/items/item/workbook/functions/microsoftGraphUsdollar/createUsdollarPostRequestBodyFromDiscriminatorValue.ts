import {UsdollarPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsdollarPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsdollarPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsdollarPostRequestBody();
}
