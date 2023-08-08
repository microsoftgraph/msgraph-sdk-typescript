import type {Prompt} from '../../../../models/prompt';
import {serializePrompt} from '../../../../models/serializePrompt';
import type {RecordResponsePostRequestBody} from './recordResponsePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecordResponsePostRequestBody(writer: SerializationWriter, recordResponsePostRequestBody: RecordResponsePostRequestBody | undefined = {} as RecordResponsePostRequestBody) : void {
        writer.writeBooleanValue("bargeInAllowed", recordResponsePostRequestBody.bargeInAllowed);
        writer.writeStringValue("clientContext", recordResponsePostRequestBody.clientContext);
        writer.writeNumberValue("initialSilenceTimeoutInSeconds", recordResponsePostRequestBody.initialSilenceTimeoutInSeconds);
        writer.writeNumberValue("maxRecordDurationInSeconds", recordResponsePostRequestBody.maxRecordDurationInSeconds);
        writer.writeNumberValue("maxSilenceTimeoutInSeconds", recordResponsePostRequestBody.maxSilenceTimeoutInSeconds);
        writer.writeBooleanValue("playBeep", recordResponsePostRequestBody.playBeep);
        writer.writeCollectionOfObjectValues<Prompt>("prompts", recordResponsePostRequestBody.prompts, serializePrompt);
        writer.writeCollectionOfPrimitiveValues<string>("stopTones", recordResponsePostRequestBody.stopTones);
        writer.writeAdditionalData(recordResponsePostRequestBody.additionalData);
}
