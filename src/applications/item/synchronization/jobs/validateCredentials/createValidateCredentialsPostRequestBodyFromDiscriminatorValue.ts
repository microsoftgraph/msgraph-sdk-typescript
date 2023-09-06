import { deserializeIntoValidateCredentialsPostRequestBody } from './deserializeIntoValidateCredentialsPostRequestBody';
import { type ValidateCredentialsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createValidateCredentialsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoValidateCredentialsPostRequestBody;
}
