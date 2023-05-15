import {IpEvidence} from './ipEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpEvidence(writer: SerializationWriter, ipEvidence: IpEvidence | undefined = {} as IpEvidence) : void {
        serializeAlertEvidence(writer, ipEvidence)
        writer.writeStringValue("countryLetterCode", ipEvidence.countryLetterCode);
        writer.writeStringValue("ipAddress", ipEvidence.ipAddress);
}
