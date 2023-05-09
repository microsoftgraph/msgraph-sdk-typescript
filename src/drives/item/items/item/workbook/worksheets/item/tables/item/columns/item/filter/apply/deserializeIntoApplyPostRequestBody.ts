import {createWorkbookFilterCriteriaFromDiscriminatorValue} from '../../../../../../../../../../../../../models/createWorkbookFilterCriteriaFromDiscriminatorValue';
import {serializeWorkbookFilterCriteria} from '../../../../../../../../../../../../../models/serializeWorkbookFilterCriteria';
import {WorkbookFilterCriteria} from '../../../../../../../../../../../../../models/workbookFilterCriteria';
import {ApplyPostRequestBody} from './applyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyPostRequestBody(applyPostRequestBody: ApplyPostRequestBody | undefined = {} as ApplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { applyPostRequestBody.criteria = n.getObjectValue<WorkbookFilterCriteria>(createWorkbookFilterCriteriaFromDiscriminatorValue); },
    }
}
