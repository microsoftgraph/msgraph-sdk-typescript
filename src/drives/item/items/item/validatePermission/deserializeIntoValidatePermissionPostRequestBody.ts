import { type ValidatePermissionPostRequestBody } from './validatePermissionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoValidatePermissionPostRequestBody(validatePermissionPostRequestBody: ValidatePermissionPostRequestBody | undefined = {} as ValidatePermissionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "challengeToken": n => { validatePermissionPostRequestBody.challengeToken = n.getStringValue(); },
        "password": n => { validatePermissionPostRequestBody.password = n.getStringValue(); },
    }
}
