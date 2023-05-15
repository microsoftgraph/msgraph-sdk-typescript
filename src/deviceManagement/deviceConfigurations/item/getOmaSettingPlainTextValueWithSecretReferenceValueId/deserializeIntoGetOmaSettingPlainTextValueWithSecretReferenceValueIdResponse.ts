import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse(getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse: GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined = {} as GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.value = n.getStringValue(); },
    }
}
