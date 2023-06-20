import {IpEvidence} from './ipEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpEvidence(ipEvidence: IpEvidence | undefined = {} as IpEvidence, writer: SerializationWriter) : void {
        serializeAlertEvidence(writer, ipEvidence)
        writer.writeStringValue("countryLetterCode", ipEvidence.countryLetterCode);
        writer.writeStringValue("ipAddress", ipEvidence.ipAddress);
}
