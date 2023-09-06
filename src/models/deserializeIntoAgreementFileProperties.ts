import { type AgreementFileData } from './agreementFileData';
import { type AgreementFileProperties } from './agreementFileProperties';
import { createAgreementFileDataFromDiscriminatorValue } from './createAgreementFileDataFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAgreementFileData } from './serializeAgreementFileData';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
