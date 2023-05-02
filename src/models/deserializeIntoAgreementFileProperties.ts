import {AgreementFileData} from './agreementFileData';
import {AgreementFileProperties} from './agreementFileProperties';
import {createAgreementFileDataFromDiscriminatorValue} from './createAgreementFileDataFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAgreementFileData} from './serializeAgreementFileData';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAgreementFileProperties(agreementFileProperties: AgreementFileProperties | undefined = {} as AgreementFileProperties) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(agreementFileProperties),
        "createdDateTime": n => { agreementFileProperties.createdDateTime = n.getDateValue(); },
        "displayName": n => { agreementFileProperties.displayName = n.getStringValue(); },
        "fileData": n => { agreementFileProperties.fileData = n.getObjectValue<AgreementFileData>(createAgreementFileDataFromDiscriminatorValue); },
        "fileName": n => { agreementFileProperties.fileName = n.getStringValue(); },
        "isDefault": n => { agreementFileProperties.isDefault = n.getBooleanValue(); },
        "isMajorVersion": n => { agreementFileProperties.isMajorVersion = n.getBooleanValue(); },
        "language": n => { agreementFileProperties.language = n.getStringValue(); },
    }
}
