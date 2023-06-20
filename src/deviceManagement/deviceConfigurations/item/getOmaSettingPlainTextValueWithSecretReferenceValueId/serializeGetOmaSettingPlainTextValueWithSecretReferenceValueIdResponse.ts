import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse(getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse: GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined = {} as GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("value", getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.value);
        writer.writeAdditionalData(getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.additionalData);
}
