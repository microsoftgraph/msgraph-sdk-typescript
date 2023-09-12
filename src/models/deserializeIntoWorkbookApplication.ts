import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type WorkbookApplication } from './workbookApplication';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookApplication(workbookApplication: WorkbookApplication | undefined = {} as WorkbookApplication) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookApplication),
        "calculationMode": n => { workbookApplication.calculationMode = n.getStringValue(); },
    }
}
