import { serializeEntity } from './serializeEntity';
import { serializeWorkbookFilterCriteria } from './serializeWorkbookFilterCriteria';
import { type WorkbookFilter } from './workbookFilter';
import { type WorkbookFilterCriteria } from './workbookFilterCriteria';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkbookFilter(writer: SerializationWriter, workbookFilter: WorkbookFilter | undefined = {} as WorkbookFilter) : void {
        serializeEntity(writer, workbookFilter)
        writer.writeObjectValue<WorkbookFilterCriteria>("criteria", workbookFilter.criteria, serializeWorkbookFilterCriteria);
}
