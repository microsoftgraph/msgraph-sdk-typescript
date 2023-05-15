import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookIcon(writer: SerializationWriter, workbookIcon: WorkbookIcon | undefined = {} as WorkbookIcon) : void {
        writer.writeNumberValue("index", workbookIcon.index);
        writer.writeStringValue("@odata.type", workbookIcon.odataType);
        writer.writeStringValue("set", workbookIcon.set);
        writer.writeAdditionalData(workbookIcon.additionalData);
}
