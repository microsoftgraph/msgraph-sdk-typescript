import { type AgreementFileData } from './agreementFileData';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAgreementFileData(writer: SerializationWriter, agreementFileData: AgreementFileData | undefined = {} as AgreementFileData) : void {
        writer.writeStringValue("data", agreementFileData.data);
        writer.writeStringValue("@odata.type", agreementFileData.odataType);
        writer.writeAdditionalData(agreementFileData.additionalData);
}
