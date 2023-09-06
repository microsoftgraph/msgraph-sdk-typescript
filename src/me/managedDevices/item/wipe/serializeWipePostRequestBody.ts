import { type WipePostRequestBody } from './wipePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWipePostRequestBody(writer: SerializationWriter, wipePostRequestBody: WipePostRequestBody | undefined = {} as WipePostRequestBody) : void {
        writer.writeBooleanValue("keepEnrollmentData", wipePostRequestBody.keepEnrollmentData);
        writer.writeBooleanValue("keepUserData", wipePostRequestBody.keepUserData);
        writer.writeStringValue("macOsUnlockCode", wipePostRequestBody.macOsUnlockCode);
        writer.writeBooleanValue("persistEsimDataPlan", wipePostRequestBody.persistEsimDataPlan);
        writer.writeAdditionalData(wipePostRequestBody.additionalData);
}
