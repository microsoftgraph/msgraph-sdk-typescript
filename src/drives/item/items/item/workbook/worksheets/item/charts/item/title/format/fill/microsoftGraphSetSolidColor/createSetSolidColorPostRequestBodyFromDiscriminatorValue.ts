import {SetSolidColorPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetSolidColorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SetSolidColorPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetSolidColorPostRequestBody();
}
