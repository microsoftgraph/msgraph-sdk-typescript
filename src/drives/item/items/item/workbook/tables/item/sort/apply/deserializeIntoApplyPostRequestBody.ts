import {createWorkbookSortFieldFromDiscriminatorValue} from '../../../../../../../../../models/createWorkbookSortFieldFromDiscriminatorValue';
import {serializeWorkbookSortField} from '../../../../../../../../../models/serializeWorkbookSortField';
import type {WorkbookSortField} from '../../../../../../../../../models/workbookSortField';
import type {ApplyPostRequestBody} from './applyPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyPostRequestBody(applyPostRequestBody: ApplyPostRequestBody | undefined = {} as ApplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fields": n => { applyPostRequestBody.fields = n.getCollectionOfObjectValues<WorkbookSortField>(createWorkbookSortFieldFromDiscriminatorValue); },
        "matchCase": n => { applyPostRequestBody.matchCase = n.getBooleanValue(); },
        "method": n => { applyPostRequestBody.method = n.getStringValue(); },
    }
}
