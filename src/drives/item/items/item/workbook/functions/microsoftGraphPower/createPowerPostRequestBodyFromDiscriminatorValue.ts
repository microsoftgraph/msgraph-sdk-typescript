import {PowerPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PowerPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PowerPostRequestBody();
}
