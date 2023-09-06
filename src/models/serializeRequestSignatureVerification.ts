import { type RequestSignatureVerification } from './requestSignatureVerification';
import { WeakAlgorithms } from './weakAlgorithms';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRequestSignatureVerification(writer: SerializationWriter, requestSignatureVerification: RequestSignatureVerification | undefined = {} as RequestSignatureVerification) : void {
        writer.writeEnumValue<WeakAlgorithms[]>("allowedWeakAlgorithms", requestSignatureVerification.allowedWeakAlgorithms);
        writer.writeBooleanValue("isSignedRequestRequired", requestSignatureVerification.isSignedRequestRequired);
        writer.writeStringValue("@odata.type", requestSignatureVerification.odataType);
        writer.writeAdditionalData(requestSignatureVerification.additionalData);
}
