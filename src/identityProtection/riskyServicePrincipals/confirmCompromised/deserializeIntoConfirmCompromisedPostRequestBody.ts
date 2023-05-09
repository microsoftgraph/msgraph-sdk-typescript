import {ConfirmCompromisedPostRequestBody} from './confirmCompromisedPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfirmCompromisedPostRequestBody(confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {} as ConfirmCompromisedPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "servicePrincipalIds": n => { confirmCompromisedPostRequestBody.servicePrincipalIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
