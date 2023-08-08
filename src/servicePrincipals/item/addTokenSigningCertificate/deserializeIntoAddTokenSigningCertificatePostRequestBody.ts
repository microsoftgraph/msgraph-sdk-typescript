import type {AddTokenSigningCertificatePostRequestBody} from './addTokenSigningCertificatePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddTokenSigningCertificatePostRequestBody(addTokenSigningCertificatePostRequestBody: AddTokenSigningCertificatePostRequestBody | undefined = {} as AddTokenSigningCertificatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { addTokenSigningCertificatePostRequestBody.displayName = n.getStringValue(); },
        "endDateTime": n => { addTokenSigningCertificatePostRequestBody.endDateTime = n.getDateValue(); },
    }
}
