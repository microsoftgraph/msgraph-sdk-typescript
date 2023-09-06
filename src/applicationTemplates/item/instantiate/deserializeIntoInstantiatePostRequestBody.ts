import { type InstantiatePostRequestBody } from './instantiatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoInstantiatePostRequestBody(instantiatePostRequestBody: InstantiatePostRequestBody | undefined = {} as InstantiatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { instantiatePostRequestBody.displayName = n.getStringValue(); },
    }
}
