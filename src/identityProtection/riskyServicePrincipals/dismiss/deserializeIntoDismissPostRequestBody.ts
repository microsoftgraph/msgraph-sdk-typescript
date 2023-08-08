import type {DismissPostRequestBody} from './dismissPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDismissPostRequestBody(dismissPostRequestBody: DismissPostRequestBody | undefined = {} as DismissPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "servicePrincipalIds": n => { dismissPostRequestBody.servicePrincipalIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
