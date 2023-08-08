import type {AlterationResponse} from './alterationResponse';
import {createSearchAlterationFromDiscriminatorValue} from './createSearchAlterationFromDiscriminatorValue';
import type {SearchAlteration} from './searchAlteration';
import {SearchAlterationType} from './searchAlterationType';
import {serializeSearchAlteration} from './serializeSearchAlteration';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlterationResponse(alterationResponse: AlterationResponse | undefined = {} as AlterationResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { alterationResponse.odataType = n.getStringValue(); },
        "originalQueryString": n => { alterationResponse.originalQueryString = n.getStringValue(); },
        "queryAlteration": n => { alterationResponse.queryAlteration = n.getObjectValue<SearchAlteration>(createSearchAlterationFromDiscriminatorValue); },
        "queryAlterationType": n => { alterationResponse.queryAlterationType = n.getEnumValue<SearchAlterationType>(SearchAlterationType); },
    }
}
