import type {Report} from './report';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReport(writer: SerializationWriter, report: Report | undefined = {} as Report) : void {
        writer.writeStringValue("content", report.content);
        writer.writeStringValue("@odata.type", report.odataType);
        writer.writeAdditionalData(report.additionalData);
}
