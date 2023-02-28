import {CumPrincPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCumPrincPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CumPrincPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CumPrincPostRequestBody();
}
