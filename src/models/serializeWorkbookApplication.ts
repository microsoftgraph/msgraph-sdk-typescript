import {serializeEntity} from './serializeEntity';
import {WorkbookApplication} from './workbookApplication';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookApplication(writer: SerializationWriter, workbookApplication: WorkbookApplication | undefined = {} as WorkbookApplication) : void {
        serializeEntity(writer, workbookApplication)
        writer.writeStringValue("calculationMode", workbookApplication.calculationMode);
}
