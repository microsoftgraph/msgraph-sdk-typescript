import { type InstantiatePostRequestBody } from './instantiatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeInstantiatePostRequestBody(writer: SerializationWriter, instantiatePostRequestBody: InstantiatePostRequestBody | undefined = {} as InstantiatePostRequestBody) : void {
        writer.writeStringValue("displayName", instantiatePostRequestBody.displayName);
        writer.writeAdditionalData(instantiatePostRequestBody.additionalData);
}
