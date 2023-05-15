import {serializeWorkbookWorksheetProtectionOptions} from '../../../../../../../../../models/serializeWorkbookWorksheetProtectionOptions';
import {WorkbookWorksheetProtectionOptions} from '../../../../../../../../../models/workbookWorksheetProtectionOptions';
import {ProtectPostRequestBody} from './protectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProtectPostRequestBody(writer: SerializationWriter, protectPostRequestBody: ProtectPostRequestBody | undefined = {} as ProtectPostRequestBody) : void {
        writer.writeObjectValue<WorkbookWorksheetProtectionOptions>("options", protectPostRequestBody.options, serializeWorkbookWorksheetProtectionOptions);
        writer.writeAdditionalData(protectPostRequestBody.additionalData);
}
