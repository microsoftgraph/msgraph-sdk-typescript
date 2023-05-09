import {DismissPostRequestBody} from './dismissPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDismissPostRequestBody(dismissPostRequestBody: DismissPostRequestBody | undefined = {} as DismissPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "servicePrincipalIds": n => { dismissPostRequestBody.servicePrincipalIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
