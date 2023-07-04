import {Artifact} from './artifact';
import {createArtifactFromDiscriminatorValue} from './createArtifactFromDiscriminatorValue';
import {createHostFromDiscriminatorValue} from './createHostFromDiscriminatorValue';
import {deserializeIntoArtifact} from './deserializeIntoArtifact';
import {Host} from './host';
import {PassiveDnsRecord} from './passiveDnsRecord';
import {serializeArtifact} from './serializeArtifact';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPassiveDnsRecord(passiveDnsRecord: PassiveDnsRecord | undefined = {} as PassiveDnsRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoArtifact(passiveDnsRecord),
        "artifact": n => { passiveDnsRecord.artifact = n.getObjectValue<Artifact>(createArtifactFromDiscriminatorValue); },
        "collectedDateTime": n => { passiveDnsRecord.collectedDateTime = n.getDateValue(); },
        "firstSeenDateTime": n => { passiveDnsRecord.firstSeenDateTime = n.getDateValue(); },
        "lastSeenDateTime": n => { passiveDnsRecord.lastSeenDateTime = n.getDateValue(); },
        "parentHost": n => { passiveDnsRecord.parentHost = n.getObjectValue<Host>(createHostFromDiscriminatorValue); },
        "recordType": n => { passiveDnsRecord.recordType = n.getStringValue(); },
    }
}
