import {AlertEvidence} from './alertEvidence';
import {EvidenceRemediationStatus} from './evidenceRemediationStatus';
import {EvidenceRole} from './evidenceRole';
import {EvidenceVerdict} from './evidenceVerdict';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertEvidence(alertEvidence: AlertEvidence | undefined = {} as AlertEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { alertEvidence.createdDateTime = n.getDateValue(); },
        "detailedRoles": n => { alertEvidence.detailedRoles = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { alertEvidence.odataType = n.getStringValue(); },
        "remediationStatus": n => { alertEvidence.remediationStatus = n.getEnumValue<EvidenceRemediationStatus>(EvidenceRemediationStatus); },
        "remediationStatusDetails": n => { alertEvidence.remediationStatusDetails = n.getStringValue(); },
        "roles": n => { alertEvidence.roles = n.getCollectionOfEnumValues<EvidenceRole>(EvidenceRole); },
        "tags": n => { alertEvidence.tags = n.getCollectionOfPrimitiveValues<string>(); },
        "verdict": n => { alertEvidence.verdict = n.getEnumValue<EvidenceVerdict>(EvidenceVerdict); },
    }
}
