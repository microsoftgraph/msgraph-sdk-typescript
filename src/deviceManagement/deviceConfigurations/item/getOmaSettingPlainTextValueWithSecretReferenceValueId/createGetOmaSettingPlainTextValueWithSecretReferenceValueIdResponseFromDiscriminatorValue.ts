import {deserializeIntoGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './deserializeIntoGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse';
import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse;
}
