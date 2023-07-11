import {CustomTaskExtensionCallbackData} from '../../../../../../../../../../models/identityGovernance/customTaskExtensionCallbackData';
import {serializeCustomTaskExtensionCallbackData} from '../../../../../../../../../../models/identityGovernance/serializeCustomTaskExtensionCallbackData';
import {ResumePostRequestBody} from './resumePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResumePostRequestBody(writer: SerializationWriter, resumePostRequestBody: ResumePostRequestBody | undefined = {} as ResumePostRequestBody) : void {
        writer.writeObjectValue<CustomTaskExtensionCallbackData>("data", resumePostRequestBody.data, serializeCustomTaskExtensionCallbackData);
        writer.writeStringValue("source", resumePostRequestBody.source);
        writer.writeStringValue("type", resumePostRequestBody.type);
        writer.writeAdditionalData(resumePostRequestBody.additionalData);
}
