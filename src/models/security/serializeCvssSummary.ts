import {CvssSummary} from './cvssSummary';
import {VulnerabilitySeverity} from './vulnerabilitySeverity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCvssSummary(writer: SerializationWriter, cvssSummary: CvssSummary | undefined = {} as CvssSummary) : void {
        writer.writeStringValue("@odata.type", cvssSummary.odataType);
        writer.writeNumberValue("score", cvssSummary.score);
        writer.writeEnumValue<VulnerabilitySeverity>("severity", cvssSummary.severity);
        writer.writeStringValue("vectorString", cvssSummary.vectorString);
        writer.writeAdditionalData(cvssSummary.additionalData);
}
