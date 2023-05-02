import {AlterationResponse} from './alterationResponse';
import {createSearchAlterationFromDiscriminatorValue} from './createSearchAlterationFromDiscriminatorValue';
import {SearchAlteration} from './searchAlteration';
import {SearchAlterationType} from './searchAlterationType';
import {serializeSearchAlteration} from './serializeSearchAlteration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlterationResponse(alterationResponse: AlterationResponse | undefined = {} as AlterationResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { alterationResponse.odataType = n.getStringValue(); },
        "originalQueryString": n => { alterationResponse.originalQueryString = n.getStringValue(); },
        "queryAlteration": n => { alterationResponse.queryAlteration = n.getObjectValue<SearchAlteration>(createSearchAlterationFromDiscriminatorValue); },
        "queryAlterationType": n => { alterationResponse.queryAlterationType = n.getEnumValue<SearchAlterationType>(SearchAlterationType); },
    }
}
