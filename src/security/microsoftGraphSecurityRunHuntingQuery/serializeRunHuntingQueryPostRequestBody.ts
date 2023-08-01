import type {RunHuntingQueryPostRequestBody} from './runHuntingQueryPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRunHuntingQueryPostRequestBody(writer: SerializationWriter, runHuntingQueryPostRequestBody: RunHuntingQueryPostRequestBody | undefined = {} as RunHuntingQueryPostRequestBody) : void {
        writer.writeStringValue("query", runHuntingQueryPostRequestBody.query);
        writer.writeAdditionalData(runHuntingQueryPostRequestBody.additionalData);
}
