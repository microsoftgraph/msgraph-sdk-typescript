import { createWorkbookFilterCriteriaFromDiscriminatorValue } from './createWorkbookFilterCriteriaFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeWorkbookFilterCriteria } from './serializeWorkbookFilterCriteria';
import { type WorkbookFilter } from './workbookFilter';
import { type WorkbookFilterCriteria } from './workbookFilterCriteria';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFilter(workbookFilter: WorkbookFilter | undefined = {} as WorkbookFilter) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFilter),
        "criteria": n => { workbookFilter.criteria = n.getObjectValue<WorkbookFilterCriteria>(createWorkbookFilterCriteriaFromDiscriminatorValue); },
    }
}
