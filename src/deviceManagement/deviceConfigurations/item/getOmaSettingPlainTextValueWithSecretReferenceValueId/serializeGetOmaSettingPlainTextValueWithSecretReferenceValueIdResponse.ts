import { type GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse } from './getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse(writer: SerializationWriter, getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse: GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined = {} as GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse) : void {
        writer.writeStringValue("value", getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.value);
        writer.writeAdditionalData(getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.additionalData);
}
