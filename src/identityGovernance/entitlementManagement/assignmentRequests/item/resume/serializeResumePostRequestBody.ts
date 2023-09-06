import { type CustomExtensionData } from '../../../../../models/customExtensionData';
import { serializeCustomExtensionData } from '../../../../../models/serializeCustomExtensionData';
import { type ResumePostRequestBody } from './resumePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeResumePostRequestBody(writer: SerializationWriter, resumePostRequestBody: ResumePostRequestBody | undefined = {} as ResumePostRequestBody) : void {
        writer.writeObjectValue<CustomExtensionData>("data", resumePostRequestBody.data, serializeCustomExtensionData);
        writer.writeStringValue("source", resumePostRequestBody.source);
        writer.writeStringValue("type", resumePostRequestBody.type);
        writer.writeAdditionalData(resumePostRequestBody.additionalData);
}
