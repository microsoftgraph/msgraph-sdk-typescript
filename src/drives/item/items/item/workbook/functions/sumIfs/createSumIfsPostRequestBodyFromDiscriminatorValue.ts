import {SumIfsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSumIfsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SumIfsPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SumIfsPostRequestBody();
}
