import {deserializeIntoValidateCredentialsPostRequestBody} from './deserializeIntoValidateCredentialsPostRequestBody';
import {ValidateCredentialsPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValidateCredentialsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoValidateCredentialsPostRequestBody;
}
