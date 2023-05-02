import {AgreementFileData} from './agreementFileData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileData(agreementFileData: AgreementFileData | undefined = {} as AgreementFileData) : Record<string, (node: ParseNode) => void> {
    return {
        "data": n => { agreementFileData.data = n.getStringValue(); },
        "@odata.type": n => { agreementFileData.odataType = n.getStringValue(); },
    }
}
