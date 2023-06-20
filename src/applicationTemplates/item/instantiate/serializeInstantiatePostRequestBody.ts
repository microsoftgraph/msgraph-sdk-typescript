import {InstantiatePostRequestBody} from './instantiatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInstantiatePostRequestBody(instantiatePostRequestBody: InstantiatePostRequestBody | undefined = {} as InstantiatePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", instantiatePostRequestBody.displayName);
        writer.writeAdditionalData(instantiatePostRequestBody.additionalData);
}
