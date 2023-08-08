import {serializeWorkbookSortField} from '../../../../../../../../../models/serializeWorkbookSortField';
import type {WorkbookSortField} from '../../../../../../../../../models/workbookSortField';
import type {ApplyPostRequestBody} from './applyPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyPostRequestBody(writer: SerializationWriter, applyPostRequestBody: ApplyPostRequestBody | undefined = {} as ApplyPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<WorkbookSortField>("fields", applyPostRequestBody.fields, serializeWorkbookSortField);
        writer.writeBooleanValue("matchCase", applyPostRequestBody.matchCase);
        writer.writeStringValue("method", applyPostRequestBody.method);
        writer.writeAdditionalData(applyPostRequestBody.additionalData);
}
