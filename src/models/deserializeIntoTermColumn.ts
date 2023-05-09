import {TermColumn} from './termColumn';
import {createSetFromDiscriminatorValue} from './termStore/createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './termStore/createTermFromDiscriminatorValue';
import {serializeSet} from './termStore/serializeSet';
import {serializeTerm} from './termStore/serializeTerm';
import {Set} from './termStore/set';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermColumn(termColumn: TermColumn | undefined = {} as TermColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleValues": n => { termColumn.allowMultipleValues = n.getBooleanValue(); },
        "@odata.type": n => { termColumn.odataType = n.getStringValue(); },
        "parentTerm": n => { termColumn.parentTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
        "showFullyQualifiedName": n => { termColumn.showFullyQualifiedName = n.getBooleanValue(); },
        "termSet": n => { termColumn.termSet = n.getObjectValue<Set>(createSetFromDiscriminatorValue); },
    }
}
