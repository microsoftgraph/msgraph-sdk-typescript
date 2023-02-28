import {Quartile_ExcPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuartile_ExcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quartile_ExcPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quartile_ExcPostRequestBody();
}
