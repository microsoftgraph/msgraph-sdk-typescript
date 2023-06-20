import {BaseDeltaFunctionResponse} from './baseDeltaFunctionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseDeltaFunctionResponse(baseDeltaFunctionResponse: BaseDeltaFunctionResponse | undefined = {} as BaseDeltaFunctionResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.deltaLink", baseDeltaFunctionResponse.odataDeltaLink);
        writer.writeStringValue("@odata.nextLink", baseDeltaFunctionResponse.odataNextLink);
        writer.writeAdditionalData(baseDeltaFunctionResponse.additionalData);
}
