import {RequestSignatureVerification} from './requestSignatureVerification';
import {WeakAlgorithms} from './weakAlgorithms';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequestSignatureVerification(requestSignatureVerification: RequestSignatureVerification | undefined = {} as RequestSignatureVerification) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedWeakAlgorithms": n => { requestSignatureVerification.allowedWeakAlgorithms = n.getEnumValue<WeakAlgorithms>(WeakAlgorithms); },
        "isSignedRequestRequired": n => { requestSignatureVerification.isSignedRequestRequired = n.getBooleanValue(); },
        "@odata.type": n => { requestSignatureVerification.odataType = n.getStringValue(); },
    }
}
