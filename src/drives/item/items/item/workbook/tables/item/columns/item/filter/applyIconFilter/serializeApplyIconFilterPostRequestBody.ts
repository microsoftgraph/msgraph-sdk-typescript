import { serializeWorkbookIcon } from '../../../../../../../../../../../models/serializeWorkbookIcon';
import { type WorkbookIcon } from '../../../../../../../../../../../models/workbookIcon';
import { type ApplyIconFilterPostRequestBody } from './applyIconFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyIconFilterPostRequestBody(writer: SerializationWriter, applyIconFilterPostRequestBody: ApplyIconFilterPostRequestBody | undefined = {} as ApplyIconFilterPostRequestBody) : void {
        writer.writeObjectValue<WorkbookIcon>("icon", applyIconFilterPostRequestBody.icon, serializeWorkbookIcon);
        writer.writeAdditionalData(applyIconFilterPostRequestBody.additionalData);
}
