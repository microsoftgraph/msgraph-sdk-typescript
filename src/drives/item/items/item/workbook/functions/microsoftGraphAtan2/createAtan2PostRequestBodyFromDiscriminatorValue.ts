import {Atan2PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAtan2PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Atan2PostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Atan2PostRequestBody();
}
