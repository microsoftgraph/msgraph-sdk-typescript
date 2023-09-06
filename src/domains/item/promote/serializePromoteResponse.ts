import { type PromoteResponse } from './promoteResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePromoteResponse(writer: SerializationWriter, promoteResponse: PromoteResponse | undefined = {} as PromoteResponse) : void {
        writer.writeBooleanValue("value", promoteResponse.value);
        writer.writeAdditionalData(promoteResponse.additionalData);
}
