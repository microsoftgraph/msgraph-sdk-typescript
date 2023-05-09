import {serializeEntity} from './serializeEntity';
import {serializeWorkbookFilterCriteria} from './serializeWorkbookFilterCriteria';
import {WorkbookFilter} from './workbookFilter';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFilter(writer: SerializationWriter, workbookFilter: WorkbookFilter | undefined = {} as WorkbookFilter) : void {
        serializeEntity(writer, workbookFilter)
        writer.writeObjectValue<WorkbookFilterCriteria>("criteria", workbookFilter.criteria, serializeWorkbookFilterCriteria);
}
