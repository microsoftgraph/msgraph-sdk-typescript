import {createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue} from '../../../../../../../../../models/createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue';
import {serializeWorkbookWorksheetProtectionOptions} from '../../../../../../../../../models/serializeWorkbookWorksheetProtectionOptions';
import type {WorkbookWorksheetProtectionOptions} from '../../../../../../../../../models/workbookWorksheetProtectionOptions';
import type {ProtectPostRequestBody} from './protectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProtectPostRequestBody(protectPostRequestBody: ProtectPostRequestBody | undefined = {} as ProtectPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "options": n => { protectPostRequestBody.options = n.getObjectValue<WorkbookWorksheetProtectionOptions>(createWorkbookWorksheetProtectionOptionsFromDiscriminatorValue); },
    }
}
