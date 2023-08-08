import {serializeEntity} from './serializeEntity';
import type {WorkbookApplication} from './workbookApplication';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookApplication(writer: SerializationWriter, workbookApplication: WorkbookApplication | undefined = {} as WorkbookApplication) : void {
        serializeEntity(writer, workbookApplication)
        writer.writeStringValue("calculationMode", workbookApplication.calculationMode);
}
