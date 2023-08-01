import {createWorkbookFilterCriteriaFromDiscriminatorValue} from '../../../../../../../../../../../../../models/createWorkbookFilterCriteriaFromDiscriminatorValue';
import {serializeWorkbookFilterCriteria} from '../../../../../../../../../../../../../models/serializeWorkbookFilterCriteria';
import type {WorkbookFilterCriteria} from '../../../../../../../../../../../../../models/workbookFilterCriteria';
import type {ApplyPostRequestBody} from './applyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplyPostRequestBody(applyPostRequestBody: ApplyPostRequestBody | undefined = {} as ApplyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { applyPostRequestBody.criteria = n.getObjectValue<WorkbookFilterCriteria>(createWorkbookFilterCriteriaFromDiscriminatorValue); },
    }
}
