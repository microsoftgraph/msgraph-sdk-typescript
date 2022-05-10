import {ValidatePropertiesRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidatePropertiesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValidatePropertiesRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValidatePropertiesRequestBodyImpl();
}
