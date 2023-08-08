import {serializeWorkbookFilterCriteria} from '../../../../../../../../../../../models/serializeWorkbookFilterCriteria';
import type {WorkbookFilterCriteria} from '../../../../../../../../../../../models/workbookFilterCriteria';
import type {ApplyPostRequestBody} from './applyPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyPostRequestBody(writer: SerializationWriter, applyPostRequestBody: ApplyPostRequestBody | undefined = {} as ApplyPostRequestBody) : void {
        writer.writeObjectValue<WorkbookFilterCriteria>("criteria", applyPostRequestBody.criteria, serializeWorkbookFilterCriteria);
        writer.writeAdditionalData(applyPostRequestBody.additionalData);
}
