import { type AmazonResourceEvidence } from './amazonResourceEvidence';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAmazonResourceEvidence(writer: SerializationWriter, amazonResourceEvidence: AmazonResourceEvidence | undefined = {} as AmazonResourceEvidence) : void {
        serializeAlertEvidence(writer, amazonResourceEvidence)
        writer.writeStringValue("amazonAccountId", amazonResourceEvidence.amazonAccountId);
        writer.writeStringValue("amazonResourceId", amazonResourceEvidence.amazonResourceId);
        writer.writeStringValue("resourceName", amazonResourceEvidence.resourceName);
        writer.writeStringValue("resourceType", amazonResourceEvidence.resourceType);
}
