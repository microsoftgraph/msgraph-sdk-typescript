import {createWorkbookIconFromDiscriminatorValue} from '../../../../../../../../../../../../../models/createWorkbookIconFromDiscriminatorValue';
import {serializeWorkbookIcon} from '../../../../../../../../../../../../../models/serializeWorkbookIcon';
import type {WorkbookIcon} from '../../../../../../../../../../../../../models/workbookIcon';
import type {ApplyIconFilterPostRequestBody} from './applyIconFilterPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyIconFilterPostRequestBody(applyIconFilterPostRequestBody: ApplyIconFilterPostRequestBody | undefined = {} as ApplyIconFilterPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "icon": n => { applyIconFilterPostRequestBody.icon = n.getObjectValue<WorkbookIcon>(createWorkbookIconFromDiscriminatorValue); },
    }
}
