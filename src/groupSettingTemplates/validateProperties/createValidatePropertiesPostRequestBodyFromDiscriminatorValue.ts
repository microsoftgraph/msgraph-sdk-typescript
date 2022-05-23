import {ValidatePropertiesPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePropertiesPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePropertiesPostRequestBodyImpl();
}
