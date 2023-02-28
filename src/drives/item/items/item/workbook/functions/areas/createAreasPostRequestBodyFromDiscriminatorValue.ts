import {AreasPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAreasPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AreasPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AreasPostRequestBody();
}
