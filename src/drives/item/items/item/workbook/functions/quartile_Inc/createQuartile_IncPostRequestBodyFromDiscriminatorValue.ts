import {Quartile_IncPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuartile_IncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quartile_IncPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quartile_IncPostRequestBody();
}
