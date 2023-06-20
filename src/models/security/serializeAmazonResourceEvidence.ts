import {AmazonResourceEvidence} from './amazonResourceEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAmazonResourceEvidence(amazonResourceEvidence: AmazonResourceEvidence | undefined = {} as AmazonResourceEvidence, writer: SerializationWriter) : void {
        serializeAlertEvidence(writer, amazonResourceEvidence)
        writer.writeStringValue("amazonAccountId", amazonResourceEvidence.amazonAccountId);
        writer.writeStringValue("amazonResourceId", amazonResourceEvidence.amazonResourceId);
        writer.writeStringValue("resourceName", amazonResourceEvidence.resourceName);
        writer.writeStringValue("resourceType", amazonResourceEvidence.resourceType);
}
