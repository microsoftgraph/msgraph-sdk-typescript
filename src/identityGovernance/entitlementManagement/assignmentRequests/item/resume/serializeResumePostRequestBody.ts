import {CustomExtensionData} from '../../../../../models/customExtensionData';
import {serializeCustomExtensionData} from '../../../../../models/serializeCustomExtensionData';
import {ResumePostRequestBody} from './resumePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResumePostRequestBody(writer: SerializationWriter, resumePostRequestBody: ResumePostRequestBody | undefined = {} as ResumePostRequestBody) : void {
        writer.writeObjectValue<CustomExtensionData>("data", resumePostRequestBody.data, serializeCustomExtensionData);
        writer.writeStringValue("source", resumePostRequestBody.source);
        writer.writeStringValue("type", resumePostRequestBody.type);
        writer.writeAdditionalData(resumePostRequestBody.additionalData);
}
