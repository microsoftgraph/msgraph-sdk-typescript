import { type TermColumn } from './termColumn';
import { createSetFromDiscriminatorValue } from './termStore/createSetFromDiscriminatorValue';
import { createTermFromDiscriminatorValue } from './termStore/createTermFromDiscriminatorValue';
import { serializeSet } from './termStore/serializeSet';
import { serializeTerm } from './termStore/serializeTerm';
import { type Set } from './termStore/set';
import { type Term } from './termStore/term';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTermColumn(termColumn: TermColumn | undefined = {} as TermColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleValues": n => { termColumn.allowMultipleValues = n.getBooleanValue(); },
        "@odata.type": n => { termColumn.odataType = n.getStringValue(); },
        "parentTerm": n => { termColumn.parentTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
        "showFullyQualifiedName": n => { termColumn.showFullyQualifiedName = n.getBooleanValue(); },
        "termSet": n => { termColumn.termSet = n.getObjectValue<Set>(createSetFromDiscriminatorValue); },
    }
}
