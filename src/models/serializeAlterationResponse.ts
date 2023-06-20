import {AlterationResponse} from './alterationResponse';
import {SearchAlteration} from './searchAlteration';
import {SearchAlterationType} from './searchAlterationType';
import {serializeSearchAlteration} from './serializeSearchAlteration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlterationResponse(alterationResponse: AlterationResponse | undefined = {} as AlterationResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", alterationResponse.odataType);
        writer.writeStringValue("originalQueryString", alterationResponse.originalQueryString);
        writer.writeObjectValue<SearchAlteration>("queryAlteration", alterationResponse.queryAlteration, serializeSearchAlteration);
        writer.writeEnumValue<SearchAlterationType>("queryAlterationType", alterationResponse.queryAlterationType);
        writer.writeAdditionalData(alterationResponse.additionalData);
}
