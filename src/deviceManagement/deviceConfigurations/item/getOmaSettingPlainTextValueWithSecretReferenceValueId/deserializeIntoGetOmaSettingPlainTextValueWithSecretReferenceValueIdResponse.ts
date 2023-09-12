import { type GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse } from './getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse(getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse: GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined = {} as GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.value = n.getStringValue(); },
    }
}
