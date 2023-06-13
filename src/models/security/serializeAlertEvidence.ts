import {AlertEvidence} from './alertEvidence';
import {EvidenceRemediationStatus} from './evidenceRemediationStatus';
import {EvidenceRole} from './evidenceRole';
import {EvidenceVerdict} from './evidenceVerdict';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertEvidence(writer: SerializationWriter, alertEvidence: AlertEvidence | undefined = {} as AlertEvidence) : void {
        writer.writeDateValue("createdDateTime", alertEvidence.createdDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("detailedRoles", alertEvidence.detailedRoles);
        writer.writeStringValue("@odata.type", alertEvidence.odataType);
        writer.writeEnumValue<EvidenceRemediationStatus>("remediationStatus", alertEvidence.remediationStatus);
        writer.writeStringValue("remediationStatusDetails", alertEvidence.remediationStatusDetails);
        if(alertEvidence.roles)
        writer.writeEnumValue<EvidenceRole>("roles", ...alertEvidence.roles);
        writer.writeCollectionOfPrimitiveValues<string>("tags", alertEvidence.tags);
        writer.writeEnumValue<EvidenceVerdict>("verdict", alertEvidence.verdict);
        writer.writeAdditionalData(alertEvidence.additionalData);
}
