import { type BaseDeltaFunctionResponse } from './baseDeltaFunctionResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBaseDeltaFunctionResponse(writer: SerializationWriter, baseDeltaFunctionResponse: BaseDeltaFunctionResponse | undefined = {} as BaseDeltaFunctionResponse) : void {
        writer.writeStringValue("@odata.deltaLink", baseDeltaFunctionResponse.odataDeltaLink);
        writer.writeStringValue("@odata.nextLink", baseDeltaFunctionResponse.odataNextLink);
        writer.writeAdditionalData(baseDeltaFunctionResponse.additionalData);
}
