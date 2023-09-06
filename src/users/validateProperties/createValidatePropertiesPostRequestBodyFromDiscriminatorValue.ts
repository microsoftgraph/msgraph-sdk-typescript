import { deserializeIntoValidatePropertiesPostRequestBody } from './deserializeIntoValidatePropertiesPostRequestBody';
import { type ValidatePropertiesPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createValidatePropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoValidatePropertiesPostRequestBody;
}
