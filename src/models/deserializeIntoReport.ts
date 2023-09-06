import { type Report } from './report';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoReport(report: Report | undefined = {} as Report) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { report.content = n.getStringValue(); },
        "@odata.type": n => { report.odataType = n.getStringValue(); },
    }
}
