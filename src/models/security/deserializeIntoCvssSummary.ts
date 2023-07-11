import {CvssSummary} from './cvssSummary';
import {VulnerabilitySeverity} from './vulnerabilitySeverity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCvssSummary(cvssSummary: CvssSummary | undefined = {} as CvssSummary) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { cvssSummary.odataType = n.getStringValue(); },
        "score": n => { cvssSummary.score = n.getNumberValue(); },
        "severity": n => { cvssSummary.severity = n.getEnumValue<VulnerabilitySeverity>(VulnerabilitySeverity); },
        "vectorString": n => { cvssSummary.vectorString = n.getStringValue(); },
    }
}
