import {PromoteResponse} from './promoteResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePromoteResponse(writer: SerializationWriter, promoteResponse: PromoteResponse | undefined = {} as PromoteResponse) : void {
        writer.writeBooleanValue("value", promoteResponse.value);
        writer.writeAdditionalData(promoteResponse.additionalData);
}
