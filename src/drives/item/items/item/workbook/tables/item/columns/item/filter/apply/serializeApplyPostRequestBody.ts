import {serializeWorkbookFilterCriteria} from '../../../../../../../../../../../models/serializeWorkbookFilterCriteria';
import {WorkbookFilterCriteria} from '../../../../../../../../../../../models/workbookFilterCriteria';
import {ApplyPostRequestBody} from './applyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyPostRequestBody(applyPostRequestBody: ApplyPostRequestBody | undefined = {} as ApplyPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<WorkbookFilterCriteria>("criteria", applyPostRequestBody.criteria, serializeWorkbookFilterCriteria);
        writer.writeAdditionalData(applyPostRequestBody.additionalData);
}
