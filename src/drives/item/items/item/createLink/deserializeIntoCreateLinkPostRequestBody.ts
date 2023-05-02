import {CreateLinkPostRequestBody} from './createLinkPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateLinkPostRequestBody(createLinkPostRequestBody: CreateLinkPostRequestBody | undefined = {} as CreateLinkPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { createLinkPostRequestBody.expirationDateTime = n.getDateValue(); },
        "message": n => { createLinkPostRequestBody.message = n.getStringValue(); },
        "password": n => { createLinkPostRequestBody.password = n.getStringValue(); },
        "retainInheritedPermissions": n => { createLinkPostRequestBody.retainInheritedPermissions = n.getBooleanValue(); },
        "scope": n => { createLinkPostRequestBody.scope = n.getStringValue(); },
        "type": n => { createLinkPostRequestBody.type = n.getStringValue(); },
    }
}
