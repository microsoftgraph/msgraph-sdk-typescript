import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import type {IpEvidence} from './ipEvidence';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIpEvidence(ipEvidence: IpEvidence | undefined = {} as IpEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(ipEvidence),
        "countryLetterCode": n => { ipEvidence.countryLetterCode = n.getStringValue(); },
        "ipAddress": n => { ipEvidence.ipAddress = n.getStringValue(); },
    }
}
