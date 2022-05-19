import {ValidatePropertiesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePropertiesPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePropertiesPostRequestBody();
}
