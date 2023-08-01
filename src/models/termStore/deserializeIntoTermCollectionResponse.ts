import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {serializeTerm} from './serializeTerm';
import type {Term} from './term';
import type {TermCollectionResponse} from './termCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermCollectionResponse(termCollectionResponse: TermCollectionResponse | undefined = {} as TermCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termCollectionResponse),
        "value": n => { termCollectionResponse.value = n.getCollectionOfObjectValues<Term>(createTermFromDiscriminatorValue); },
    }
}
