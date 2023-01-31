import {CumIPmtPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCumIPmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CumIPmtPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CumIPmtPostRequestBody();
}
