import {serializeWorkbookWorksheetProtectionOptions} from '../../../../../../../../../models/serializeWorkbookWorksheetProtectionOptions';
import type {WorkbookWorksheetProtectionOptions} from '../../../../../../../../../models/workbookWorksheetProtectionOptions';
import type {ProtectPostRequestBody} from './protectPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProtectPostRequestBody(writer: SerializationWriter, protectPostRequestBody: ProtectPostRequestBody | undefined = {} as ProtectPostRequestBody) : void {
        writer.writeObjectValue<WorkbookWorksheetProtectionOptions>("options", protectPostRequestBody.options, serializeWorkbookWorksheetProtectionOptions);
        writer.writeAdditionalData(protectPostRequestBody.additionalData);
}
