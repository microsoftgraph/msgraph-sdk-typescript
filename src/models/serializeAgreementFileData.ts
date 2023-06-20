import {AgreementFileData} from './agreementFileData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAgreementFileData(agreementFileData: AgreementFileData | undefined = {} as AgreementFileData, writer: SerializationWriter) : void {
        writer.writeStringValue("data", agreementFileData.data);
        writer.writeStringValue("@odata.type", agreementFileData.odataType);
        writer.writeAdditionalData(agreementFileData.additionalData);
}
