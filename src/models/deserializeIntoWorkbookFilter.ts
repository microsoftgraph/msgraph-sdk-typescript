import {createWorkbookFilterCriteriaFromDiscriminatorValue} from './createWorkbookFilterCriteriaFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWorkbookFilterCriteria} from './serializeWorkbookFilterCriteria';
import {WorkbookFilter} from './workbookFilter';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFilter(workbookFilter: WorkbookFilter | undefined = {} as WorkbookFilter) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFilter),
        "criteria": n => { workbookFilter.criteria = n.getObjectValue<WorkbookFilterCriteria>(createWorkbookFilterCriteriaFromDiscriminatorValue); },
    }
}
