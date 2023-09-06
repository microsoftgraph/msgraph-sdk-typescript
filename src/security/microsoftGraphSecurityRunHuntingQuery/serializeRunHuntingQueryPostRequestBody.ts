import { type RunHuntingQueryPostRequestBody } from './runHuntingQueryPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRunHuntingQueryPostRequestBody(writer: SerializationWriter, runHuntingQueryPostRequestBody: RunHuntingQueryPostRequestBody | undefined = {} as RunHuntingQueryPostRequestBody) : void {
        writer.writeStringValue("query", runHuntingQueryPostRequestBody.query);
        writer.writeAdditionalData(runHuntingQueryPostRequestBody.additionalData);
}
